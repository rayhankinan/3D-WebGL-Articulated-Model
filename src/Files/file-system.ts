import ShapeFactory from "Factories/shape-factory";
import ShapeInterface from "Interfaces/shape-interface";
import Shape from "Objects/shape";

class FileSystem {
  public static loadShape(text: string): Shape {
    const shapeInterface = JSON.parse(text) as ShapeInterface;

    return ShapeFactory.fromInterface(shapeInterface);
  }

  public static serializeShape(shape: Shape): string {
    return JSON.stringify(shape.applyTransformation());
  }
}

export default FileSystem;
