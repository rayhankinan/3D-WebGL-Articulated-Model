type ProgramInfo = {
  attribLocations: {
    positionLocation: number;
    colorLocation: number;
    normalLocation: number;
  };
  uniformLocations: {
    worldViewProjectionLocation: WebGLUniformLocation;
    worldInverseTransposeLocation: WebGLUniformLocation;
    ambientLightColorLocation: WebGLUniformLocation;
    reverseLightDirectionLocation: WebGLUniformLocation;
    shadingLocation: WebGLUniformLocation;
  };
};

export default ProgramInfo;
