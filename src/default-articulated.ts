import Articulated from "Objects/articulated";
import Node from "Objects/node";
import Face from "Objects/face";
import Point from "Objects/point";
import Texture from "Objects/texture";
import Draw from "Objects/draw";

function generateDefaultArticulated(): Articulated {
  return new Articulated(
    new Node(
      "root",
      [],
      [
        // Front Face
        new Face([
          new Draw(new Point(-25, 25, 25), new Texture(0, 0)),
          new Draw(new Point(-25, -25, 25), new Texture(1, 0)),
          new Draw(new Point(25, -25, 25), new Texture(1, 1)),
          new Draw(new Point(-25, 25, 25), new Texture(0, 0)),
          new Draw(new Point(25, -25, 25), new Texture(1, 1)),
          new Draw(new Point(25, 25, 25), new Texture(0, 1)),
        ]),
        // // Back Face
        // new Face([
        //   new Point(-25, -25, -25),
        //   new Point(-25, 25, -25),
        //   new Point(25, 25, -25),
        //   new Point(-25, -25, -25),
        //   new Point(25, 25, -25),
        //   new Point(25, -25, -25),
        // ]),
        // // Top Face
        // new Face([
        //   new Point(-25, 25, -25),
        //   new Point(-25, 25, 25),
        //   new Point(25, 25, 25),
        //   new Point(-25, 25, -25),
        //   new Point(25, 25, 25),
        //   new Point(25, 25, -25),
        // ]),
        // // Bottom face
        // new Face([
        //   new Point(-25, -25, -25),
        //   new Point(25, -25, -25),
        //   new Point(25, -25, 25),
        //   new Point(-25, -25, -25),
        //   new Point(25, -25, 25),
        //   new Point(-25, -25, 25),
        // ]),
        // // Right face
        // new Face([
        //   new Point(25, -25, -25),
        //   new Point(25, 25, -25),
        //   new Point(25, 25, 25),
        //   new Point(25, -25, -25),
        //   new Point(25, 25, 25),
        //   new Point(25, -25, 25),
        // ]),
        // // Left face
        // new Face([
        //   new Point(-25, -25, -25),
        //   new Point(-25, -25, 25),
        //   new Point(-25, 25, 25),
        //   new Point(-25, -25, -25),
        //   new Point(-25, 25, 25),
        //   new Point(-25, 25, -25),
        // ]),
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1
    )
  );
}

export default generateDefaultArticulated;
