import ArticulatedInterface from "Interfaces/articulated-interface";
import Articulated from "Objects/articulated";
import NodeFactory from "Factories/node-factory";

class ArticulatedFactory {
  public static fromInterface(articulated: ArticulatedInterface): Articulated {
    const { root } = articulated;

    const newRoot = NodeFactory.fromInterface(root);

    return new Articulated(newRoot);
  }
}

export default ArticulatedFactory;
