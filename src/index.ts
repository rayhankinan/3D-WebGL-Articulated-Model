import createShader from "Utils/shader";
import createProgram from "Utils/program";
import { degToRad, radToDeg } from "Utils/angle";
import resizeCanvasToDisplaySize from "Utils/resize-canvas";
import Renderer from "Utils/renderer";
import Articulated from "Objects/articulated";
import Node from "Objects/node";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Color from "Objects/color";
import ProjectionType from "Types/projection-type";
import ProjectionParams from "Types/projection-params";
import ShaderStatus from "Types/shader-status";
import ProgramInfo from "Types/program-info";
import ProgramBuffer from "Types/program-buffer";
import MappingMode from "Types/mapping-mode";
import FileHandling from "Files/file-handling";
import FileSystem from "Files/file-system";
import generateDefaultCamera from "Main/default-camera";
import generateDefaultAmbientColor from "Main/default-ambient-color";
import generateDefaultDirectionalLight from "Main/default-directional-light";
import generateDefaultArticulated from "Main/default-articulated";
import Transformation from "Operations/transformation";

/* Get Vertex dan Fragment Source */
const vertexShaderElement = document.getElementById("vertex-shader");
const fragmentShaderElement = document.getElementById("fragment-shader");

const vertexShaderSource = vertexShaderElement.textContent;
const fragmentShaderSource = fragmentShaderElement.textContent;

/* Main Canvas */
const mainCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;
const mainGL = mainCanvas.getContext("webgl");

/* Setup Main Canvas Viewport */
resizeCanvasToDisplaySize(mainGL.canvas as HTMLCanvasElement);
mainGL.viewport(0, 0, mainGL.canvas.width, mainGL.canvas.height);

/* Clear Main Canvas Color and Buffer */
mainGL.clear(mainGL.COLOR_BUFFER_BIT | mainGL.DEPTH_BUFFER_BIT);

/* Turn On Main Canvas Culling */
mainGL.enable(mainGL.CULL_FACE);

/* Enable the Depth Buffer in Main Canvas */
mainGL.enable(mainGL.DEPTH_TEST);

/* Add Vertex and Fragment Shader in Main Canvas */
const mainVertexShader = createShader(
  mainGL,
  mainGL.VERTEX_SHADER,
  vertexShaderSource
);
const mainFragmentShader = createShader(
  mainGL,
  mainGL.FRAGMENT_SHADER,
  fragmentShaderSource
);

/* Setup Main Program */
const mainProgram = createProgram(mainGL, mainVertexShader, mainFragmentShader);

/* Setup Main Program Info */
const mainProgramInfo: ProgramInfo = {
  attribLocations: {
    positionLocation: mainGL.getAttribLocation(mainProgram, "a_position"),
    normalLocation: mainGL.getAttribLocation(mainProgram, "a_normal"),
    texcoordLocation: mainGL.getAttribLocation(mainProgram, "a_texcoord"),
  },
  uniformLocations: {
    worldViewProjectionLocation: mainGL.getUniformLocation(
      mainProgram,
      "u_worldViewProjection"
    ),
    worldInverseTransposeLocation: mainGL.getUniformLocation(
      mainProgram,
      "u_worldInverseTranspose"
    ),
    ambientLightColorLocation: mainGL.getUniformLocation(
      mainProgram,
      "u_ambientLightColor"
    ),
    reverseLightDirectionLocation: mainGL.getUniformLocation(
      mainProgram,
      "u_reverseLightDirection"
    ),
    shadingLocation: mainGL.getUniformLocation(mainProgram, "u_shading"),
    textureLocation: mainGL.getUniformLocation(mainProgram, "u_texture"),
    textureEnvLocation: mainGL.getUniformLocation(mainProgram, "u_texture_env"),
    textureModeLocation: mainGL.getUniformLocation(
      mainProgram,
      "u_texture_mode"
    ),
  },
};

