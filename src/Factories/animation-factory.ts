import AnimationInterface from "Interfaces/animation-interface";
import Animation from "Objects/animation";
import LambdaFactory from "Factories/lambda-factory";

class AnimationFactory {
  public static fromInterface(animation: AnimationInterface): Animation {
    const { index, type, lambda } = animation;

    const newLambda = LambdaFactory.fromInterface(lambda);

    return new Animation(index, type, newLambda);
  }
}

export default AnimationFactory;
