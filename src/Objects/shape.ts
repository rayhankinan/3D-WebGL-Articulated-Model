import ShapeInterface from "Interfaces/shape-interface";
import Point from "Objects/point";
import Matrix from "Objects/matrix";
import Face from "Objects/face";
import Transformation from "Operations/transformation";

class Shape implements ShapeInterface {
  constructor(
    public readonly arrayOfFace: Face[],
    public tx: number,
    public ty: number,
    public tz: number,
    public angleX: number,
    public angleY: number,
    public angleZ: number,
    public sx: number,
    public sy: number,
    public sz: number
  ) {}

  public moveX(delta: number): void {
    this.tx = delta;
  }

  public moveY(delta: number): void {
    this.ty = delta;
  }

  public moveZ(delta: number): void {
    this.tz = delta;
  }

  public rotateX(angle: number): void {
    this.angleX = angle;
  }

  public rotateY(angle: number): void {
    this.angleY = angle;
  }

  public rotateZ(angle: number): void {
    this.angleZ = angle;
  }

  public scaleX(delta: number): void {
    this.sx = delta;
  }

  public scaleY(delta: number): void {
    this.sy = delta;
  }

  public scaleZ(delta: number): void {
    this.sz = delta;
  }

  public getRawPosition(): Float32Array {
    const positionArray = this.arrayOfFace.flatMap((f) => f.getRawPosition());

    return new Float32Array(positionArray);
  }

  public getRawTexture(): Float32Array {
    const textureArray = this.arrayOfFace.flatMap((f) => f.getRawTexture());

    return new Float32Array(textureArray);
  }

  public getRawNormal(): Float32Array {
    const normalArray = this.arrayOfFace.flatMap((f) =>
      Array<readonly [number, number, number]>(f.arrayOfDraw.length)
        .fill(f.findNormal().getTriplet())
        .flat()
    );

    return new Float32Array(normalArray);
  }

  public getRawTangent(): Float32Array {
    const tangentArray = this.arrayOfFace.flatMap((f) =>
      Array<readonly [number, number, number]>(f.arrayOfDraw.length)
        .fill(f.findTangents()[0].getTriplet())
        .flat()
    );

    return new Float32Array(tangentArray);
  }

  public getRawBitangent(): Float32Array {
    const bitangentArray = this.arrayOfFace.flatMap((f) =>
      Array<readonly [number, number, number]>(f.arrayOfDraw.length)
        .fill(f.findTangents()[1].getTriplet())
        .flat()
    );

    return new Float32Array(bitangentArray);
  }

  public countVertex(): number {
    return this.arrayOfFace.flatMap((f) => f.arrayOfDraw).length;
  }

  public getLocalMatrix(): Matrix {
    const pivot = new Point(0, 0, 0);

    return Transformation.general(
      this.tx,
      this.ty,
      this.tz,
      this.angleX,
      this.angleY,
      this.angleZ,
      this.sx,
      this.sy,
      this.sz,
      pivot
    );
  }
}

export default Shape;
