import NodeInterface from "Interfaces/node-interface";
import Shape from "Objects/shape";

class Node implements NodeInterface {
  constructor(
    public readonly index: string,
    public readonly shape: Shape,
    public readonly children: Node[]
  ) {}
}

export default Node;
