import ShapeInterface from "Interfaces/shape-interface";

interface NodeInterface {
  readonly index: string;
  readonly shape: ShapeInterface;
  readonly children: NodeInterface[];
}

export default NodeInterface;
