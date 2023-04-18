import ArticulatedInterface from "Interfaces/articulated-interface";
import Node from "Objects/node";

class Articulated implements ArticulatedInterface {
  constructor(public readonly root: Node) {}
}

export default Articulated;
