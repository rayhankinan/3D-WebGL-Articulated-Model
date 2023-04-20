import AnimationType from "Types/animation-type";
import LambdaInterface from "Interfaces/lambda-interface";

interface AnimationInterface {
  index: string;
  type: AnimationType;
  lambda: LambdaInterface;
}

export default AnimationInterface;
