import ArticulatedInterface from "Interfaces/articulated-interface";
import Articulated from "Objects/articulated";
import NodeFactory from "Factories/node-factory";
import AnimationFactory from "Factories/animation-factory";

class ArticulatedFactory {
  public static fromInterface(articulated: ArticulatedInterface): Articulated {
    const { root, arrayOfAnimation } = articulated;

    const newRoot = NodeFactory.fromInterface(root);
    const newArrayOfAnimation = arrayOfAnimation.map((animation) =>
      AnimationFactory.fromInterface(animation)
    );

    return new Articulated(newRoot, newArrayOfAnimation);
  }
}

export default ArticulatedFactory;
