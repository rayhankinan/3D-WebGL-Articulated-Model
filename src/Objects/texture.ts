import TextureInterface from "Interfaces/texture-interface";

class Texture implements TextureInterface {
  constructor(public readonly x: number, public readonly y: number) {}

  public getPair(): readonly [number, number] {
    return [this.x, this.y];
  }
}

export default Texture;
