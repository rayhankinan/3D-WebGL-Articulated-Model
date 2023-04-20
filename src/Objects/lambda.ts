import LambdaInterface from "Interfaces/lambda-interface";

class Lambda implements LambdaInterface {
  constructor(public rawFunction: string) {}

  public call(c: number): number {
    return eval(`(${this.rawFunction})(${c})`) as number;
  }
}

export default Lambda;
