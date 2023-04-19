import ShaderStatus from "Types/shader-status";

type ProgramParam = {
  attributes: {
    rawPosition: Float32Array;
    rawColor: Float32Array;
    rawNormal: Float32Array;
    rawTexture: Float32Array;
  };
  uniforms: {
    rawMatrix: readonly number[];
    rawInverseTransposeMatrix: readonly number[];
    rawAmbientColor: readonly [number, number, number];
    rawDirectionalLight: readonly [number, number, number];
    shaderStatus: ShaderStatus;
  };
};

export default ProgramParam;
