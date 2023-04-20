import DrawInterface from "Interfaces/draw-interface";
import Draw from "Objects/draw";
import PointFactory from "Factories/point-factory";
import TextureFactory from "Factories/texture-factory";

class DrawFactory {
  public static fromInterface(draw: DrawInterface): Draw {
    const { point, texture } = draw;

    const newPoint = PointFactory.fromInterface(point);

    const newTexture = TextureFactory.fromInterface(texture);

    return new Draw(newPoint, newTexture);
  }
}

export default DrawFactory;