/* Setup Main Program Buffer */
const mainProgramBuffer: ProgramBuffer = {
  positionBuffer: mainGL.createBuffer(),
  normalBuffer: mainGL.createBuffer(),
  textureBuffer: mainGL.createBuffer(),
};

/* Setup Main Renderer */
const mainRenderer = new Renderer(
  mainGL,
  mainProgram,
  mainProgramInfo,
  mainProgramBuffer
);

/* Secondary Canvas */
const secondaryCanvas = document.getElementById(
  "secondary-canvas"
) as HTMLCanvasElement;
const secondaryGL = secondaryCanvas.getContext("webgl");

/* Setup Secondary Canvas Viewport */
resizeCanvasToDisplaySize(secondaryGL.canvas as HTMLCanvasElement);
secondaryGL.viewport(0, 0, secondaryGL.canvas.width, secondaryGL.canvas.height);

/* Clear Secondary Canvas Color and Buffer */
secondaryGL.clear(secondaryGL.COLOR_BUFFER_BIT | secondaryGL.DEPTH_BUFFER_BIT);

/* Turn On Secondary Canvas Culling */
secondaryGL.enable(secondaryGL.CULL_FACE);

/* Enable the Depth Buffer in Secondary Canvas */
secondaryGL.enable(secondaryGL.DEPTH_TEST);

/* Add Vertex and Fragment Shader in Secondary Canvas */
const secondaryVertexShader = createShader(
  secondaryGL,
  secondaryGL.VERTEX_SHADER,
  vertexShaderSource
);
const secondaryFragmentShader = createShader(
  secondaryGL,
  secondaryGL.FRAGMENT_SHADER,
  fragmentShaderSource
);

/* Setup Secondary Program */
const secondaryProgram = createProgram(
  secondaryGL,
  secondaryVertexShader,
  secondaryFragmentShader
);

/* Setup Secondary Program Info */
const secondaryProgramInfo: ProgramInfo = {
  attribLocations: {
    positionLocation: secondaryGL.getAttribLocation(
      secondaryProgram,
      "a_position"
    ),
    normalLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_normal"),
    texcoordLocation: secondaryGL.getAttribLocation(
      secondaryProgram,
      "a_texcoord"
    ),
  },
  uniformLocations: {
    worldViewProjectionLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_worldViewProjection"
    ),
    worldInverseTransposeLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_worldInverseTranspose"
    ),
    ambientLightColorLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_ambientLightColor"
    ),
    reverseLightDirectionLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_reverseLightDirection"
    ),
    shadingLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_shading"
    ),
    textureLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_texture"
    ),
    textureEnvLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_texture_env"
    ),
    textureModeLocation: secondaryGL.getUniformLocation(
      secondaryProgram,
      "u_texture_mode"
    ),
  },
};

/* Setup Secondary Program Buffer */
const secondaryProgramBuffer: ProgramBuffer = {
  positionBuffer: secondaryGL.createBuffer(),
  normalBuffer: secondaryGL.createBuffer(),
  textureBuffer: secondaryGL.createBuffer(),
};

/* Setup Secondary Renderer */
const secondaryRenderer = new Renderer(
  secondaryGL,
  secondaryProgram,
  secondaryProgramInfo,
  secondaryProgramBuffer
);

/* Get HTML Element */
/* Main Canvas Control */
const sliderTranslateX = document.getElementById(
  "slider-translate-x"
) as HTMLInputElement;
const labelTranslateX = document.getElementById("label-translate-x");

const sliderTranslateY = document.getElementById(
  "slider-translate-y"
) as HTMLInputElement;
const labelTranslateY = document.getElementById("label-translate-y");

const sliderTranslateZ = document.getElementById(
  "slider-translate-z"
) as HTMLInputElement;
const labelTranslateZ = document.getElementById("label-translate-z");

