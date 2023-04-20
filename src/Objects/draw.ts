import DrawInterface from "Interfaces/draw-interface";
import Point from "Objects/point";
import Texture from "Objects/texture";

class Draw implements DrawInterface {
  constructor(public readonly point: Point, public readonly texture: Texture) {}

  public getPoint(): Point {
    return this.point;
  }

  public getTexture(): Texture {
    return this.texture;
  }
}

export default Draw;
