import ShapeInterface from "Interfaces/shape-interface";

interface NodeInterface extends ShapeInterface {
  readonly index: string;
  readonly children: NodeInterface[];
}

export default NodeInterface;