const sliderAngleX = document.getElementById(
  "slider-angle-x"
) as HTMLInputElement;
const labelAngleX = document.getElementById("label-angle-x");

const sliderAngleY = document.getElementById(
  "slider-angle-y"
) as HTMLInputElement;
const labelAngleY = document.getElementById("label-angle-y");

const sliderAngleZ = document.getElementById(
  "slider-angle-z"
) as HTMLInputElement;
const labelAngleZ = document.getElementById("label-angle-z");

const sliderScaleX = document.getElementById(
  "slider-scale-x"
) as HTMLInputElement;
const labelScaleX = document.getElementById("label-scale-x");

const sliderScaleY = document.getElementById(
  "slider-scale-y"
) as HTMLInputElement;
const labelScaleY = document.getElementById("label-scale-y");

const sliderScaleZ = document.getElementById(
  "slider-scale-z"
) as HTMLInputElement;
const labelScaleZ = document.getElementById("label-scale-z");

/* Camera Control Elements */
const sliderCamAngle = document.getElementById(
  "slider-cam-angle"
) as HTMLInputElement;
const labelCamAngle = document.getElementById("label-cam-angle");

const sliderCamRadius = document.getElementById(
  "slider-cam-radius"
) as HTMLInputElement;
const labelCamRadius = document.getElementById("label-cam-radius");

/* Secondary Canvas Control */
/* Get HTML Element */
const sliderTranslateShapeX = document.getElementById(
  "slider-translate-shape-x"
) as HTMLInputElement;
const labelTranslateShapeX = document.getElementById("label-translate-shape-x");

const sliderTranslateShapeY = document.getElementById(
  "slider-translate-shape-y"
) as HTMLInputElement;
const labelTranslateShapeY = document.getElementById("label-translate-shape-y");

const sliderTranslateShapeZ = document.getElementById(
  "slider-translate-shape-z"
) as HTMLInputElement;
const labelTranslateShapeZ = document.getElementById("label-translate-shape-z");

const sliderAngleShapeX = document.getElementById(
  "slider-angle-shape-x"
) as HTMLInputElement;
const labelAngleShapeX = document.getElementById("label-angle-shape-x");

const sliderAngleShapeY = document.getElementById(
  "slider-angle-shape-y"
) as HTMLInputElement;
const labelAngleShapeY = document.getElementById("label-angle-shape-y");

const sliderAngleShapeZ = document.getElementById(
  "slider-angle-shape-z"
) as HTMLInputElement;
const labelAngleShapeZ = document.getElementById("label-angle-shape-z");

const sliderScaleShapeX = document.getElementById(
  "slider-scale-shape-x"
) as HTMLInputElement;
const labelScaleShapeX = document.getElementById("label-scale-shape-x");

const sliderScaleShapeY = document.getElementById(
  "slider-scale-shape-y"
) as HTMLInputElement;
const labelScaleShapeY = document.getElementById("label-scale-shape-y");

const sliderScaleShapeZ = document.getElementById(
  "slider-scale-shape-z"
) as HTMLInputElement;
const labelScaleShapeZ = document.getElementById("label-scale-shape-z");

const sliderCamAngleShape = document.getElementById(
  "slider-cam-angle-shape"
) as HTMLInputElement;
const labelCamAngleShape = document.getElementById("label-cam-angle-shape");

const sliderCamRadiusShape = document.getElementById(
  "slider-cam-radius-shape"
) as HTMLInputElement;
const labelCamRadiusShape = document.getElementById("label-cam-radius-shape");

const listOfProjection = document.getElementById(
  "list-of-projection"
) as HTMLSelectElement;

const listOfMapping = document.getElementById(
  "list-of-mapping"
) as HTMLSelectElement;

