type ProgramInfo = {
  attribLocations: {
    positionLocation: number;
    normalLocation: number;
    texcoordLocation: number;
    tangentLocation: number;
    bitangentLocation: number;
  };
  uniformLocations: {
    worldViewProjectionLocation: WebGLUniformLocation;
    worldInverseTransposeLocation: WebGLUniformLocation;
    ambientLightColorLocation: WebGLUniformLocation;
    reverseLightDirectionLocation: WebGLUniformLocation;
    shadingLocation: WebGLUniformLocation;
    textureLocation: WebGLUniformLocation;
    textureEnvLocation: WebGLUniformLocation;
    textureModeLocation: WebGLUniformLocation;
  };
};

export default ProgramInfo;
