import Articulated from "Objects/articulated";
import ArticulatedFactory from "Factories/articulated-factory";
import ArticulatedInterface from "Interfaces/articulated-interface";

//TODO : delete this later
import ShapeFactory from "Factories/shape-factory";
import ShapeInterface from "Interfaces/shape-interface";
import Shape from "Objects/shape";

class FileSystem {
  public static loadArticulated(text: string): Articulated {
    const articulatedInterface = JSON.parse(text) as ArticulatedInterface;

    return ArticulatedFactory.fromInterface(articulatedInterface);
  }

//TODO : delete this later
  public static loadShape(text: string): Shape {
    const shapeInterface = JSON.parse(text) as ShapeInterface;

    return ShapeFactory.fromInterface(shapeInterface);
  }

  public static serializeArticulated(articulated: Articulated): string {
    return JSON.stringify(articulated.applyTransformation());
  }
}

export default FileSystem;
