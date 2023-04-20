import FaceInterface from "Interfaces/face-interface";
import Face from "Objects/face";
import DrawFactory from "Factories/draw-factory";

class FaceFactory {
  public static fromInterface(face: FaceInterface): Face {
    const { arrayOfDraw } = face;

    const newArrayOfDraw = arrayOfDraw.map((draw) => {
      return DrawFactory.fromInterface(draw);
    });

    return new Face(newArrayOfDraw);
  }
}

export default FaceFactory;