const loadButton = document.getElementById("load-btn");
const saveButton = document.getElementById("save-btn");
const shadingModeButton = document.getElementById("shading-mode-btn");
const animationModeButton = document.getElementById("animation-mode-btn");
const resetButton = document.getElementById("reset-btn");
const helpButton = document.getElementById("help-btn");
const helpModal = document.getElementById("help-panel");
const closeHelpButton = document.getElementById("close-help-btn");
const componentTree = document.getElementById("component-tree");

/* Global Variables */
let articulated: Articulated;
let selectedNode: Node;

let camera: Camera;
let cameraShape: Camera;
let ambientColor: Color;
let directionalLight: Light;

let offsetTranslate = {
  orthographic: {
    x: mainCanvas.width / 2,
    y: mainCanvas.height,
  },
  perspective: {
    x: 0,
    y: 0,
  },
  oblique: {
    x: mainCanvas.width / 1.5,
    y: 0,
  },
};

let offsetTranslateSecondaryCanvas = {
  orthographic: {
    x: secondaryCanvas.width / 2,
    y: secondaryCanvas.height,
  },
  perspective: {
    x: 0,
    y: 0,
  },
  oblique: {
    x: secondaryCanvas.width / 1.5,
    y: 0,
  },
};

let projectionType: ProjectionType = "orthographic";
let projectionParams: ProjectionParams = {
  orthographic: {
    left: 0,
    right: (mainGL.canvas as HTMLCanvasElement).clientWidth,
    bottom: (mainGL.canvas as HTMLCanvasElement).clientHeight,
    top: 0,
    near: 2000,
    far: -2000,
  },
  perspective: {
    fieldOfView: degToRad(60),
    aspect:
      (mainGL.canvas as HTMLCanvasElement).clientWidth /
      (mainGL.canvas as HTMLCanvasElement).clientHeight,
    near: 1,
    far: 2000,
  },
  oblique: {
    factor: 0.1,
    angle: degToRad(15),
    ortho_left: 0,
    ortho_right: (mainGL.canvas as HTMLCanvasElement).clientWidth,
    ortho_bottom: (mainGL.canvas as HTMLCanvasElement).clientHeight,
    ortho_top: 0,
    ortho_near: 2000,
    ortho_far: -2000,
  },
};

let projectionParamsSecondary: ProjectionParams = {
  orthographic: {
    left: 0,
    right: (secondaryGL.canvas as HTMLCanvasElement).clientWidth,
    bottom: (secondaryGL.canvas as HTMLCanvasElement).clientHeight,
    top: 0,
    near: 2000,
    far: -2000,
  },
  perspective: {
    fieldOfView: degToRad(60),
    aspect:
      (secondaryGL.canvas as HTMLCanvasElement).clientWidth /
      (secondaryGL.canvas as HTMLCanvasElement).clientHeight,
    near: 1,
    far: 2000,
  },
  oblique: {
    factor: 0.1,
    angle: degToRad(15),
    ortho_left: 0,
    ortho_right: (secondaryGL.canvas as HTMLCanvasElement).clientWidth,
    ortho_bottom: (secondaryGL.canvas as HTMLCanvasElement).clientHeight,
    ortho_top: 0,
    ortho_near: 2000,
    ortho_far: -2000,
  },
};
let shaderStatus: ShaderStatus = ShaderStatus.OFF;
let animation: boolean = false;
let mappingMode: MappingMode = MappingMode.TEXTURE;

/* Global Constant */
const animationSpeed = 1.2;

