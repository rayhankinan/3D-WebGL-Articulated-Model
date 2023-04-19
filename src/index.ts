import createShader from "Utils/shader";
import createProgram from "Utils/program";
import { degToRad, radToDeg } from "Utils/angle";
import resizeCanvasToDisplaySize from "Utils/resize-canvas";
import Renderer from "Utils/renderer";
import Articulated from "Objects/articulated";
import Camera from "Objects/camera";
import Light from "Objects/light";
import Color from "Objects/color";
import ProjectionType from "Types/projection-type";
import ProjectionParams from "Types/projection-params";
import ShaderStatus from "Types/shader-status";
import ProgramInfo from "Types/program-info";
import ProgramBuffer from "Types/program-buffer";
import FileHandling from "Files/file-handling";
import FileSystem from "Files/file-system";
import generateDefaultCamera from "Main/default-camera";
import generateDefaultAmbientColor from "Main/default-ambient-color";
import generateDefaultDirectionalLight from "Main/default-directional-light";
import generateDefaultArticulated from "Main/default-articulated";
import Node from "./Objects/node";

/* Get Vertex dan Fragment Source */
const vertexShaderElement = document.getElementById("vertex-shader");
const fragmentShaderElement = document.getElementById("fragment-shader");

const vertexShaderSource = vertexShaderElement.textContent;
const fragmentShaderSource = fragmentShaderElement.textContent;

/* Main Canvas */
const mainCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;
const mainGL = mainCanvas.getContext("webgl");

/* Setup Viewport */
resizeCanvasToDisplaySize(mainGL.canvas as HTMLCanvasElement);
mainGL.viewport(0, 0, mainGL.canvas.width, mainGL.canvas.height);

/* Clear Color and Buffer */
mainGL.clear(mainGL.COLOR_BUFFER_BIT | mainGL.DEPTH_BUFFER_BIT);

/* Turn On Culling */
mainGL.enable(mainGL.CULL_FACE);

/* Enable the Depth Buffer */
mainGL.enable(mainGL.DEPTH_TEST);

/* Add Vertex and Fragment Shader */
const vertexShader = createShader(
  mainGL,
  mainGL.VERTEX_SHADER,
  vertexShaderSource
);
const fragmentShader = createShader(
  mainGL,
  mainGL.FRAGMENT_SHADER,
  fragmentShaderSource
);

/* Setup Program */
const mainProgram = createProgram(mainGL, vertexShader, fragmentShader);

/* Setup Program Info */
const programInfo: ProgramInfo = {
  attribLocations: {
    positionLocation: mainGL.getAttribLocation(mainProgram, "a_position"),
    colorLocation: mainGL.getAttribLocation(mainProgram, "a_color"),
    normalLocation: mainGL.getAttribLocation(mainProgram, "a_normal"),
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
  },
};

/* Setup Buffer */
const programBuffer: ProgramBuffer = {
  positionBuffer: mainGL.createBuffer(),
  colorBuffer: mainGL.createBuffer(),
  normalBuffer: mainGL.createBuffer(),
};

/* Setup Renderer */
const renderer = new Renderer(mainGL, mainProgram, programInfo, programBuffer);

/* Get HTML Element */
/* Transformation Elements */
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

const listOfProjection = document.getElementById(
  "list-of-projection"
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
let currentRawArticulated: string;
let camera: Camera;
let ambientColor: Color;
let directionalLight: Light;
let offsetTranslate = {
  orthographic: {
    x: mainCanvas.width / 2,
    y: mainCanvas.height / 3,
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
let shaderStatus: ShaderStatus = ShaderStatus.OFF;
let animation: boolean = false;
let then: DOMHighResTimeStamp = 0;

/* Global Constant */
const animationSpeed = 1.2;

/* Render Canvas */
const renderCanvas = (now: DOMHighResTimeStamp) => {
  /* Convent to Second */
  now *= 0.001;

  /* Calculate Delta Time */
  const deltaTime = now - then;

  /* Update Time */
  then = now;

  /* Animate */
  if (animation) {
    articulated.root.rotateY(
      degToRad(
        radToDeg(articulated.root.angleY + animationSpeed * deltaTime) % 360
      )
    );
    articulated.root.rotateZ(
      degToRad(
        radToDeg(articulated.root.angleZ + animationSpeed * deltaTime) % 360
      )
    );

    /* Change Slider */
    sliderAngleY.valueAsNumber = Math.round(radToDeg(articulated.root.angleY));
    labelAngleY.textContent = Math.round(
      radToDeg(articulated.root.angleY)
    ).toString();

    sliderAngleZ.valueAsNumber = Math.round(radToDeg(articulated.root.angleZ));
    labelAngleZ.textContent = Math.round(
      radToDeg(articulated.root.angleZ)
    ).toString();
  }

  /* Get Current Light */
  const currentLight =
    projectionType === "perspective"
      ? directionalLight.reverse()
      : directionalLight;

  /* Render Object */
  articulated.renderTree(
    renderer,
    projectionType,
    projectionParams[projectionType],
    camera,
    offsetTranslate[projectionType].x,
    offsetTranslate[projectionType].y,
    ambientColor,
    currentLight,
    shaderStatus
  );

  /* Render Recursively */
  window.requestAnimationFrame(renderCanvas);
};

/* Initialize Default Value */
const initializeDefaultValue = (
  newArticulated: Articulated,
  newCamera: Camera,
  newAmbientColor: Color,
  newDirectionalLight: Light
) => {
  articulated = newArticulated;
  camera = newCamera;
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

  shadingModeButton.textContent = "ON";
  shadingModeButton.classList.add("active");
  shaderStatus = ShaderStatus.ON;

  animationModeButton.textContent = "ON";
  animationModeButton.classList.add("active");
  animation = true;
};

/* Event Listener */
/* Transformation Listener */
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

listOfProjection.addEventListener("change", () => {
  const newProjectionType = listOfProjection.selectedOptions[0]
    .value as ProjectionType;

  projectionType = newProjectionType;
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

loadButton.addEventListener("click", () => {
  FileHandling.upload((text) => {
    currentRawArticulated = text;

    initializeDefaultValue(
      FileSystem.loadArticulated(currentRawArticulated),
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

window.onclick = function (event) {
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
};

const addComponentTree = (componentTree :HTMLElement, root: Node, margin_left = 0) => {
  const button = document.createElement("button");
  button.style.marginLeft = margin_left + "%";
  button.textContent = root.index;
  componentTree.appendChild(button);
  componentTree.appendChild(document.createElement("br"));
  
  const children = root.children;
  if (children.length > 0) {
    for (const child of children) {
      addComponentTree(componentTree, child, margin_left + 5);
    } 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeDefaultValue(
    generateDefaultArticulated(),
    generateDefaultCamera(),
    generateDefaultAmbientColor(),
    generateDefaultDirectionalLight()
  );

  addComponentTree(componentTree, articulated.root);
  window.requestAnimationFrame(renderCanvas);
});
