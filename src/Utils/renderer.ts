import ProgramParam from "Types/program-param";
import ProgramInfo from "Types/program-info";
import ProgramBuffer from "Types/program-buffer";

class Renderer {
  constructor(
    public gl: WebGLRenderingContext,
    public program: WebGLProgram,
    public programInfo: ProgramInfo,
    public programBuffer: ProgramBuffer
  ) {}

  public render(
    programParam: ProgramParam,
    count: number,
    mappingMode: string
  ): void {
    /* Use Program */
    this.gl.useProgram(this.program);

    /* Unpack Program Info */
    const { attribLocations, uniformLocations } = this.programInfo;
    const { positionLocation, normalLocation, texcoordLocation } =
      attribLocations;
    const {
      worldViewProjectionLocation,
      worldInverseTransposeLocation,
      ambientLightColorLocation,
      reverseLightDirectionLocation,
      shadingLocation,
      textureLocation,
      textureEnvLocation,
      textureModeLocation,
    } = uniformLocations;

    /* Unpack Program Buffer */
    const { positionBuffer, colorBuffer, normalBuffer, textureBuffer } =
      this.programBuffer;

    /* Unpack Program Parameter */
    const { attributes, uniforms } = programParam;
    const { rawPosition, rawNormal, rawTexture } = attributes;
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

    /* Setup Texture Attribute */
    this.gl.enableVertexAttribArray(texcoordLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, textureBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, rawTexture, this.gl.STATIC_DRAW);

    const textureSize = 2;
    const textureType = this.gl.FLOAT;
    const textureNormalized = false;
    const textureStride = 0;
    const textureOffset = 0;
    this.gl.vertexAttribPointer(
      texcoordLocation,
      textureSize,
      textureType,
      textureNormalized,
      textureStride,
      textureOffset
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

    if (mappingMode == "texture") {
      /* Set Texture Uniform */
      this.gl.uniform1i(textureLocation, 0);
      this.gl.uniform1i(textureEnvLocation, 1);

      /* Set Texture Mode Uniform */
      this.gl.uniform1i(textureModeLocation, 0);
    } else if (mappingMode == "environment") {
      /* Set Texture Uniform */
      this.gl.uniform1i(textureLocation, 1);
      this.gl.uniform1i(textureEnvLocation, 0);

      /* Set Texture Mode Uniform */
      this.gl.uniform1i(textureModeLocation, 1);
    } else if (mappingMode == "bump") {
      /* Set Texture Uniform */
      this.gl.uniform1i(textureLocation, 0);
      this.gl.uniform1i(textureEnvLocation, 1);

      /* Set Texture Mode Uniform */
      this.gl.uniform1i(textureModeLocation, 0);
    }

    /* Draw Shape */
    const primitiveType = this.gl.TRIANGLES;
    const offset = 0;

    this.gl.drawArrays(primitiveType, offset, count);
  }
}

export default Renderer;
