import ArticulatedFactory from "Factories/articulated-factory";
import ArticulatedInterface from "Interfaces/articulated-interface";
import Articulated from "Objects/articulated";

class FileSystem {
  public static loadArticulated(text: string): Articulated {
    const articulatedInterface = JSON.parse(text) as ArticulatedInterface;

    return ArticulatedFactory.fromInterface(articulatedInterface);
  }

  public static serializeArticulated(articulated: Articulated): string {
    return JSON.stringify(articulated);
  }
}

export default FileSystem;
