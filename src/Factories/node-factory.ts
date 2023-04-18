import NodeInterface from "Interfaces/node-interface";
import Node from "Objects/node";
import FaceFactory from "Factories/face-factory";

class NodeFactory {
  public static fromInterface(node: NodeInterface): Node {
    const {
      index,
      children,
      arrayOfFace,
      tx,
      ty,
      tz,
      angleX,
      angleY,
      angleZ,
      sx,
      sy,
      sz,
    } = node;

    const newArrayOfFace = arrayOfFace.map((face) => {
      return FaceFactory.fromInterface(face);
    });

    const newChildren = children.map((child) => {
      return NodeFactory.fromInterface(child);
    });

    return new Node(
      index,
      newChildren,
      newArrayOfFace,
      tx,
      ty,
      tz,
      angleX,
      angleY,
      angleZ,
      sx,
      sy,
      sz
    );
  }
}

export default NodeFactory;
