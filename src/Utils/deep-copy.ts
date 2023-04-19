import Node from "Main/Objects/node";

function deepCopyNode(node: Node): Node {
    return new Node(node.index, 
                    node.children, 
                    node.arrayOfFace, 
                    node.tx, 
                    node.ty, 
                    node.tz, 
                    node.angleX, 
                    node.angleY, 
                    node.angleZ, 
                    node.sx, 
                    node.sy, 
                    node.sz);
}

export default deepCopyNode;