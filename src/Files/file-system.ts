import Articulated from "Objects/articulated";
import ArticulatedFactory from "Factories/articulated-factory";
import ArticulatedInterface from "Interfaces/articulated-interface";

class FileSystem {
  public static loadArticulated(text: string): Articulated {
    const articulatedInterface = JSON.parse(text) as ArticulatedInterface;

    return ArticulatedFactory.fromInterface(articulatedInterface);
  }

  public static serializeArticulated(articulated: Articulated): string {
    return JSON.stringify(articulated.applyTransformation());
  }
}

export default FileSystem;
