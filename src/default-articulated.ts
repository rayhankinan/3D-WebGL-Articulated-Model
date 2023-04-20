import Articulated from "Objects/articulated";
import Node from "Objects/node";
import Face from "Objects/face";

function generateDefaultArticulated(): Articulated {
  return new Articulated(
    new Node("root", [], [new Face([])], 0, 0, 0, 0, 0, 0, 1, 1, 1)
  );
}

export default generateDefaultArticulated;
