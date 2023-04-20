import AnimationInterface from "Interfaces/animation-interface";
import AnimationType from "Types/animation-type";

class Animation implements AnimationInterface {
  constructor(
    public index: string,
    public type: AnimationType,
    public func: (t: number) => number
  ) {}

  public getIndex(): string {
    return this.index;
  }

  public getType(): AnimationType {
    return this.type;
  }

  public transform(c: number): number {
    return this.func(c);
  }
}

export default Animation;
