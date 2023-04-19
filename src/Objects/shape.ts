import ShapeInterface from "Interfaces/shape-interface";
import Point from "Objects/point";
import Matrix from "Objects/matrix";
import Face from "Objects/face";
import Transformation from "Operations/transformation";

class Shape implements ShapeInterface {
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

  /* TODO: TIDAK DIBUTUHKAN */
  // public findCenter(): Point {
  //   let totalX = 0;
  //   let totalY = 0;
  //   let totalZ = 0;

  //   for (const f of this.arrayOfFace) {
  //     const [fX, fY, fZ] = f.findCenter().getTriplet();

  //     totalX += fX;
  //     totalY += fY;
  //     totalZ += fZ;
  //   }

  //   return new Point(
  //     totalX / this.arrayOfFace.length,
  //     totalY / this.arrayOfFace.length,
  //     totalZ / this.arrayOfFace.length
  //   );
  // }

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

  public getRawTexture(): Float32Array {
    const textureArray: number[] = [];
    const arrEl = [0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0];
    for (let i = 0; i < 72; i++) {
      textureArray.push(...arrEl);
    }

    return new Float32Array(textureArray);
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
}

export default Shape;
