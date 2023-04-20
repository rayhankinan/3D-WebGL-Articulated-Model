import AnimationType from "Types/animation-type";

interface AnimationInterface {
  index: string;
  type: AnimationType;
  func: (c: number) => number;
}

export default AnimationInterface;
