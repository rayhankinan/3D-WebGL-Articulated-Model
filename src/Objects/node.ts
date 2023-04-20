import NodeInterface from "Interfaces/node-interface";
import Color from "Objects/color";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Shape from "Objects/shape";
import Matrix from "Objects/matrix";
import Face from "Objects/face";
import Transformation from "Operations/transformation";
import Projection from "Operations/projection";
import ProjectionParams from "Types/projection-params";
import ProjectionType from "Types/projection-type";
import ShaderStatus from "Types/shader-status";
import ProgramParam from "Types/program-param";
import Renderer from "Utils/renderer";

class Node extends Shape implements NodeInterface {
  constructor(
    public readonly index: string,
    public readonly children: Node[],
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
  ) {
    super(arrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz);
  }

  public findNode(index: string): Node {
    if (this.index === index) {
      return this;
    } else {
      let result: Node;

      for (const child of this.children) {
        const foundNode = child.findNode(index);

        if (foundNode) {
          result = foundNode;
          break;
        }
      }

      return result;
    }
  }

  public renderNode<T extends ProjectionType>(
    renderer: Renderer,
    projectionType: T,
    params: ProjectionParams[T],
    camera: Camera,
    offsetTranslateX: number,
    offsetTranslateY: number,
    ambientColor: Color,
    directionalLight: Light,
    shaderStatus: ShaderStatus,
    mappingMode: string,
    currentWorldMatrix: Matrix
  ): void {
    /* Get Matrix */
    const localMatrix = this.getLocalMatrix();

    /* Initialize with World Matrix */
    let matrix = currentWorldMatrix.multiplyMatrix(localMatrix);

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
        rawNormal: this.getRawNormal(),
        rawTexture: this.getRawTexture(),
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
    renderer.render(programParam, count, mappingMode);
  }

  public renderTree<T extends ProjectionType>(
    renderer: Renderer,
    projectionType: T,
    params: ProjectionParams[T],
    camera: Camera,
    offsetTranslateX: number,
    offsetTranslateY: number,
    ambientColor: Color,
    directionalLight: Light,
    shaderStatus: ShaderStatus,
    mappingMode: string,
    currentWorldMatrix: Matrix
  ): void {
    /* Render Current Node */
    this.renderNode(
      renderer,
      projectionType,
      params,
      camera,
      offsetTranslateX,
      offsetTranslateY,
      ambientColor,
      directionalLight,
      shaderStatus,
      mappingMode,
      currentWorldMatrix
    );

    /* Change World Matrix for Children */
    const childrenWorldMatrix = currentWorldMatrix.multiplyMatrix(
      this.getLocalMatrix()
    );

    /* Render Children */
    for (const child of this.children) {
      child.renderTree(
        renderer,
        projectionType,
        params,
        camera,
        offsetTranslateX,
        offsetTranslateY,
        ambientColor,
        directionalLight,
        shaderStatus,
        mappingMode,
        childrenWorldMatrix
      );
    }
  }

  public applyTransformationNode(currentWorldMatrix: Matrix): Node {
    /* Get Matrix */
    const localMatrix = this.getLocalMatrix();

    /* Multiplied with World Matrix */
    const matrix = currentWorldMatrix.multiplyMatrix(localMatrix);

    /* Count Array of Face */
    const arrayOfFace = this.arrayOfFace.map((f) => f.applyMatrix(matrix));

    /* Get Index */
    const index = this.index.slice();

    return new Node(index, [], arrayOfFace, 0, 0, 0, 0, 0, 0, 1, 1, 1);
  }

  public applyTransformationTree(currentWorldMatrix: Matrix): Node {
    /* Get Transformed Node */
    const transformedNode = this.applyTransformationNode(currentWorldMatrix);

    /* Change World Matrix for Children */
    const childrenWorldMatrix = currentWorldMatrix.multiplyMatrix(
      this.getLocalMatrix()
    );

    /* Apply It To Children */
    const children = this.children.map((c) =>
      c.applyTransformationTree(childrenWorldMatrix)
    );

    return new Node(
      transformedNode.index,
      children,
      transformedNode.arrayOfFace,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1
    );
  }
}

export default Node;
