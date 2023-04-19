type ProgramInfo = {
  attribLocations: {
    positionLocation: number;
    colorLocation: number;
    normalLocation: number;
    texcoordLocation: number;
  };
  uniformLocations: {
    worldViewProjectionLocation: WebGLUniformLocation;
    worldInverseTransposeLocation: WebGLUniformLocation;
    ambientLightColorLocation: WebGLUniformLocation;
    reverseLightDirectionLocation: WebGLUniformLocation;
    shadingLocation: WebGLUniformLocation;
    textureLocation: WebGLUniformLocation;
    textureEnvLocation: WebGLUniformLocation;
    textureModeLocation1: WebGLUniformLocation;
    textureModeLocation2: WebGLUniformLocation;
  };
};

export default ProgramInfo;
