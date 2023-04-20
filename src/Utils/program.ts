function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
): WebGLProgram {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS) as boolean;
  if (!success) {
    throw new Error(
      `Could not initialize shaders: ${gl.getProgramInfoLog(program)}`
    );
  }

  return program;
}

export default createProgram;