/* Render Main Canvas */
const renderMainCanvas = (now: DOMHighResTimeStamp) => {
  /* Convent to Second */
  now *= 0.005;

  /* Animate */
  if (animation) {
    const c = animationSpeed * now;

    articulated.applyAnimation(c);
  }

  /* Get Current Light */
  const currentLight =
    projectionType === "perspective"
      ? directionalLight.reverse()
      : directionalLight;

  /* Render Articulated */
  articulated.renderTree(
    mainRenderer,
    projectionType,
    projectionParams[projectionType],
    camera,
    offsetTranslate[projectionType].x,
    offsetTranslate[projectionType].y,
    ambientColor,
    currentLight,
    shaderStatus,
    mappingMode
  );

  if (selectedNode != null) {
    selectedNode.renderTree(
      secondaryRenderer,
      projectionType,
      projectionParamsSecondary[projectionType],
      cameraShape,
      offsetTranslateSecondaryCanvas[projectionType].x,
      offsetTranslateSecondaryCanvas[projectionType].y,
      ambientColor,
      currentLight,
      shaderStatus,
      mappingMode,
      Transformation.identity()
    );
  }

  /* Render Recursively */
  window.requestAnimationFrame(renderMainCanvas);
};

/* Initialize Default Value */
const initializeDefaultValue = (
  newArticulated: Articulated,
  newCamera: Camera,
  newCameraShape: Camera,
  newAmbientColor: Color,
  newDirectionalLight: Light
) => {
  articulated = newArticulated;
  camera = newCamera;
  cameraShape = newCameraShape;
  ambientColor = newAmbientColor;
  directionalLight = newDirectionalLight;

  sliderTranslateX.valueAsNumber = articulated.root.tx;
  labelTranslateX.textContent = articulated.root.tx.toString();

  sliderTranslateY.valueAsNumber = articulated.root.ty;
  labelTranslateY.textContent = articulated.root.ty.toString();

  sliderTranslateZ.valueAsNumber = articulated.root.tz;
  labelTranslateZ.textContent = articulated.root.tz.toString();

  sliderAngleX.valueAsNumber = Math.round(radToDeg(articulated.root.angleX));
  labelAngleX.textContent = Math.round(
    radToDeg(articulated.root.angleX)
  ).toString();

  sliderAngleY.valueAsNumber = Math.round(radToDeg(articulated.root.angleY));
  labelAngleY.textContent = Math.round(
    radToDeg(articulated.root.angleY)
  ).toString();

  sliderAngleZ.valueAsNumber = Math.round(radToDeg(articulated.root.angleZ));
  labelAngleZ.textContent = Math.round(
    radToDeg(articulated.root.angleZ)
  ).toString();

  sliderScaleX.valueAsNumber = articulated.root.sx;
  labelScaleX.textContent = articulated.root.sx.toString();

  sliderScaleY.valueAsNumber = articulated.root.sy;
  labelScaleY.textContent = articulated.root.sy.toString();

  sliderScaleZ.valueAsNumber = articulated.root.sz;
  labelScaleZ.textContent = articulated.root.sz.toString();

  sliderCamAngle.valueAsNumber = radToDeg(camera.angle);
  labelCamAngle.textContent = radToDeg(camera.angle).toString();

  sliderCamRadius.valueAsNumber = camera.radius;
  labelCamRadius.textContent = camera.radius.toString();

  sliderCamAngleShape.valueAsNumber = radToDeg(cameraShape.angle);
  labelCamAngleShape.textContent = radToDeg(cameraShape.angle).toString();

  sliderCamRadiusShape.valueAsNumber = cameraShape.radius;
  labelCamRadiusShape.textContent = cameraShape.radius.toString();

  shadingModeButton.textContent = "ON";
  shadingModeButton.classList.add("active");
  shaderStatus = ShaderStatus.ON;

  animationModeButton.textContent = "ON";
  animationModeButton.classList.add("active");
  animation = true;

  mainRenderer.texture("images/wood.png", 1, 1);
  secondaryRenderer.texture("images/wood.png", 1, 1);
};

