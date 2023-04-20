import FaceInterface from "Interfaces/face-interface";
import Vector from "Objects/vector";
import Draw from "Objects/draw";

class Face implements FaceInterface {
  constructor(public readonly arrayOfDraw: Draw[]) {}

  public findNormal(): Vector {
    const firstPoint = this.arrayOfDraw[0].getPoint();
    const q = new Vector(firstPoint.x, firstPoint.y, firstPoint.z);

    const secondPoint = this.arrayOfDraw[1].getPoint();
    const r = new Vector(secondPoint.x, secondPoint.y, secondPoint.z);

    const thirdPoint = this.arrayOfDraw[2].getPoint();
    const s = new Vector(thirdPoint.x, thirdPoint.y, thirdPoint.z);

    const qr = r.subtract(q);
    const qs = s.subtract(q);

    return qs.cross(qr).normalize();
  }

  public findTangents(): Vector[] {
    const firstPoint = this.arrayOfDraw[0].getPoint();
    const q = new Vector(firstPoint.x, firstPoint.y, firstPoint.z);

    const secondPoint = this.arrayOfDraw[1].getPoint();
    const r = new Vector(secondPoint.x, secondPoint.y, secondPoint.z);

    const thirdPoint = this.arrayOfDraw[2].getPoint();
    const s = new Vector(thirdPoint.x, thirdPoint.y, thirdPoint.z);

    const qr = r.subtract(q);
    const qs = s.subtract(q);

    return [qr.normalize(), qs.normalize()];
  }

  public getRawPosition(): readonly number[] {
    return this.arrayOfDraw.flatMap((draw) => draw.getPoint().getTriplet());
  }

  public getRawTexture(): readonly number[] {
    return this.arrayOfDraw.flatMap((draw) => draw.getTexture().getPair());
  }
}

export default Face;
