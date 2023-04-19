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
  };
};

export default ProgramInfo;
