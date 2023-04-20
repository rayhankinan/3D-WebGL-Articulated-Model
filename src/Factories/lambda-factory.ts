import LambdaInterface from "Interfaces/lambda-interface";
import Lambda from "Objects/lambda";

class LambdaFactory {
  public static fromInterface(lambda: LambdaInterface): Lambda {
    const { rawFunction } = lambda;

    return new Lambda(rawFunction);
  }
}

export default LambdaFactory;
