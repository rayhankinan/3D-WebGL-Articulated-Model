import ArticulatedInterface from "Interfaces/articulated-interface";
import Node from "Objects/node";
import Color from "Objects/color";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Animation from "Objects/animation";
import Transformation from "Operations/transformation";
import ProjectionParams from "Types/projection-params";
import ProjectionType from "Types/projection-type";
import ShaderStatus from "Types/shader-status";
import AnimationType from "Types/animation-type";
import Renderer from "Utils/renderer";

class Articulated implements ArticulatedInterface {
  constructor(
    public readonly root: Node,
    public readonly arrayOfAnimation: Animation[]
  ) {}

  public findNode(index: string): Node {
    return this.root.findNode(index);
  }

  public applyTransformationTree(): Articulated {
    return new Articulated(
      this.root.applyTransformationTree(Transformation.identity()),
      this.arrayOfAnimation
    );
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
    mappingMode: string
  ): void {
    this.root.renderTree(
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
      Transformation.identity()
    );
  }

  public applyAnimation(c: number): void {
    for (const animation of this.arrayOfAnimation) {
      const currentNode = this.root.findNode(animation.getIndex());

      switch (animation.getType()) {
        case AnimationType.MOVE_X:
          currentNode.moveX(animation.transform(c));
          break;
        case AnimationType.MOVE_Y:
          currentNode.moveY(animation.transform(c));
          break;
        case AnimationType.MOVE_Z:
          currentNode.moveZ(animation.transform(c));
          break;
        case AnimationType.ROTATE_X:
          currentNode.rotateX(animation.transform(c));
          break;
        case AnimationType.ROTATE_Y:
          currentNode.rotateY(animation.transform(c));
          break;
        case AnimationType.ROTATE_Z:
          currentNode.rotateZ(animation.transform(c));
          break;
        case AnimationType.SCALE_X:
          currentNode.scaleX(animation.transform(c));
          break;
        case AnimationType.SCALE_Y:
          currentNode.scaleY(animation.transform(c));
          break;
        case AnimationType.SCALE_Z:
          currentNode.scaleZ(animation.transform(c));
          break;
      }
    }
  }
}

export default Articulated;