/* Component Tree */
const addComponentTree = (
  componentTree: HTMLElement,
  root: Node,
  margin_left = 0
) => {
  const button = document.createElement("button");

  button.textContent = root.index;
  button.addEventListener("click", (event) => {
    const textContent = (event.target as HTMLButtonElement).textContent;

    selectedNode = articulated.findNode(textContent);
    sliderTranslateShapeX.valueAsNumber = selectedNode.tx;
    labelTranslateShapeX.textContent = selectedNode.tx.toString();

    sliderTranslateShapeY.valueAsNumber = selectedNode.ty;
    labelTranslateShapeY.textContent = selectedNode.ty.toString();

    sliderTranslateShapeZ.valueAsNumber = selectedNode.tz;
    labelTranslateShapeZ.textContent = selectedNode.tz.toString();

    sliderAngleShapeX.valueAsNumber = Math.round(radToDeg(selectedNode.angleX));
    labelAngleShapeX.textContent = Math.round(
      radToDeg(selectedNode.angleX)
    ).toString();

    sliderAngleShapeY.valueAsNumber = Math.round(radToDeg(selectedNode.angleY));
    labelAngleShapeY.textContent = Math.round(
      radToDeg(selectedNode.angleY)
    ).toString();

    sliderAngleShapeZ.valueAsNumber = Math.round(radToDeg(selectedNode.angleZ));
    labelAngleShapeZ.textContent = Math.round(
      radToDeg(selectedNode.angleZ)
    ).toString();

    sliderScaleShapeX.valueAsNumber = selectedNode.sx;
    labelScaleShapeX.textContent = selectedNode.sx.toString();

    sliderScaleShapeY.valueAsNumber = selectedNode.sy;
    labelScaleShapeY.textContent = selectedNode.sy.toString();

    sliderScaleShapeZ.valueAsNumber = selectedNode.sz;
    labelScaleShapeZ.textContent = selectedNode.sz.toString();
  });

  button.style.marginLeft = `${margin_left}%`;

  componentTree.appendChild(button);
  componentTree.appendChild(document.createElement("br"));

  for (const child of root.children) {
    addComponentTree(componentTree, child, margin_left + 5);
  }
};

/* Event Listener */
sliderTranslateX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateX.textContent = delta.toString();
  articulated.root.moveX(delta);
});

sliderTranslateY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateY.textContent = delta.toString();
  articulated.root.moveY(delta);
});

sliderTranslateZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateZ.textContent = delta.toString();
  articulated.root.moveZ(delta);
});

sliderAngleX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleX.textContent = delta.toString();
  articulated.root.rotateX(degToRad(delta));
});

sliderAngleY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleY.textContent = delta.toString();
  articulated.root.rotateY(degToRad(delta));
});

sliderAngleZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleZ.textContent = delta.toString();
  articulated.root.rotateZ(degToRad(delta));
});

sliderScaleX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleX.textContent = delta.toString();
  articulated.root.scaleX(delta);
});

sliderScaleY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleY.textContent = delta.toString();
  articulated.root.scaleY(delta);
});

sliderScaleZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleZ.textContent = delta.toString();
  articulated.root.scaleZ(delta);
});

sliderTranslateShapeX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateShapeX.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.moveX(delta);
  }
});

sliderTranslateShapeY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateShapeY.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.moveY(delta);
  }
});

sliderTranslateShapeZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelTranslateShapeZ.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.moveZ(delta);
  }
});

sliderAngleShapeX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleShapeX.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.rotateX(degToRad(delta));
  }
});

sliderAngleShapeY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleShapeY.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.rotateY(degToRad(delta));
  }
});

sliderAngleShapeZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelAngleShapeZ.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.rotateZ(degToRad(delta));
  }
});

sliderScaleShapeX.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleShapeX.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.scaleX(delta);
  }
});

sliderScaleShapeY.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleShapeY.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.scaleY(delta);
  }
});

sliderScaleShapeZ.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelScaleShapeZ.textContent = delta.toString();
  if (selectedNode != null) {
    selectedNode.scaleZ(delta);
  }
});

listOfProjection.addEventListener("change", () => {
  const newProjectionType = listOfProjection.selectedOptions[0]
    .value as ProjectionType;

  projectionType = newProjectionType;
});

