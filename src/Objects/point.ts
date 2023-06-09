import PointInterface from "Interfaces/point-interface";
import Coordinate from "Objects/coordinate";

class Point extends Coordinate implements PointInterface {
  public constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number
  ) {
    super(x, y, z, 1);
  }

  public getTriplet(): readonly [number, number, number] {
    return [this.x, this.y, this.z];
  }
}

export default Point;
