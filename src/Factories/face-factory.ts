import FaceInterface from "Interfaces/face-interface";
import Face from "Objects/face";
import PointFactory from "Factories/point-factory";

class FaceFactory {
  public static fromInterface(face: FaceInterface): Face {
    const { arrayOfPoint } = face;

    const newArrayOfPoint = arrayOfPoint.map((point) => {
      return PointFactory.fromInterface(point);
    });

    return new Face(newArrayOfPoint);
  }
}

export default FaceFactory;
