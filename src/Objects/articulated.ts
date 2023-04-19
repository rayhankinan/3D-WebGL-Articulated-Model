import ArticulatedInterface from "Interfaces/articulated-interface";
import Node from "Objects/node";
import Color from "Objects/color";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Transformation from "Operations/transformation";
import ProjectionParams from "Types/projection-params";
import ProjectionType from "Types/projection-type";
import ShaderStatus from "Types/shader-status";
import Renderer from "Utils/renderer";

class Articulated implements ArticulatedInterface {
  constructor(public readonly root: Node) {}

  public findNode(index: string): Node {
    return this.root.findNode(index);
  }

  public applyTransformationTree(): Articulated {
    return new Articulated(
      this.root.applyTransformationTree(Transformation.identity())
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
    shaderStatus: ShaderStatus
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
      Transformation.identity()
    );
  }
}

export default Articulated;
