import AnimationInterface from "Interfaces/animation-interface";
import Animation from "Objects/animation";

class AnimationFactory {
  public static fromInterface(animation: AnimationInterface): Animation {
    const { index, type, func } = animation;

    return new Animation(index, type, func);
  }
}

export default AnimationFactory;
