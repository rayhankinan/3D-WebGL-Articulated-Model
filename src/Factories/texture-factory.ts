import TextureInterface from "Interfaces/texture-interface";
import Texture from "Objects/texture";

class TextureFactory {
  public static fromInterface(texture: TextureInterface): Texture {
    const { x, y } = texture;

    return new Texture(x, y);
  }
}

export default TextureFactory;
