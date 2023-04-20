import FaceInterface from "Interfaces/face-interface";
import Matrix from "Objects/matrix";
import Point from "Objects/point";
import Vector from "Objects/vector";
import Draw from "Objects/draw";

class Face implements FaceInterface {
  constructor(public readonly arrayOfDraw: Draw[]) {}

  public findCenter(): Point {
    let totalX = 0;
    let totalY = 0;
    let totalZ = 0;

    for (const draw of this.arrayOfDraw) {
      const [pX, pY, pZ] = draw.getPoint().getTriplet();

      totalX += pX;
      totalY += pY;
      totalZ += pZ;
    }

    return new Point(
      totalX / this.arrayOfDraw.length,
      totalY / this.arrayOfDraw.length,
      totalZ / this.arrayOfDraw.length
    );
  }

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

  public getRawPosition(): readonly number[] {
    return this.arrayOfDraw.flatMap((draw) => draw.getPoint().getTriplet());
  }

  public getRawTexture(): readonly number[] {
    return this.arrayOfDraw.flatMap((draw) => draw.getTexture().getPair());
  }

  public applyMatrix(matrix: Matrix): Face {
    return new Face(
      this.arrayOfDraw.map((draw) => {
        const [x, y, z, w] = matrix
          .multiplyCoordinate(draw.getPoint())
          .getQuadruplet();

        return new Draw(new Point(x / w, y / w, z / w), draw.getTexture());
      })
    );
  }
}

export default Face;
