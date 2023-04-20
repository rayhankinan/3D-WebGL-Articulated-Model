import ProgramParam from "Types/program-param";
import ProgramInfo from "Types/program-info";
import ProgramBuffer from "Types/program-buffer";
import isPowerOfTwo from "Utils/power";
import EnvironmentInfo from "Types/environment-info";
import MappingMode from "Types/mapping-mode";

class Renderer {
  constructor(
    public gl: WebGLRenderingContext,
    public program: WebGLProgram,
    public programInfo: ProgramInfo,
    public programBuffer: ProgramBuffer
  ) {}

  public texture(source: string): void {
    /* Create a Texture */
    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    const texImageLevel = 0;
    const texImageInternalFormat = this.gl.RGBA;
    const texImageWidth = 1;
    const texImageHeight = 1;
    const texImageBorder = 0;
    const texImageFormat = this.gl.RGBA;
    const texImageType = this.gl.UNSIGNED_BYTE;

    // Load texture with opaque blue while waiting for the image to load
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      texImageLevel,
      texImageInternalFormat,
      texImageWidth,
      texImageHeight,
      texImageBorder,
      texImageFormat,
      texImageType,
      new Uint8Array([0, 0, 255, 255])
    );

    const image = new Image();
    image.src = source;
    image.onload = () => {
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        texImageLevel,
        texImageInternalFormat,
        texImageFormat,
        texImageType,
        image
      );

      if (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) {
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
      } else {
        this.gl.texParameteri(
          this.gl.TEXTURE_2D,
          this.gl.TEXTURE_WRAP_S,
          this.gl.REPEAT
        );
        this.gl.texParameteri(
          this.gl.TEXTURE_2D,
          this.gl.TEXTURE_WRAP_T,
          this.gl.REPEAT
        );
        this.gl.texParameteri(
          this.gl.TEXTURE_2D,
          this.gl.TEXTURE_MIN_FILTER,
          this.gl.LINEAR
        );
      }
    };
  }

  public environment(environmentInfo: EnvironmentInfo): void {
    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, texture);

    const target = [
      this.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
      this.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
      this.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
      this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
      this.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
      this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];

    environmentInfo.forEach((info, index) => {
      const texImageLevel = 0;
      const texImageInternalFormat = this.gl.RGBA;
      const texImageWidth = info.width;
      const texImageHeight = info.height;
      const texImageBorder = 0;
      const texImageFormat = this.gl.RGBA;
      const texImageType = this.gl.UNSIGNED_BYTE;

      this.gl.texImage2D(
        target[index],
        texImageLevel,
        texImageInternalFormat,
        texImageWidth,
        texImageHeight,
        texImageBorder,
        texImageFormat,
        texImageType,
        null
      );

      const image = new Image();
      image.src = info.source;
      image.onload = () => {
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, texture);
        this.gl.texImage2D(
          target[index],
          texImageLevel,
          texImageInternalFormat,
          texImageFormat,
          texImageType,
          image
        );
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
      };
    });

    this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
    this.gl.texParameteri(
      this.gl.TEXTURE_CUBE_MAP,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
  }

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

    switch (mappingMode) {
      case MappingMode.TEXTURE:
        /* Set Texture Uniform */
        this.gl.uniform1i(textureLocation, 0);
        this.gl.uniform1i(textureEnvLocation, 1);

        /* Set Texture Mode Uniform */
        this.gl.uniform1i(textureModeLocation, 0);
        break;
      case MappingMode.ENVIRONMENT:
        /* Set Texture Uniform */
        this.gl.uniform1i(textureLocation, 1);
        this.gl.uniform1i(textureEnvLocation, 0);

        /* Set Texture Mode Uniform */
        this.gl.uniform1i(textureModeLocation, 1);
        break;
      case MappingMode.BUMP:
        /* Set Texture Uniform */
        this.gl.uniform1i(textureLocation, 0);
        this.gl.uniform1i(textureEnvLocation, 1);

        /* Set Texture Mode Uniform */
        this.gl.uniform1i(textureModeLocation, 0);
        break;
    }

    /* Draw Shape */
    const primitiveType = this.gl.TRIANGLES;
    const offset = 0;

    this.gl.drawArrays(primitiveType, offset, count);
  }
}

export default Renderer;
