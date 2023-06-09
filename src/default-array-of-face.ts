import Face from "Objects/face";
import Point from "Objects/point";
import Texture from "Objects/texture";
import Draw from "Objects/draw";

function generateDefaultArrayOfFace(): Face[] {
  return [
    // Front Face
    new Face([
      new Draw(new Point(-25, 25, 25), new Texture(0, 0)),
      new Draw(new Point(-25, -25, 25), new Texture(1, 0)),
      new Draw(new Point(25, -25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, 25, 25), new Texture(0, 0)),
      new Draw(new Point(25, -25, 25), new Texture(1, 1)),
      new Draw(new Point(25, 25, 25), new Texture(0, 1)),
    ]),
    // Back Face
    new Face([
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(-25, 25, -25), new Texture(1, 0)),
      new Draw(new Point(25, 25, -25), new Texture(1, 1)),
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(25, 25, -25), new Texture(1, 1)),
      new Draw(new Point(25, -25, -25), new Texture(0, 1)),
    ]),
    // Top Face
    new Face([
      new Draw(new Point(-25, 25, -25), new Texture(0, 0)),
      new Draw(new Point(-25, 25, 25), new Texture(1, 0)),
      new Draw(new Point(25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, 25, -25), new Texture(0, 0)),
      new Draw(new Point(25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(25, 25, -25), new Texture(0, 1)),
    ]),
    // Bottom face
    new Face([
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(25, -25, -25), new Texture(1, 0)),
      new Draw(new Point(25, -25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(25, -25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, -25, 25), new Texture(0, 1)),
    ]),
    // Right face
    new Face([
      new Draw(new Point(25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(25, 25, -25), new Texture(1, 0)),
      new Draw(new Point(25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(25, -25, 25), new Texture(0, 1)),
    ]),
    // Left face
    new Face([
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(-25, -25, 25), new Texture(1, 0)),
      new Draw(new Point(-25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, -25, -25), new Texture(0, 0)),
      new Draw(new Point(-25, 25, 25), new Texture(1, 1)),
      new Draw(new Point(-25, 25, -25), new Texture(0, 1)),
    ]),
  ];
}

export default generateDefaultArrayOfFace;
