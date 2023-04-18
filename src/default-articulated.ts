import Articulated from "Objects/articulated";
import Node from "Objects/node";
import Shape from "Objects/shape";

import FileSystem from "Files/file-system"; /* TODO: UBAH INI */
import ShapeFactory from "Factories/shape-factory"; /* TODO: UBAH INI */

function generateDefaultArticulated(): Articulated {
  const rawShape = FileSystem.loadShape(
    JSON.stringify(require("../shapes/cube.json"))
  );
  const shape = ShapeFactory.fromInterface(rawShape, {
    tx: 0,
    ty: 0,
    tz: 0,
    angleX: 0,
    angleY: 0,
    angleZ: 0,
    sx: 1,
    sy: 1,
    sz: 1,
  });

  return new Articulated(
    new Node(
      "root",
      [
        new Node(
          "child1",
          [
            new Node(
              "child2",
              [],
              shape.arrayOfFace,
              50,
              50,
              50,
              0,
              0,
              0,
              1,
              1,
              1
            ),
          ],
          shape.arrayOfFace,
          50,
          50,
          50,
          0,
          0,
          0,
          1,
          1,
          1
        ),
      ],
      shape.arrayOfFace,
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
