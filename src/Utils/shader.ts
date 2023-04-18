function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS) as boolean;
  if (!success) {
    gl.deleteShader(shader);

    throw new Error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
  }

  return shader;
}

export default createShader;