listOfMapping.addEventListener("change", () => {
  const newMapping = listOfMapping.selectedOptions[0].value as MappingMode;
  mappingMode = newMapping;

  switch (mappingMode) {
    case MappingMode.TEXTURE:
      mainRenderer.texture("images/wood.png", 1, 1);
      secondaryRenderer.texture("images/wood.png", 1, 1);
      break;

    case MappingMode.ENVIRONMENT:
      mainRenderer.environment([
        {
          source: "images/pos-x.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-x.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/pos-y.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-y.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/pos-z.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-z.jpg",
          width: 512,
          height: 512,
        },
      ]);
      secondaryRenderer.environment([
        {
          source: "images/pos-x.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-x.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/pos-y.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-y.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/pos-z.jpg",
          width: 512,
          height: 512,
        },
        {
          source: "images/neg-z.jpg",
          width: 512,
          height: 512,
        },
      ]);
      break;

    case MappingMode.BUMP:
      mainRenderer.texture("images/bumped.png", 1, 1);
      secondaryRenderer.texture("images/bumped.png", 1, 1);
      break;
  }
});

/* Camera Control Listener */
sliderCamAngle.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelCamAngle.textContent = delta.toString();
  camera.rotate(degToRad(delta));
});

sliderCamRadius.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelCamRadius.textContent = delta.toString();
  camera.radius = delta;
});

sliderCamAngleShape.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelCamAngleShape.textContent = delta.toString();
  cameraShape.rotate(degToRad(delta));
});

sliderCamRadiusShape.addEventListener("input", (event) => {
  const delta = (event.target as HTMLInputElement).valueAsNumber;

  labelCamRadiusShape.textContent = delta.toString();
  cameraShape.radius = delta;
});

loadButton.addEventListener("click", () => {
  FileHandling.upload((text) => {
    initializeDefaultValue(
      FileSystem.loadArticulated(text),
      generateDefaultCamera(),
      generateDefaultCamera(),
      generateDefaultAmbientColor(),
      generateDefaultDirectionalLight()
    );
  });
});

saveButton.addEventListener("click", () => {
  FileHandling.download(FileSystem.serializeArticulated(articulated));
});

/* Shading and Animation */
shadingModeButton.addEventListener("click", () => {
  if (shaderStatus === ShaderStatus.OFF) {
    shadingModeButton.classList.add("active");
    shadingModeButton.textContent = "ON";

    shaderStatus = ShaderStatus.ON;
  } else {
    shadingModeButton.classList.remove("active");
    shadingModeButton.textContent = "OFF";

    shaderStatus = ShaderStatus.OFF;
  }
});

animationModeButton.addEventListener("click", () => {
  if (!animation) {
    animationModeButton.classList.add("active");
    animationModeButton.textContent = "ON";

    animation = true;
  } else {
    animationModeButton.classList.remove("active");
    animationModeButton.textContent = "OFF";

    animation = false;
  }
});

/* Reset State */
resetButton.addEventListener("click", () => {
  initializeDefaultValue(
    generateDefaultArticulated(),
    generateDefaultCamera(),
    generateDefaultCamera(),
    generateDefaultAmbientColor(),
    generateDefaultDirectionalLight()
  );
});

/* Help Button */
helpButton.addEventListener("click", () => {
  helpModal.style.display = "flex";
});

closeHelpButton.addEventListener("click", () => {
  helpModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === helpModal) {
    helpModal.style.display = "none";
  }
});

/* Main */
document.addEventListener("DOMContentLoaded", () => {
  initializeDefaultValue(
    generateDefaultArticulated(),
    generateDefaultCamera(),
    generateDefaultCamera(),
    generateDefaultAmbientColor(),
    generateDefaultDirectionalLight()
  );

  addComponentTree(componentTree, articulated.root);
  window.requestAnimationFrame(renderMainCanvas);
});
