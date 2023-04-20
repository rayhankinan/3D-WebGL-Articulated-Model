import NodeInterface from "Interfaces/node-interface";
import AnimationInterface from "Interfaces/animation-interface";

interface ArticulatedInterface {
  readonly root: NodeInterface;
  readonly arrayOfAnimation: AnimationInterface[];
}

export default ArticulatedInterface;
