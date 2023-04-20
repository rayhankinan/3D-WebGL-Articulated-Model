import PointInterface from "Interfaces/point-interface";
import TextureInterface from "Interfaces/texture-interface";

interface DrawInterface {
  readonly point: PointInterface;
  readonly texture: TextureInterface;
}

export default DrawInterface;
