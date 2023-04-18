import ColorInterface from "Interfaces/color-interface";
import Color from "Objects/color";

class ColorFactory {
  public static fromInterface(color: ColorInterface): Color {
    const { r, g, b } = color;

    return new Color(r, g, b);
  }
}

export default ColorFactory;
