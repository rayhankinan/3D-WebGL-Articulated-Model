import AnimationInterface from "Interfaces/animation-interface";
import AnimationType from "Types/animation-type";
import Lambda from "Objects/lambda";

class Animation implements AnimationInterface {
  constructor(
    public index: string,
    public type: AnimationType,
    public lambda: Lambda
  ) {}

  public getIndex(): string {
    return this.index;
  }

  public getType(): AnimationType {
    return this.type;
  }

  public transform(c: number): number {
    return this.lambda.call(c);
  }
}

export default Animation;
