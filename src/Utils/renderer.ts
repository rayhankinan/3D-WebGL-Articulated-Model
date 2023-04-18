import ProgramParam from "Types/program-param";
import ProgramInfo from "Types/program-info";
import ProgramBuffer from "Types/program-buffer";

class Renderer {
  constructor(public gl: WebGLRenderingContext, public program: WebGLProgram) {}

  public use(): void {
    this.gl.useProgram(this.program);
  }

  public render(
    programInfo: ProgramInfo,
    programBuffer: ProgramBuffer,
    programParam: ProgramParam,
    count: number
  ): void {
    /* Unpack Program Info */
    const { attribLocations, uniformLocations } = programInfo;
    const { positionLocation, colorLocation, normalLocation } = attribLocations;
    const {
      worldViewProjectionLocation,
      worldInverseTransposeLocation,
      ambientLightColorLocation,
      reverseLightDirectionLocation,
      shadingLocation,
    } = uniformLocations;

    /* Unpack Program Buffer */
    const { positionBuffer, colorBuffer, normalBuffer } = programBuffer;

    /* Unpack Program Parameter */
    const { attributes, uniforms } = programParam;
    const { rawPosition, rawColor, rawNormal } = attributes;
    const {
      rawMatrix,
      rawInverseTransposeMatrix,
      rawAmbientColor,
      rawDirectionalLight,
      shaderStatus,
    } = uniforms;

    /* Setup Position Attribute */
    this.gl.enableVertexAttribArray(positionLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, rawPosition, this.gl.STATIC_DRAW);

    const positionSize = 3; /* 3 components per iteration */
    const positionType = this.gl.FLOAT; /* The data is 32 bit float */
    const positionNormalized = false; /* Don't normalize the data */
    const positionStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
    const positionOffset = 0; /* Start at the beginning of the buffer */
    this.gl.vertexAttribPointer(
      positionLocation,
      positionSize,
      positionType,
      positionNormalized,
      positionStride,
      positionOffset
    );

    /* Setup Color Attribute */
    this.gl.enableVertexAttribArray(colorLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, colorBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, rawColor, this.gl.STATIC_DRAW);

    const colorSize = 3; /* 3 components per iteration */
    const colorType = this.gl.FLOAT; /* The data is 32 bit float */
    const colorNormalized = false; /* Normalize the data */
    const colorStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
    const colorOffset = 0; /* Start at the beginning of the buffer */
    this.gl.vertexAttribPointer(
      colorLocation,
      colorSize,
      colorType,
      colorNormalized,
      colorStride,
      colorOffset
    );

    /* Setup Normal Attribute */
    this.gl.enableVertexAttribArray(normalLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, normalBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, rawNormal, this.gl.STATIC_DRAW);

    const normalSize = 3; /* 3 components per iteration */
    const normalType = this.gl.FLOAT; /* The data is 32 bit float */
    const normalNormalized = false; /* Don't normalize the data */
    const normalStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
    const normalOffset = 0; /* Start at the beginning of the buffer */
    this.gl.vertexAttribPointer(
      normalLocation,
      normalSize,
      normalType,
      normalNormalized,
      normalStride,
      normalOffset
    );

    /* Set World View Projection Uniform */
    this.gl.uniformMatrix4fv(worldViewProjectionLocation, false, rawMatrix);

    /* Set World Inverse Projection Uniform */
    this.gl.uniformMatrix4fv(
      worldInverseTransposeLocation,
      false,
      rawInverseTransposeMatrix
    );

    /* Set Ambient Color Uniform */
    this.gl.uniform3fv(ambientLightColorLocation, rawAmbientColor);

    /* Set Directional Light Uniform */
    this.gl.uniform3fv(reverseLightDirectionLocation, rawDirectionalLight);

    /* Set Shader Status Uniform */
    this.gl.uniform1i(shadingLocation, shaderStatus);

    /* Draw Shape */
    const primitiveType = this.gl.TRIANGLES;
    const offset = 0;

    this.gl.drawArrays(primitiveType, offset, count);
  }
}

export default Renderer;
