import ShapeInterface from "Interfaces/shape-interface";
import TransformationInterface from "Interfaces/transformation-interface";
import Point from "Objects/point";
import Color from "Objects/color";
import Matrix from "Objects/matrix";
import Face from "Objects/face";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Transformation from "Operations/transformation";
import Projection from "Operations/projection";
import ProjectionParams from "Types/projection-params";
import ProjectionType from "Types/projection-type";
import ShaderStatus from "Types/shader-status";
import ProgramParam from "Types/program-param";
import Renderer from "Utils/renderer";

class Shape implements ShapeInterface, TransformationInterface {
  constructor(
    public readonly arrayOfFace: Face[],
    public tx: number,
    public ty: number,
    public tz: number,
    public angleX: number,
    public angleY: number,
    public angleZ: number,
    public sx: number,
    public sy: number,
    public sz: number
  ) {}

  /* TODO: BISA HILANGKAN INI JIKA BERHASIL */
  public findCenter(): Point {
    let totalX = 0;
    let totalY = 0;
    let totalZ = 0;

    for (const f of this.arrayOfFace) {
      const [fX, fY, fZ] = f.findCenter().getTriplet();

      totalX += fX;
      totalY += fY;
      totalZ += fZ;
    }

    return new Point(
      totalX / this.arrayOfFace.length,
      totalY / this.arrayOfFace.length,
      totalZ / this.arrayOfFace.length
    );
  }

  public moveX(delta: number): void {
    this.tx = delta;
  }

  public moveY(delta: number): void {
    this.ty = delta;
  }

  public moveZ(delta: number): void {
    this.tz = delta;
  }

  public rotateX(angle: number): void {
    this.angleX = angle;
  }

  public rotateY(angle: number): void {
    this.angleY = angle;
  }

  public rotateZ(angle: number): void {
    this.angleZ = angle;
  }

  public scaleX(delta: number): void {
    this.sx = delta;
  }

  public scaleY(delta: number): void {
    this.sy = delta;
  }

  public scaleZ(delta: number): void {
    this.sz = delta;
  }

  public getRawPosition(): Float32Array {
    const positionArray = this.arrayOfFace.flatMap((f) => f.getRawPosition());

    return new Float32Array(positionArray);
  }

  public getRawColor(): Float32Array {
    const colorArray = this.arrayOfFace.flatMap((f) =>
      Array<readonly [number, number, number]>(f.arrayOfPoint.length)
        .fill(f.getRawColor())
        .flat()
    );

    return new Float32Array(colorArray);
  }

  public getRawNormal(): Float32Array {
    const normalArray = this.arrayOfFace.flatMap((f) =>
      Array<readonly [number, number, number]>(f.arrayOfPoint.length)
        .fill(f.findNormal().getTriplet())
        .flat()
    );

    return new Float32Array(normalArray);
  }

  public countVertex(): number {
    return this.arrayOfFace.flatMap((f) => f.arrayOfPoint).length;
  }

  public getLocalMatrix(): Matrix {
    const pivot = new Point(0, 0, 0);

    return Transformation.general(
      this.tx,
      this.ty,
      this.tz,
      this.angleX,
      this.angleY,
      this.angleZ,
      this.sx,
      this.sy,
      this.sz,
      pivot
    );
  }

  public applyTransformation(): Shape {
    const matrix = this.getLocalMatrix();
    const arrayOfFace = this.arrayOfFace.map((f) => f.applyMatrix(matrix));

    return new Shape(arrayOfFace, 0, 0, 0, 0, 0, 0, 1, 1, 1);
  }

  /* TODO: BISA HILANGKAN INI JIKA BERHASIL */
  public render<T extends ProjectionType>(
    renderer: Renderer,
    projectionType: T,
    params: ProjectionParams[T],
    camera: Camera,
    offsetTranslateX: number,
    offsetTranslateY: number,
    ambientColor: Color,
    directionalLight: Light,
    shaderStatus: ShaderStatus
  ): void {
    /* Get Matrix */
    let matrix = this.getLocalMatrix();

    /* Get Inverse Transpose Matrix */
    const inverseTransposeMatrix = matrix.inverse().transpose();

    /* Add Lookat to Matrix */
    matrix = camera.lookAt().multiplyMatrix(matrix);

    /* Offset Position to Center of Object */
    matrix = Transformation.translation(
      offsetTranslateX,
      offsetTranslateY,
      0
    ).multiplyMatrix(matrix);

    /* Add Projection to Matrix */
    switch (projectionType) {
      case "orthographic":
        const {
          left,
          right,
          bottom,
          top,
          near: nearOrthograpic,
          far: farOrthographic,
        } = params as ProjectionParams["orthographic"];

        matrix = Projection.orthographic(
          left,
          right,
          bottom,
          top,
          nearOrthograpic,
          farOrthographic
        ).multiplyMatrix(matrix);
        break;
      case "perspective":
        const {
          fieldOfView,
          aspect,
          near: nearPerspective,
          far: farPerspective,
        } = params as ProjectionParams["perspective"];

        matrix = Projection.perspective(
          fieldOfView,
          aspect,
          nearPerspective,
          farPerspective
        ).multiplyMatrix(matrix);
        break;
      case "oblique":
        const {
          factor,
          angle,
          ortho_left,
          ortho_right,
          ortho_bottom,
          ortho_top,
          ortho_near,
          ortho_far,
        } = params as ProjectionParams["oblique"];

        matrix = Projection.oblique(
          factor,
          angle,
          ortho_left,
          ortho_right,
          ortho_bottom,
          ortho_top,
          ortho_near,
          ortho_far
        ).multiplyMatrix(matrix);
        break;
    }

    const rawMatrix = matrix.flatten();
    const rawInverseTransposeMatrix = inverseTransposeMatrix.flatten();

    /* Get Ambient Color */
    const rawAmbientColor = ambientColor.getTriplet();

    /* Get Directional Light */
    const rawDirectionalLight = directionalLight.getRawDirection();

    /* Create Program Parameter */
    const programParam: ProgramParam = {
      attributes: {
        rawPosition: this.getRawPosition(),
        rawColor: this.getRawColor(),
        rawNormal: this.getRawNormal(),
      },
      uniforms: {
        rawMatrix,
        rawInverseTransposeMatrix,
        rawAmbientColor,
        rawDirectionalLight,
        shaderStatus,
      },
    };

    /* Count Vertex */
    const count = this.countVertex();

    /* Render */
    renderer.render(programParam, count);
  }
}

export default Shape;
