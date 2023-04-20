/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Constants/closest-to-zero.ts":
/*!******************************************!*\
  !*** ./src/Constants/closest-to-zero.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CLOSEST_TO_ZERO = 1e-6;
exports["default"] = CLOSEST_TO_ZERO;


/***/ }),

/***/ "./src/Factories/animation-factory.ts":
/*!********************************************!*\
  !*** ./src/Factories/animation-factory.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const animation_1 = __importDefault(__webpack_require__(/*! Objects/animation */ "./src/Objects/animation.ts"));
const lambda_factory_1 = __importDefault(__webpack_require__(/*! Factories/lambda-factory */ "./src/Factories/lambda-factory.ts"));
class AnimationFactory {
    static fromInterface(animation) {
        const { index, type, lambda } = animation;
        const newLambda = lambda_factory_1.default.fromInterface(lambda);
        return new animation_1.default(index, type, newLambda);
    }
}
exports["default"] = AnimationFactory;


/***/ }),

/***/ "./src/Factories/articulated-factory.ts":
/*!**********************************************!*\
  !*** ./src/Factories/articulated-factory.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const articulated_1 = __importDefault(__webpack_require__(/*! Objects/articulated */ "./src/Objects/articulated.ts"));
const node_factory_1 = __importDefault(__webpack_require__(/*! Factories/node-factory */ "./src/Factories/node-factory.ts"));
const animation_factory_1 = __importDefault(__webpack_require__(/*! Factories/animation-factory */ "./src/Factories/animation-factory.ts"));
class ArticulatedFactory {
    static fromInterface(articulated) {
        const { root, arrayOfAnimation } = articulated;
        const newRoot = node_factory_1.default.fromInterface(root);
        const newArrayOfAnimation = arrayOfAnimation.map((animation) => animation_factory_1.default.fromInterface(animation));
        return new articulated_1.default(newRoot, newArrayOfAnimation);
    }
}
exports["default"] = ArticulatedFactory;


/***/ }),

/***/ "./src/Factories/draw-factory.ts":
/*!***************************************!*\
  !*** ./src/Factories/draw-factory.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const draw_1 = __importDefault(__webpack_require__(/*! Objects/draw */ "./src/Objects/draw.ts"));
const point_factory_1 = __importDefault(__webpack_require__(/*! Factories/point-factory */ "./src/Factories/point-factory.ts"));
const texture_factory_1 = __importDefault(__webpack_require__(/*! Factories/texture-factory */ "./src/Factories/texture-factory.ts"));
class DrawFactory {
    static fromInterface(draw) {
        const { point, texture } = draw;
        const newPoint = point_factory_1.default.fromInterface(point);
        const newTexture = texture_factory_1.default.fromInterface(texture);
        return new draw_1.default(newPoint, newTexture);
    }
}
exports["default"] = DrawFactory;


/***/ }),

/***/ "./src/Factories/face-factory.ts":
/*!***************************************!*\
  !*** ./src/Factories/face-factory.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const face_1 = __importDefault(__webpack_require__(/*! Objects/face */ "./src/Objects/face.ts"));
const draw_factory_1 = __importDefault(__webpack_require__(/*! Factories/draw-factory */ "./src/Factories/draw-factory.ts"));
class FaceFactory {
    static fromInterface(face) {
        const { arrayOfDraw } = face;
        const newArrayOfDraw = arrayOfDraw.map((draw) => {
            return draw_factory_1.default.fromInterface(draw);
        });
        return new face_1.default(newArrayOfDraw);
    }
}
exports["default"] = FaceFactory;


/***/ }),

/***/ "./src/Factories/lambda-factory.ts":
/*!*****************************************!*\
  !*** ./src/Factories/lambda-factory.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const lambda_1 = __importDefault(__webpack_require__(/*! Objects/lambda */ "./src/Objects/lambda.ts"));
class LambdaFactory {
    static fromInterface(lambda) {
        const { rawFunction } = lambda;
        return new lambda_1.default(rawFunction);
    }
}
exports["default"] = LambdaFactory;


/***/ }),

/***/ "./src/Factories/node-factory.ts":
/*!***************************************!*\
  !*** ./src/Factories/node-factory.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_1 = __importDefault(__webpack_require__(/*! Objects/node */ "./src/Objects/node.ts"));
const face_factory_1 = __importDefault(__webpack_require__(/*! Factories/face-factory */ "./src/Factories/face-factory.ts"));
class NodeFactory {
    static fromInterface(node) {
        const { index, children, arrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz, } = node;
        const newArrayOfFace = arrayOfFace.map((face) => {
            return face_factory_1.default.fromInterface(face);
        });
        const newChildren = children.map((child) => {
            return NodeFactory.fromInterface(child);
        });
        return new node_1.default(index, newChildren, newArrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz);
    }
}
exports["default"] = NodeFactory;


/***/ }),

/***/ "./src/Factories/point-factory.ts":
/*!****************************************!*\
  !*** ./src/Factories/point-factory.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const point_1 = __importDefault(__webpack_require__(/*! Objects/point */ "./src/Objects/point.ts"));
class PointFactory {
    static fromInterface(point) {
        const { x, y, z } = point;
        return new point_1.default(x, y, z);
    }
}
exports["default"] = PointFactory;


/***/ }),

/***/ "./src/Factories/texture-factory.ts":
/*!******************************************!*\
  !*** ./src/Factories/texture-factory.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const texture_1 = __importDefault(__webpack_require__(/*! Objects/texture */ "./src/Objects/texture.ts"));
class TextureFactory {
    static fromInterface(texture) {
        const { x, y } = texture;
        return new texture_1.default(x, y);
    }
}
exports["default"] = TextureFactory;


/***/ }),

/***/ "./src/Files/file-handling.ts":
/*!************************************!*\
  !*** ./src/Files/file-handling.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class FileHandling {
    static download(text) {
        const data = new File([text], "articulated.json", {
            type: "application/json",
        });
        const url = URL.createObjectURL(data);
        const a = document.createElement("a");
        a.href = url;
        a.download = data.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    static upload(callback) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.addEventListener("change", () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                callback(reader.result);
            };
            reader.readAsText(file);
        });
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }
}
exports["default"] = FileHandling;


/***/ }),

/***/ "./src/Files/file-system.ts":
/*!**********************************!*\
  !*** ./src/Files/file-system.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const articulated_factory_1 = __importDefault(__webpack_require__(/*! Factories/articulated-factory */ "./src/Factories/articulated-factory.ts"));
class FileSystem {
    static loadArticulated(text) {
        const articulatedInterface = JSON.parse(text);
        return articulated_factory_1.default.fromInterface(articulatedInterface);
    }
    static serializeArticulated(articulated) {
        return JSON.stringify(articulated);
    }
}
exports["default"] = FileSystem;


/***/ }),

/***/ "./src/Objects/animation.ts":
/*!**********************************!*\
  !*** ./src/Objects/animation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Animation {
    constructor(index, type, lambda) {
        this.index = index;
        this.type = type;
        this.lambda = lambda;
    }
    getIndex() {
        return this.index;
    }
    getType() {
        return this.type;
    }
    transform(c) {
        return this.lambda.call(c);
    }
}
exports["default"] = Animation;


/***/ }),

/***/ "./src/Objects/articulated.ts":
/*!************************************!*\
  !*** ./src/Objects/articulated.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const transformation_1 = __importDefault(__webpack_require__(/*! Operations/transformation */ "./src/Operations/transformation.ts"));
const animation_type_1 = __importDefault(__webpack_require__(/*! Types/animation-type */ "./src/Types/animation-type.ts"));
class Articulated {
    constructor(root, arrayOfAnimation) {
        this.root = root;
        this.arrayOfAnimation = arrayOfAnimation;
    }
    findNode(index) {
        return this.root.findNode(index);
    }
    renderTree(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode) {
        this.root.renderTree(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode, transformation_1.default.identity());
    }
    applyAnimation(c) {
        for (const animation of this.arrayOfAnimation) {
            const currentNode = this.root.findNode(animation.getIndex());
            switch (animation.getType()) {
                case animation_type_1.default.MOVE_X:
                    currentNode.moveX(animation.transform(c));
                    break;
                case animation_type_1.default.MOVE_Y:
                    currentNode.moveY(animation.transform(c));
                    break;
                case animation_type_1.default.MOVE_Z:
                    currentNode.moveZ(animation.transform(c));
                    break;
                case animation_type_1.default.ROTATE_X:
                    currentNode.rotateX(animation.transform(c));
                    break;
                case animation_type_1.default.ROTATE_Y:
                    currentNode.rotateY(animation.transform(c));
                    break;
                case animation_type_1.default.ROTATE_Z:
                    currentNode.rotateZ(animation.transform(c));
                    break;
                case animation_type_1.default.SCALE_X:
                    currentNode.scaleX(animation.transform(c));
                    break;
                case animation_type_1.default.SCALE_Y:
                    currentNode.scaleY(animation.transform(c));
                    break;
                case animation_type_1.default.SCALE_Z:
                    currentNode.scaleZ(animation.transform(c));
                    break;
            }
        }
    }
}
exports["default"] = Articulated;


/***/ }),

/***/ "./src/Objects/camera.ts":
/*!*******************************!*\
  !*** ./src/Objects/camera.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
const matrix_1 = __importDefault(__webpack_require__(/*! Objects/matrix */ "./src/Objects/matrix.ts"));
const transformation_1 = __importDefault(__webpack_require__(/*! Operations/transformation */ "./src/Operations/transformation.ts"));
const vector_1 = __importDefault(__webpack_require__(/*! Objects/vector */ "./src/Objects/vector.ts"));
class Camera {
    constructor(radius, angle, center) {
        this.radius = radius;
        this.angle = angle;
        this.center = center;
    }
    rotate(angle) {
        this.angle = angle;
    }
    moveRadius(distance) {
        this.radius = distance;
    }
    lookAt() {
        const initialMatrix = transformation_1.default.translation(this.center.x, this.center.y, this.center.z)
            .multiplyMatrix(transformation_1.default.rotationY(this.angle))
            .multiplyMatrix(transformation_1.default.translation(0, 0, this.radius))
            .multiplyMatrix(transformation_1.default.translation(-this.center.x, -this.center.y, -this.center.z));
        const cameraPosition = initialMatrix.a4;
        const eyeVector = new vector_1.default(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        const centerVector = new vector_1.default(this.center.x, this.center.y, this.center.z);
        const upVector = new vector_1.default(0, 1, 0);
        const zAxis = eyeVector.subtract(centerVector).normalize();
        const xAxis = upVector.cross(zAxis).normalize();
        const yAxis = zAxis.cross(xAxis).normalize();
        const cameraMatrix = new matrix_1.default(new coordinate_1.default(xAxis.x, xAxis.y, xAxis.z, 0), new coordinate_1.default(yAxis.x, yAxis.y, yAxis.z, 0), new coordinate_1.default(zAxis.x, zAxis.y, zAxis.z, 0), new coordinate_1.default(eyeVector.x, eyeVector.y, eyeVector.z, 1));
        return cameraMatrix.inverse();
    }
}
exports["default"] = Camera;


/***/ }),

/***/ "./src/Objects/color.ts":
/*!******************************!*\
  !*** ./src/Objects/color.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    getTriplet() {
        return [this.r, this.g, this.b];
    }
}
exports["default"] = Color;


/***/ }),

/***/ "./src/Objects/coordinate.ts":
/*!***********************************!*\
  !*** ./src/Objects/coordinate.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Coordinate {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    getQuadruplet() {
        return [this.x, this.y, this.z, this.w];
    }
    dot(other) {
        return (this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w);
    }
}
exports["default"] = Coordinate;


/***/ }),

/***/ "./src/Objects/draw.ts":
/*!*****************************!*\
  !*** ./src/Objects/draw.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Draw {
    constructor(point, texture) {
        this.point = point;
        this.texture = texture;
    }
    getPoint() {
        return this.point;
    }
    getTexture() {
        return this.texture;
    }
}
exports["default"] = Draw;


/***/ }),

/***/ "./src/Objects/face.ts":
/*!*****************************!*\
  !*** ./src/Objects/face.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vector_1 = __importDefault(__webpack_require__(/*! Objects/vector */ "./src/Objects/vector.ts"));
class Face {
    constructor(arrayOfDraw) {
        this.arrayOfDraw = arrayOfDraw;
    }
    findNormal() {
        const firstPoint = this.arrayOfDraw[0].getPoint();
        const q = new vector_1.default(firstPoint.x, firstPoint.y, firstPoint.z);
        const secondPoint = this.arrayOfDraw[1].getPoint();
        const r = new vector_1.default(secondPoint.x, secondPoint.y, secondPoint.z);
        const thirdPoint = this.arrayOfDraw[2].getPoint();
        const s = new vector_1.default(thirdPoint.x, thirdPoint.y, thirdPoint.z);
        const qr = r.subtract(q);
        const qs = s.subtract(q);
        return qs.cross(qr).normalize();
    }
    findTangents() {
        const firstPoint = this.arrayOfDraw[0].getPoint();
        const q = new vector_1.default(firstPoint.x, firstPoint.y, firstPoint.z);
        const secondPoint = this.arrayOfDraw[1].getPoint();
        const r = new vector_1.default(secondPoint.x, secondPoint.y, secondPoint.z);
        const thirdPoint = this.arrayOfDraw[2].getPoint();
        const s = new vector_1.default(thirdPoint.x, thirdPoint.y, thirdPoint.z);
        const qr = r.subtract(q);
        const qs = s.subtract(q);
        return [qr.normalize(), qs.normalize()];
    }
    getRawPosition() {
        return this.arrayOfDraw.flatMap((draw) => draw.getPoint().getTriplet());
    }
    getRawTexture() {
        return this.arrayOfDraw.flatMap((draw) => draw.getTexture().getPair());
    }
}
exports["default"] = Face;


/***/ }),

/***/ "./src/Objects/lambda.ts":
/*!*******************************!*\
  !*** ./src/Objects/lambda.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Lambda {
    constructor(rawFunction) {
        this.rawFunction = rawFunction;
    }
    call(c) {
        return eval(`(${this.rawFunction})(${c})`);
    }
}
exports["default"] = Lambda;


/***/ }),

/***/ "./src/Objects/light.ts":
/*!******************************!*\
  !*** ./src/Objects/light.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vector_1 = __importDefault(__webpack_require__(/*! Objects/vector */ "./src/Objects/vector.ts"));
class Light extends vector_1.default {
    constructor(x, y, z) {
        super(x, y, z);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getRawDirection() {
        const unitVector = this.normalize();
        return unitVector.getTriplet();
    }
    reverse() {
        return new Light(-this.x, -this.y, -this.z);
    }
}
exports["default"] = Light;


/***/ }),

/***/ "./src/Objects/matrix.ts":
/*!*******************************!*\
  !*** ./src/Objects/matrix.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
class Matrix {
    constructor(a1, a2, a3, a4) {
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
    }
    flatten() {
        return [
            ...this.a1.getQuadruplet(),
            ...this.a2.getQuadruplet(),
            ...this.a3.getQuadruplet(),
            ...this.a4.getQuadruplet(),
        ];
    }
    multiplyMatrix(other) {
        /* Unpack "this" matrix */
        const [a11, a21, a31, a41] = this.a1.getQuadruplet();
        const [a12, a22, a32, a42] = this.a2.getQuadruplet();
        const [a13, a23, a33, a43] = this.a3.getQuadruplet();
        const [a14, a24, a34, a44] = this.a4.getQuadruplet();
        /* Create transpose coordinate */
        const a1 = new coordinate_1.default(a11, a12, a13, a14);
        const a2 = new coordinate_1.default(a21, a22, a23, a24);
        const a3 = new coordinate_1.default(a31, a32, a33, a34);
        const a4 = new coordinate_1.default(a41, a42, a43, a44);
        /* Matrix multiplication */
        const b11 = a1.dot(other.a1);
        const b12 = a1.dot(other.a2);
        const b13 = a1.dot(other.a3);
        const b14 = a1.dot(other.a4);
        const b21 = a2.dot(other.a1);
        const b22 = a2.dot(other.a2);
        const b23 = a2.dot(other.a3);
        const b24 = a2.dot(other.a4);
        const b31 = a3.dot(other.a1);
        const b32 = a3.dot(other.a2);
        const b33 = a3.dot(other.a3);
        const b34 = a3.dot(other.a4);
        const b41 = a4.dot(other.a1);
        const b42 = a4.dot(other.a2);
        const b43 = a4.dot(other.a3);
        const b44 = a4.dot(other.a4);
        /* Create result coordinate */
        const b1 = new coordinate_1.default(b11, b21, b31, b41);
        const b2 = new coordinate_1.default(b12, b22, b32, b42);
        const b3 = new coordinate_1.default(b13, b23, b33, b43);
        const b4 = new coordinate_1.default(b14, b24, b34, b44);
        /* Create new matrix */
        const newMatrix = new Matrix(b1, b2, b3, b4);
        return newMatrix;
    }
    multiplyCoordinate(coordinate) {
        /* Unpack "this" matrix */
        const [a11, a21, a31, a41] = this.a1.getQuadruplet();
        const [a12, a22, a32, a42] = this.a2.getQuadruplet();
        const [a13, a23, a33, a43] = this.a3.getQuadruplet();
        const [a14, a24, a34, a44] = this.a4.getQuadruplet();
        /* Create transpose coordinate */
        const a1 = new coordinate_1.default(a11, a12, a13, a14);
        const a2 = new coordinate_1.default(a21, a22, a23, a24);
        const a3 = new coordinate_1.default(a31, a32, a33, a34);
        const a4 = new coordinate_1.default(a41, a42, a43, a44);
        /* Create result value */
        const x = a1.dot(coordinate);
        const y = a2.dot(coordinate);
        const z = a3.dot(coordinate);
        const w = a4.dot(coordinate);
        /* Create new coordinate */
        const newCoordinate = new coordinate_1.default(x, y, z, w);
        return newCoordinate;
    }
    inverse() {
        const m11 = this.a1.x;
        const m12 = this.a1.y;
        const m13 = this.a1.z;
        const m14 = this.a1.w;
        const m21 = this.a2.x;
        const m22 = this.a2.y;
        const m23 = this.a2.z;
        const m24 = this.a2.w;
        const m31 = this.a3.x;
        const m32 = this.a3.y;
        const m33 = this.a3.z;
        const m34 = this.a3.w;
        const m41 = this.a4.x;
        const m42 = this.a4.y;
        const m43 = this.a4.z;
        const m44 = this.a4.w;
        /* Find 3x3 determinant of each term */
        const detm11 = m22 * m33 * m44 +
            m23 * m34 * m42 +
            m24 * m32 * m43 -
            m24 * m33 * m42 -
            m23 * m32 * m44 -
            m22 * m34 * m43;
        const detm12 = m21 * m33 * m44 +
            m23 * m34 * m41 +
            m24 * m31 * m43 -
            m24 * m33 * m41 -
            m23 * m31 * m44 -
            m21 * m34 * m43;
        const detm13 = m21 * m32 * m44 +
            m22 * m34 * m41 +
            m24 * m31 * m42 -
            m24 * m32 * m41 -
            m22 * m31 * m44 -
            m21 * m34 * m42;
        const detm14 = m21 * m32 * m43 +
            m22 * m33 * m41 +
            m23 * m31 * m42 -
            m23 * m32 * m41 -
            m22 * m31 * m43 -
            m21 * m33 * m42;
        const detm21 = m12 * m33 * m44 +
            m13 * m34 * m42 +
            m14 * m32 * m43 -
            m14 * m33 * m42 -
            m13 * m32 * m44 -
            m12 * m34 * m43;
        const detm22 = m11 * m33 * m44 +
            m13 * m34 * m41 +
            m14 * m31 * m43 -
            m14 * m33 * m41 -
            m13 * m31 * m44 -
            m11 * m34 * m43;
        const detm23 = m11 * m32 * m44 +
            m12 * m34 * m41 +
            m14 * m31 * m42 -
            m14 * m32 * m41 -
            m12 * m31 * m44 -
            m11 * m34 * m42;
        const detm24 = m11 * m32 * m43 +
            m12 * m33 * m41 +
            m13 * m31 * m42 -
            m13 * m32 * m41 -
            m12 * m31 * m43 -
            m11 * m33 * m42;
        const detm31 = m12 * m23 * m44 +
            m13 * m24 * m42 +
            m14 * m22 * m43 -
            m14 * m23 * m42 -
            m13 * m22 * m44 -
            m12 * m24 * m43;
        const detm32 = m11 * m23 * m44 +
            m13 * m24 * m41 +
            m14 * m21 * m43 -
            m14 * m23 * m41 -
            m13 * m21 * m44 -
            m11 * m24 * m42;
        const detm33 = m11 * m22 * m44 +
            m12 * m24 * m41 +
            m14 * m21 * m42 -
            m14 * m22 * m41 -
            m12 * m21 * m44 -
            m11 * m24 * m42;
        const detm34 = m11 * m22 * m43 +
            m12 * m23 * m41 +
            m13 * m21 * m42 -
            m13 * m22 * m41 -
            m12 * m21 * m43 -
            m11 * m23 * m42;
        const detm41 = m12 * m23 * m34 +
            m13 * m24 * m32 +
            m14 * m22 * m33 -
            m14 * m23 * m32 -
            m13 * m22 * m34 -
            m12 * m24 * m33;
        const detm42 = m11 * m23 * m34 +
            m13 * m24 * m31 +
            m14 * m21 * m33 -
            m14 * m23 * m31 -
            m13 * m21 * m34 -
            m11 * m24 * m33;
        const detm43 = m11 * m22 * m34 +
            m12 * m24 * m31 +
            m14 * m21 * m32 -
            m14 * m22 * m31 -
            m12 * m21 * m34 -
            m11 * m24 * m32;
        const detm44 = m11 * m22 * m33 +
            m12 * m23 * m31 +
            m13 * m21 * m32 -
            m13 * m22 * m31 -
            m12 * m21 * m33 -
            m11 * m23 * m32;
        const detA = m11 * detm11 - m21 * detm21 + m31 * detm31 - m41 * detm41;
        return new Matrix(new coordinate_1.default((1 / detA) * Math.pow(-1, 2) * detm11, (1 / detA) * Math.pow(-1, 3) * detm21, (1 / detA) * Math.pow(-1, 4) * detm31, (1 / detA) * Math.pow(-1, 5) * detm41), new coordinate_1.default((1 / detA) * Math.pow(-1, 3) * detm12, (1 / detA) * Math.pow(-1, 4) * detm22, (1 / detA) * Math.pow(-1, 5) * detm32, (1 / detA) * Math.pow(-1, 6) * detm42), new coordinate_1.default((1 / detA) * Math.pow(-1, 4) * detm13, (1 / detA) * Math.pow(-1, 5) * detm23, (1 / detA) * Math.pow(-1, 6) * detm33, (1 / detA) * Math.pow(-1, 7) * detm43), new coordinate_1.default((1 / detA) * Math.pow(-1, 5) * detm14, (1 / detA) * Math.pow(-1, 6) * detm24, (1 / detA) * Math.pow(-1, 7) * detm34, (1 / detA) * Math.pow(-1, 8) * detm44));
    }
    transpose() {
        /* Unpack "this" matrix */
        const [a11, a21, a31, a41] = this.a1.getQuadruplet();
        const [a12, a22, a32, a42] = this.a2.getQuadruplet();
        const [a13, a23, a33, a43] = this.a3.getQuadruplet();
        const [a14, a24, a34, a44] = this.a4.getQuadruplet();
        /* Create transpose coordinate */
        const a1 = new coordinate_1.default(a11, a12, a13, a14);
        const a2 = new coordinate_1.default(a21, a22, a23, a24);
        const a3 = new coordinate_1.default(a31, a32, a33, a34);
        const a4 = new coordinate_1.default(a41, a42, a43, a44);
        return new Matrix(a1, a2, a3, a4);
    }
}
exports["default"] = Matrix;


/***/ }),

/***/ "./src/Objects/node.ts":
/*!*****************************!*\
  !*** ./src/Objects/node.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const shape_1 = __importDefault(__webpack_require__(/*! Objects/shape */ "./src/Objects/shape.ts"));
const transformation_1 = __importDefault(__webpack_require__(/*! Operations/transformation */ "./src/Operations/transformation.ts"));
const projection_1 = __importDefault(__webpack_require__(/*! Operations/projection */ "./src/Operations/projection.ts"));
class Node extends shape_1.default {
    constructor(index, children, arrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz) {
        super(arrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz);
        this.index = index;
        this.children = children;
        this.arrayOfFace = arrayOfFace;
        this.tx = tx;
        this.ty = ty;
        this.tz = tz;
        this.angleX = angleX;
        this.angleY = angleY;
        this.angleZ = angleZ;
        this.sx = sx;
        this.sy = sy;
        this.sz = sz;
    }
    findNode(index) {
        if (this.index === index) {
            return this;
        }
        else {
            let result;
            for (const child of this.children) {
                const foundNode = child.findNode(index);
                if (foundNode) {
                    result = foundNode;
                    break;
                }
            }
            return result;
        }
    }
    renderNode(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode, currentWorldMatrix) {
        /* Get Matrix */
        const localMatrix = this.getLocalMatrix();
        /* Initialize with World Matrix */
        let matrix = currentWorldMatrix.multiplyMatrix(localMatrix);
        /* Get Inverse Transpose Matrix */
        const inverseTransposeMatrix = matrix.inverse().transpose();
        /* Add Lookat to Matrix */
        matrix = camera.lookAt().multiplyMatrix(matrix);
        /* Offset Position to Center of Object */
        matrix = transformation_1.default.translation(offsetTranslateX, offsetTranslateY, 0).multiplyMatrix(matrix);
        /* Add Projection to Matrix */
        switch (projectionType) {
            case "orthographic":
                const { left, right, bottom, top, near: nearOrthograpic, far: farOrthographic, } = params;
                matrix = projection_1.default.orthographic(left, right, bottom, top, nearOrthograpic, farOrthographic).multiplyMatrix(matrix);
                break;
            case "perspective":
                const { fieldOfView, aspect, near: nearPerspective, far: farPerspective, } = params;
                matrix = projection_1.default.perspective(fieldOfView, aspect, nearPerspective, farPerspective).multiplyMatrix(matrix);
                break;
            case "oblique":
                const { factor, angle, ortho_left, ortho_right, ortho_bottom, ortho_top, ortho_near, ortho_far, } = params;
                matrix = projection_1.default.oblique(factor, angle, ortho_left, ortho_right, ortho_bottom, ortho_top, ortho_near, ortho_far).multiplyMatrix(matrix);
                break;
        }
        const rawMatrix = matrix.flatten();
        const rawInverseTransposeMatrix = inverseTransposeMatrix.flatten();
        /* Get Ambient Color */
        const rawAmbientColor = ambientColor.getTriplet();
        /* Get Directional Light */
        const rawDirectionalLight = directionalLight.getRawDirection();
        /* Create Program Parameter */
        const programParam = {
            attributes: {
                rawPosition: this.getRawPosition(),
                rawNormal: this.getRawNormal(),
                rawTexture: this.getRawTexture(),
                rawTangent: this.getRawTangent(),
                rawBitangent: this.getRawBitangent(),
            },
            uniforms: {
                rawMatrix,
                rawInverseTransposeMatrix,
                rawAmbientColor,
                rawDirectionalLight,
                shaderStatus,
            },
        };
        /* Count Vertex */
        const count = this.countVertex();
        /* Render */
        renderer.render(programParam, count, mappingMode);
    }
    renderTree(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode, currentWorldMatrix) {
        /* Render Current Node */
        this.renderNode(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode, currentWorldMatrix);
        /* Change World Matrix for Children */
        const childrenWorldMatrix = currentWorldMatrix.multiplyMatrix(this.getLocalMatrix());
        /* Render Children */
        for (const child of this.children) {
            child.renderTree(renderer, projectionType, params, camera, offsetTranslateX, offsetTranslateY, ambientColor, directionalLight, shaderStatus, mappingMode, childrenWorldMatrix);
        }
    }
}
exports["default"] = Node;


/***/ }),

/***/ "./src/Objects/point.ts":
/*!******************************!*\
  !*** ./src/Objects/point.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
class Point extends coordinate_1.default {
    constructor(x, y, z) {
        super(x, y, z, 1);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getTriplet() {
        return [this.x, this.y, this.z];
    }
}
exports["default"] = Point;


/***/ }),

/***/ "./src/Objects/shape.ts":
/*!******************************!*\
  !*** ./src/Objects/shape.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const point_1 = __importDefault(__webpack_require__(/*! Objects/point */ "./src/Objects/point.ts"));
const transformation_1 = __importDefault(__webpack_require__(/*! Operations/transformation */ "./src/Operations/transformation.ts"));
class Shape {
    constructor(arrayOfFace, tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz) {
        this.arrayOfFace = arrayOfFace;
        this.tx = tx;
        this.ty = ty;
        this.tz = tz;
        this.angleX = angleX;
        this.angleY = angleY;
        this.angleZ = angleZ;
        this.sx = sx;
        this.sy = sy;
        this.sz = sz;
    }
    moveX(delta) {
        this.tx = delta;
    }
    moveY(delta) {
        this.ty = delta;
    }
    moveZ(delta) {
        this.tz = delta;
    }
    rotateX(angle) {
        this.angleX = angle;
    }
    rotateY(angle) {
        this.angleY = angle;
    }
    rotateZ(angle) {
        this.angleZ = angle;
    }
    scaleX(delta) {
        this.sx = delta;
    }
    scaleY(delta) {
        this.sy = delta;
    }
    scaleZ(delta) {
        this.sz = delta;
    }
    getRawPosition() {
        const positionArray = this.arrayOfFace.flatMap((f) => f.getRawPosition());
        return new Float32Array(positionArray);
    }
    getRawTexture() {
        const textureArray = this.arrayOfFace.flatMap((f) => f.getRawTexture());
        return new Float32Array(textureArray);
    }
    getRawNormal() {
        const normalArray = this.arrayOfFace.flatMap((f) => Array(f.arrayOfDraw.length)
            .fill(f.findNormal().getTriplet())
            .flat());
        return new Float32Array(normalArray);
    }
    getRawTangent() {
        const tangentArray = this.arrayOfFace.flatMap((f) => Array(f.arrayOfDraw.length)
            .fill(f.findTangents()[0].getTriplet())
            .flat());
        return new Float32Array(tangentArray);
    }
    getRawBitangent() {
        const bitangentArray = this.arrayOfFace.flatMap((f) => Array(f.arrayOfDraw.length)
            .fill(f.findTangents()[1].getTriplet())
            .flat());
        return new Float32Array(bitangentArray);
    }
    countVertex() {
        return this.arrayOfFace.flatMap((f) => f.arrayOfDraw).length;
    }
    getLocalMatrix() {
        const pivot = new point_1.default(0, 0, 0);
        return transformation_1.default.general(this.tx, this.ty, this.tz, this.angleX, this.angleY, this.angleZ, this.sx, this.sy, this.sz, pivot);
    }
}
exports["default"] = Shape;


/***/ }),

/***/ "./src/Objects/texture.ts":
/*!********************************!*\
  !*** ./src/Objects/texture.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Texture {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPair() {
        return [this.x, this.y];
    }
}
exports["default"] = Texture;


/***/ }),

/***/ "./src/Objects/vector.ts":
/*!*******************************!*\
  !*** ./src/Objects/vector.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
const closest_to_zero_1 = __importDefault(__webpack_require__(/*! Constants/closest-to-zero */ "./src/Constants/closest-to-zero.ts"));
class Vector extends coordinate_1.default {
    constructor(x, y, z) {
        super(x, y, z, 0);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getTriplet() {
        return [this.x, this.y, this.z];
    }
    normalize() {
        const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return length < closest_to_zero_1.default
            ? new Vector(0, 0, 0)
            : new Vector(this.x / length, this.y / length, this.z / length);
    }
    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y, this.z - other.z);
    }
    cross(other) {
        return new Vector(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
    }
}
exports["default"] = Vector;


/***/ }),

/***/ "./src/Operations/projection.ts":
/*!**************************************!*\
  !*** ./src/Operations/projection.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const matrix_1 = __importDefault(__webpack_require__(/*! Objects/matrix */ "./src/Objects/matrix.ts"));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
class Projection {
    static orthographic(left, right, bottom, top, near, far) {
        const p1 = new coordinate_1.default(2 / (right - left), 0, 0, 0);
        const p2 = new coordinate_1.default(0, 2 / (top - bottom), 0, 0);
        const p3 = new coordinate_1.default(0, 0, 2 / (near - far), 0);
        const p4 = new coordinate_1.default(-(right + left) / (right - left), -(top + bottom) / (top - bottom), -(far + near) / (far - near), 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static perspective(fieldOfView, aspect, near, far) {
        const f = Math.tan(0.5 * (Math.PI - fieldOfView));
        const w1 = -(far + near) / (far - near);
        const w2 = (-2 * near * far) / (far - near);
        const p1 = new coordinate_1.default(f / aspect, 0, 0, 0);
        const p2 = new coordinate_1.default(0, f, 0, 0);
        const p3 = new coordinate_1.default(0, 0, w1, -1);
        const p4 = new coordinate_1.default(0, 0, w2, 0);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static oblique(factor, angle, ortho_left, ortho_right, ortho_bottom, ortho_top, ortho_near, ortho_far) {
        /* Calculate orthographic projection matrix */
        const pOrtho = Projection.orthographic(ortho_left, ortho_right, ortho_bottom, ortho_top, ortho_near, ortho_far);
        /* Calculate transposed shear projection matrix */
        const cot_angle = 1 / Math.tan(angle);
        const shearX = factor * cot_angle;
        const shearY = factor * -cot_angle;
        const pTrShear1 = new coordinate_1.default(1, 0, 0, 0);
        const pTrShear2 = new coordinate_1.default(0, 1, 0, 0);
        const pTrShear3 = new coordinate_1.default(shearX, shearY, 1, 0);
        const pTrShear4 = new coordinate_1.default(0, 0, 0, 1);
        const pTrShear = new matrix_1.default(pTrShear1, pTrShear2, pTrShear3, pTrShear4);
        /* Calculate oblique projection matrix */
        const obliqueMatrix = pOrtho.multiplyMatrix(pTrShear);
        return obliqueMatrix;
    }
}
exports["default"] = Projection;


/***/ }),

/***/ "./src/Operations/transformation.ts":
/*!******************************************!*\
  !*** ./src/Operations/transformation.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const matrix_1 = __importDefault(__webpack_require__(/*! Objects/matrix */ "./src/Objects/matrix.ts"));
const coordinate_1 = __importDefault(__webpack_require__(/*! Objects/coordinate */ "./src/Objects/coordinate.ts"));
class Transformation {
    static identity() {
        const p1 = new coordinate_1.default(1, 0, 0, 0);
        const p2 = new coordinate_1.default(0, 1, 0, 0);
        const p3 = new coordinate_1.default(0, 0, 1, 0);
        const p4 = new coordinate_1.default(0, 0, 0, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static translation(tx, ty, tz) {
        const p1 = new coordinate_1.default(1, 0, 0, 0);
        const p2 = new coordinate_1.default(0, 1, 0, 0);
        const p3 = new coordinate_1.default(0, 0, 1, 0);
        const p4 = new coordinate_1.default(tx, ty, tz, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static rotationX(angleX) {
        const p1 = new coordinate_1.default(1, 0, 0, 0);
        const p2 = new coordinate_1.default(0, Math.cos(angleX), Math.sin(angleX), 0);
        const p3 = new coordinate_1.default(0, -Math.sin(angleX), Math.cos(angleX), 0);
        const p4 = new coordinate_1.default(0, 0, 0, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static rotationY(angleY) {
        const p1 = new coordinate_1.default(Math.cos(angleY), 0, -Math.sin(angleY), 0);
        const p2 = new coordinate_1.default(0, 1, 0, 0);
        const p3 = new coordinate_1.default(Math.sin(angleY), 0, Math.cos(angleY), 0);
        const p4 = new coordinate_1.default(0, 0, 0, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static rotationZ(angleZ) {
        const p1 = new coordinate_1.default(Math.cos(angleZ), Math.sin(angleZ), 0, 0);
        const p2 = new coordinate_1.default(-Math.sin(angleZ), Math.cos(angleZ), 0, 0);
        const p3 = new coordinate_1.default(0, 0, 1, 0);
        const p4 = new coordinate_1.default(0, 0, 0, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static scale(sx, sy, sz) {
        const p1 = new coordinate_1.default(sx, 0, 0, 0);
        const p2 = new coordinate_1.default(0, sy, 0, 0);
        const p3 = new coordinate_1.default(0, 0, sz, 0);
        const p4 = new coordinate_1.default(0, 0, 0, 1);
        return new matrix_1.default(p1, p2, p3, p4);
    }
    static general(tx, ty, tz, angleX, angleY, angleZ, sx, sy, sz, pivot) {
        return Transformation.translation(tx, ty, tz)
            .multiplyMatrix(Transformation.translation(pivot.x, pivot.y, pivot.z))
            .multiplyMatrix(Transformation.rotationX(angleX))
            .multiplyMatrix(Transformation.rotationY(angleY))
            .multiplyMatrix(Transformation.rotationZ(angleZ))
            .multiplyMatrix(Transformation.scale(sx, sy, sz))
            .multiplyMatrix(Transformation.translation(-pivot.x, -pivot.y, -pivot.z));
    }
}
exports["default"] = Transformation;


/***/ }),

/***/ "./src/Types/animation-type.ts":
/*!*************************************!*\
  !*** ./src/Types/animation-type.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AnimationType;
(function (AnimationType) {
    AnimationType["MOVE_X"] = "moveX";
    AnimationType["MOVE_Y"] = "moveY";
    AnimationType["MOVE_Z"] = "moveZ";
    AnimationType["ROTATE_X"] = "rotateX";
    AnimationType["ROTATE_Y"] = "rotateY";
    AnimationType["ROTATE_Z"] = "rotateZ";
    AnimationType["SCALE_X"] = "scaleX";
    AnimationType["SCALE_Y"] = "scaleY";
    AnimationType["SCALE_Z"] = "scaleZ";
})(AnimationType || (AnimationType = {}));
exports["default"] = AnimationType;


/***/ }),

/***/ "./src/Types/mapping-mode.ts":
/*!***********************************!*\
  !*** ./src/Types/mapping-mode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MappingMode;
(function (MappingMode) {
    MappingMode["TEXTURE"] = "texture";
    MappingMode["ENVIRONMENT"] = "environment";
    MappingMode["BUMP"] = "bump";
})(MappingMode || (MappingMode = {}));
exports["default"] = MappingMode;


/***/ }),

/***/ "./src/Types/shader-status.ts":
/*!************************************!*\
  !*** ./src/Types/shader-status.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ShaderStatus;
(function (ShaderStatus) {
    ShaderStatus[ShaderStatus["OFF"] = 0] = "OFF";
    ShaderStatus[ShaderStatus["ON"] = 1] = "ON";
})(ShaderStatus || (ShaderStatus = {}));
exports["default"] = ShaderStatus;


/***/ }),

/***/ "./src/Utils/angle.ts":
/*!****************************!*\
  !*** ./src/Utils/angle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.radToDeg = exports.degToRad = void 0;
function degToRad(d) {
    return (d * Math.PI) / 180;
}
exports.degToRad = degToRad;
function radToDeg(r) {
    return (r * 180) / Math.PI;
}
exports.radToDeg = radToDeg;


/***/ }),

/***/ "./src/Utils/power.ts":
/*!****************************!*\
  !*** ./src/Utils/power.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isPowerOfTwo(value) {
    return (value & (value - 1)) === 0;
}
exports["default"] = isPowerOfTwo;


/***/ }),

/***/ "./src/Utils/program.ts":
/*!******************************!*\
  !*** ./src/Utils/program.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        throw new Error(`Could not initialize shaders: ${gl.getProgramInfoLog(program)}`);
    }
    return program;
}
exports["default"] = createProgram;


/***/ }),

/***/ "./src/Utils/renderer.ts":
/*!*******************************!*\
  !*** ./src/Utils/renderer.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const mapping_mode_1 = __importDefault(__webpack_require__(/*! Types/mapping-mode */ "./src/Types/mapping-mode.ts"));
const power_1 = __importDefault(__webpack_require__(/*! Utils/power */ "./src/Utils/power.ts"));
class Renderer {
    constructor(gl, program, programInfo, programBuffer) {
        this.gl = gl;
        this.program = program;
        this.programInfo = programInfo;
        this.programBuffer = programBuffer;
    }
    texture(source, width, height) {
        /* Create a Texture */
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        const texImageLevel = 0;
        const texImageInternalFormat = this.gl.RGBA;
        const texImageWidth = width;
        const texImageHeight = height;
        const texImageBorder = 0;
        const texImageFormat = this.gl.RGBA;
        const texImageType = this.gl.UNSIGNED_BYTE;
        // Load texture with opaque blue while waiting for the image to load
        this.gl.texImage2D(this.gl.TEXTURE_2D, texImageLevel, texImageInternalFormat, texImageWidth, texImageHeight, texImageBorder, texImageFormat, texImageType, new Uint8Array([0, 0, 255, 255]));
        const image = new Image();
        image.src = source;
        image.onload = () => {
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
            this.gl.texImage2D(this.gl.TEXTURE_2D, texImageLevel, texImageInternalFormat, texImageFormat, texImageType, image);
            if ((0, power_1.default)(image.width) && (0, power_1.default)(image.height)) {
                this.gl.generateMipmap(this.gl.TEXTURE_2D);
            }
            else {
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            }
        };
    }
    environment(environmentInfo) {
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
            this.gl.texImage2D(target[index], texImageLevel, texImageInternalFormat, texImageWidth, texImageHeight, texImageBorder, texImageFormat, texImageType, null);
            const image = new Image();
            image.src = info.source;
            image.onload = () => {
                this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, texture);
                this.gl.texImage2D(target[index], texImageLevel, texImageInternalFormat, texImageFormat, texImageType, image);
                this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
            };
        });
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
    }
    render(programParam, count, mappingMode) {
        /* Use Program */
        this.gl.useProgram(this.program);
        /* Unpack Program Info */
        const { attribLocations, uniformLocations } = this.programInfo;
        const { positionLocation, normalLocation, texcoordLocation, tangentLocation, bitangentLocation, } = attribLocations;
        const { worldViewProjectionLocation, worldInverseTransposeLocation, ambientLightColorLocation, reverseLightDirectionLocation, shadingLocation, textureLocation, textureEnvLocation, textureModeLocation, } = uniformLocations;
        /* Unpack Program Buffer */
        const { positionBuffer, normalBuffer, textureBuffer, tangentBuffer, bitangentBuffer, } = this.programBuffer;
        /* Unpack Program Parameter */
        const { attributes, uniforms } = programParam;
        const { rawPosition, rawNormal, rawTexture, rawTangent, rawBitangent } = attributes;
        const { rawMatrix, rawInverseTransposeMatrix, rawAmbientColor, rawDirectionalLight, shaderStatus, } = uniforms;
        /* Setup Position Attribute */
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, rawPosition, this.gl.STATIC_DRAW);
        const positionSize = 3; /* 3 components per iteration */
        const positionType = this.gl.FLOAT; /* The data is 32 bit float */
        const positionNormalized = false; /* Don't normalize the data */
        const positionStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
        const positionOffset = 0; /* Start at the beginning of the buffer */
        this.gl.vertexAttribPointer(positionLocation, positionSize, positionType, positionNormalized, positionStride, positionOffset);
        /* Setup Normal Attribute */
        this.gl.enableVertexAttribArray(normalLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, rawNormal, this.gl.STATIC_DRAW);
        const normalSize = 3; /* 3 components per iteration */
        const normalType = this.gl.FLOAT; /* The data is 32 bit float */
        const normalNormalized = false; /* Don't normalize the data */
        const normalStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
        const normalOffset = 0; /* Start at the beginning of the buffer */
        this.gl.vertexAttribPointer(normalLocation, normalSize, normalType, normalNormalized, normalStride, normalOffset);
        /* Setup Texture Attribute */
        this.gl.enableVertexAttribArray(texcoordLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, textureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, rawTexture, this.gl.STATIC_DRAW);
        const textureSize = 2; /* 2 components per iteration */
        const textureType = this.gl.FLOAT; /* The data is 32 bit float */
        const textureNormalized = false; /* Don't normalize the data */
        const textureStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
        const textureOffset = 0; /* Start at the beginning of the buffer */
        this.gl.vertexAttribPointer(texcoordLocation, textureSize, textureType, textureNormalized, textureStride, textureOffset);
        /* Setup Tangent Attribute */
        const tangentSize = 3; /* 3 components per iteration */
        const tangentType = this.gl.FLOAT; /* The data is 32 bit float */
        const tangentNormalized = false; /* Don't normalize the data */
        const tangentStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
        const tangentOffset = 0; /* Start at the beginning of the buffer */
        this.gl.enableVertexAttribArray(tangentLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, tangentBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, rawTangent, this.gl.STATIC_DRAW);
        this.gl.vertexAttribPointer(tangentLocation, tangentSize, tangentType, tangentNormalized, tangentStride, tangentOffset);
        /* Setup Bitangent Attribute */
        const bitangentSize = 3; /* 3 components per iteration */
        const bitangentType = this.gl.FLOAT; /* The data is 32 bit float */
        const bitangentNormalized = false; /* Don't normalize the data */
        const bitangentStride = 0; /* 0: Move forward size * sizeof(type) each iteration to get the next position */
        const bitangentOffset = 0; /* Start at the beginning of the buffer */
        this.gl.enableVertexAttribArray(bitangentLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bitangentBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, rawBitangent, this.gl.STATIC_DRAW);
        this.gl.vertexAttribPointer(bitangentLocation, bitangentSize, bitangentType, bitangentNormalized, bitangentStride, bitangentOffset);
        /* Set World View Projection Uniform */
        this.gl.uniformMatrix4fv(worldViewProjectionLocation, false, rawMatrix);
        /* Set World Inverse Projection Uniform */
        this.gl.uniformMatrix4fv(worldInverseTransposeLocation, false, rawInverseTransposeMatrix);
        /* Set Ambient Color Uniform */
        this.gl.uniform3fv(ambientLightColorLocation, rawAmbientColor);
        /* Set Directional Light Uniform */
        this.gl.uniform3fv(reverseLightDirectionLocation, rawDirectionalLight);
        /* Set Shader Status Uniform */
        this.gl.uniform1i(shadingLocation, shaderStatus);
        switch (mappingMode) {
            case mapping_mode_1.default.TEXTURE:
                /* Set Texture Uniform */
                this.gl.uniform1i(textureLocation, 0);
                this.gl.uniform1i(textureEnvLocation, 1);
                /* Set Texture Mode Uniform */
                this.gl.uniform1i(textureModeLocation, 0);
                break;
            case mapping_mode_1.default.ENVIRONMENT:
                /* Set Texture Uniform */
                this.gl.uniform1i(textureLocation, 1);
                this.gl.uniform1i(textureEnvLocation, 0);
                /* Set Texture Mode Uniform */
                this.gl.uniform1i(textureModeLocation, 1);
                break;
            case mapping_mode_1.default.BUMP:
                /* Set Texture Uniform */
                this.gl.uniform1i(textureLocation, 0);
                this.gl.uniform1i(textureEnvLocation, 1);
                /* Set Texture Mode Uniform */
                this.gl.uniform1i(textureModeLocation, 2);
                break;
        }
        /* Draw Shape */
        const primitiveType = this.gl.TRIANGLES;
        const offset = 0;
        this.gl.drawArrays(primitiveType, offset, count);
    }
}
exports["default"] = Renderer;


/***/ }),

/***/ "./src/Utils/resize-canvas.ts":
/*!************************************!*\
  !*** ./src/Utils/resize-canvas.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function resizeCanvasToDisplaySize(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;
}
exports["default"] = resizeCanvasToDisplaySize;


/***/ }),

/***/ "./src/Utils/shader.ts":
/*!*****************************!*\
  !*** ./src/Utils/shader.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        throw new Error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
    }
    return shader;
}
exports["default"] = createShader;


/***/ }),

/***/ "./src/default-ambient-color.ts":
/*!**************************************!*\
  !*** ./src/default-ambient-color.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const color_1 = __importDefault(__webpack_require__(/*! Objects/color */ "./src/Objects/color.ts"));
function generateDefaultAmbientColor() {
    return new color_1.default(0.5, 0.5, 0.5);
}
exports["default"] = generateDefaultAmbientColor;


/***/ }),

/***/ "./src/default-array-of-face.ts":
/*!**************************************!*\
  !*** ./src/default-array-of-face.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const face_1 = __importDefault(__webpack_require__(/*! Objects/face */ "./src/Objects/face.ts"));
const point_1 = __importDefault(__webpack_require__(/*! Objects/point */ "./src/Objects/point.ts"));
const texture_1 = __importDefault(__webpack_require__(/*! Objects/texture */ "./src/Objects/texture.ts"));
const draw_1 = __importDefault(__webpack_require__(/*! Objects/draw */ "./src/Objects/draw.ts"));
function generateDefaultArrayOfFace() {
    return [
        // Front Face
        new face_1.default([
            new draw_1.default(new point_1.default(-25, 25, 25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(-25, -25, 25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(25, -25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, 25, 25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, -25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(25, 25, 25), new texture_1.default(0, 1)),
        ]),
        // Back Face
        new face_1.default([
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(-25, 25, -25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(25, 25, -25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, 25, -25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(25, -25, -25), new texture_1.default(0, 1)),
        ]),
        // Top Face
        new face_1.default([
            new draw_1.default(new point_1.default(-25, 25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(-25, 25, 25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, 25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(25, 25, -25), new texture_1.default(0, 1)),
        ]),
        // Bottom face
        new face_1.default([
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, -25, -25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(25, -25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, -25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, -25, 25), new texture_1.default(0, 1)),
        ]),
        // Right face
        new face_1.default([
            new draw_1.default(new point_1.default(25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, 25, -25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(25, -25, 25), new texture_1.default(0, 1)),
        ]),
        // Left face
        new face_1.default([
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(-25, -25, 25), new texture_1.default(1, 0)),
            new draw_1.default(new point_1.default(-25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, -25, -25), new texture_1.default(0, 0)),
            new draw_1.default(new point_1.default(-25, 25, 25), new texture_1.default(1, 1)),
            new draw_1.default(new point_1.default(-25, 25, -25), new texture_1.default(0, 1)),
        ]),
    ];
}
exports["default"] = generateDefaultArrayOfFace;


/***/ }),

/***/ "./src/default-articulated.ts":
/*!************************************!*\
  !*** ./src/default-articulated.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const articulated_1 = __importDefault(__webpack_require__(/*! Objects/articulated */ "./src/Objects/articulated.ts"));
const node_1 = __importDefault(__webpack_require__(/*! Objects/node */ "./src/Objects/node.ts"));
const animation_1 = __importDefault(__webpack_require__(/*! Objects/animation */ "./src/Objects/animation.ts"));
const lambda_1 = __importDefault(__webpack_require__(/*! Objects/lambda */ "./src/Objects/lambda.ts"));
const animation_type_1 = __importDefault(__webpack_require__(/*! Types/animation-type */ "./src/Types/animation-type.ts"));
const default_array_of_face_1 = __importDefault(__webpack_require__(/*! Main/default-array-of-face */ "./src/default-array-of-face.ts"));
function generateDefaultArticulated() {
    return new articulated_1.default(new node_1.default("root", [
        new node_1.default("point-between-feet", [
            new node_1.default("waist", [
                new node_1.default("torso", [
                    new node_1.default("neck", [
                        new node_1.default("head", [], (0, default_array_of_face_1.default)(), 0, -50, 0, 0, 0, 0, 1, 1, 1),
                    ], (0, default_array_of_face_1.default)(), 0, -50, 0, 0, 0, 0, 1, 1, 1),
                    new node_1.default("left-arm", [
                        new node_1.default("left-forearm", [
                            new node_1.default("left-hand", [], (0, default_array_of_face_1.default)(), -50, 0, 0, 0, 0, 0, 1, 1, 1),
                        ], (0, default_array_of_face_1.default)(), -50, 0, 0, 0, 0, 0, 1, 1, 1),
                    ], (0, default_array_of_face_1.default)(), -50, 0, 0, 0, 0, 0, 1, 1, 1),
                    new node_1.default("right-arm", [
                        new node_1.default("right-forearm", [
                            new node_1.default("right-hand", [], (0, default_array_of_face_1.default)(), 50, 0, 0, 0, 0, 0, 1, 1, 1),
                        ], (0, default_array_of_face_1.default)(), 50, 0, 0, 0, 0, 0, 1, 1, 1),
                    ], (0, default_array_of_face_1.default)(), 50, 0, 0, 0, 0, 0, 1, 1, 1),
                ], (0, default_array_of_face_1.default)(), 0, -100, 0, 0, 0, 0, 1, 1, 1),
                new node_1.default("left-leg", [
                    new node_1.default("left-calf", [
                        new node_1.default("left-foot", [], (0, default_array_of_face_1.default)(), 0, 50, 0, 0, 0, 0, 1, 1, 1),
                    ], (0, default_array_of_face_1.default)(), 0, 50, 0, 0, 0, 0, 1, 1, 1),
                ], (0, default_array_of_face_1.default)(), -50, 50, 0, 0, 0, 0, 1, 1, 1),
                new node_1.default("right-leg", [
                    new node_1.default("right-calf", [
                        new node_1.default("right-foot", [], (0, default_array_of_face_1.default)(), 0, 50, 0, 0, 0, 0, 1, 1, 1),
                    ], (0, default_array_of_face_1.default)(), 0, 50, 0, 0, 0, 0, 1, 1, 1),
                ], (0, default_array_of_face_1.default)(), 50, 50, 0, 0, 0, 0, 1, 1, 1),
            ], (0, default_array_of_face_1.default)(), 0, -150, 0, 0, 0, 0, 1, 1, 1),
        ], [], 0, 0, 0, 0, 0, 0, 1, 1, 1),
    ], [], 0, 0, 0, 0, 0, 0, 1, 1, 1), [
        new animation_1.default("point-between-feet", animation_type_1.default.MOVE_Y, new lambda_1.default("(c) => -50 * Math.abs(Math.sin(c))")),
        new animation_1.default("left-leg", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => Math.sin(c)")),
        new animation_1.default("right-leg", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => -Math.sin(c)")),
        new animation_1.default("left-calf", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => -Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("right-calf", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("left-foot", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => -Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("right-foot", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("left-arm", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c) * 0.4")),
        new animation_1.default("right-arm", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c) * 0.4")),
        new animation_1.default("left-forearm", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("right-forearm", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c + 0.1) * 0.4")),
        new animation_1.default("left-hand", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c - 0.1) * 0.4")),
        new animation_1.default("right-hand", animation_type_1.default.ROTATE_Z, new lambda_1.default("(c) => Math.sin(c - 0.1) * 0.4")),
        new animation_1.default("waist", animation_type_1.default.ROTATE_Y, new lambda_1.default("(c) => Math.sin(c) * 0.4")),
        new animation_1.default("torso", animation_type_1.default.ROTATE_Y, new lambda_1.default("(c) => Math.sin(c) * 0.4")),
        new animation_1.default("neck", animation_type_1.default.ROTATE_Y, new lambda_1.default("(c) => Math.sin(c + 0.25) * 0.4")),
        new animation_1.default("head", animation_type_1.default.ROTATE_X, new lambda_1.default("(c) => Math.sin(c * 2) * 0.2")),
        new animation_1.default("head", animation_type_1.default.ROTATE_Y, new lambda_1.default("(c) => Math.sin(c + 0.5) * 0.4")),
    ]);
}
exports["default"] = generateDefaultArticulated;


/***/ }),

/***/ "./src/default-camera.ts":
/*!*******************************!*\
  !*** ./src/default-camera.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const camera_1 = __importDefault(__webpack_require__(/*! Objects/camera */ "./src/Objects/camera.ts"));
const angle_1 = __webpack_require__(/*! Utils/angle */ "./src/Utils/angle.ts");
const point_1 = __importDefault(__webpack_require__(/*! Objects/point */ "./src/Objects/point.ts"));
function generateDefaultCamera() {
    return new camera_1.default(500, (0, angle_1.degToRad)(0), new point_1.default(0, 0, 0));
}
exports["default"] = generateDefaultCamera;


/***/ }),

/***/ "./src/default-directional-light.ts":
/*!******************************************!*\
  !*** ./src/default-directional-light.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const light_1 = __importDefault(__webpack_require__(/*! Objects/light */ "./src/Objects/light.ts"));
function generateDefaultDirectionalLight() {
    return new light_1.default(0, 0, 1);
}
exports["default"] = generateDefaultDirectionalLight;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const shader_1 = __importDefault(__webpack_require__(/*! Utils/shader */ "./src/Utils/shader.ts"));
const program_1 = __importDefault(__webpack_require__(/*! Utils/program */ "./src/Utils/program.ts"));
const angle_1 = __webpack_require__(/*! Utils/angle */ "./src/Utils/angle.ts");
const resize_canvas_1 = __importDefault(__webpack_require__(/*! Utils/resize-canvas */ "./src/Utils/resize-canvas.ts"));
const renderer_1 = __importDefault(__webpack_require__(/*! Utils/renderer */ "./src/Utils/renderer.ts"));
const shader_status_1 = __importDefault(__webpack_require__(/*! Types/shader-status */ "./src/Types/shader-status.ts"));
const mapping_mode_1 = __importDefault(__webpack_require__(/*! Types/mapping-mode */ "./src/Types/mapping-mode.ts"));
const file_handling_1 = __importDefault(__webpack_require__(/*! Files/file-handling */ "./src/Files/file-handling.ts"));
const file_system_1 = __importDefault(__webpack_require__(/*! Files/file-system */ "./src/Files/file-system.ts"));
const default_camera_1 = __importDefault(__webpack_require__(/*! Main/default-camera */ "./src/default-camera.ts"));
const default_ambient_color_1 = __importDefault(__webpack_require__(/*! Main/default-ambient-color */ "./src/default-ambient-color.ts"));
const default_directional_light_1 = __importDefault(__webpack_require__(/*! Main/default-directional-light */ "./src/default-directional-light.ts"));
const default_articulated_1 = __importDefault(__webpack_require__(/*! Main/default-articulated */ "./src/default-articulated.ts"));
const transformation_1 = __importDefault(__webpack_require__(/*! Operations/transformation */ "./src/Operations/transformation.ts"));
/* Get Vertex dan Fragment Source */
const vertexShaderElement = document.getElementById("vertex-shader");
const fragmentShaderElement = document.getElementById("fragment-shader");
const vertexShaderSource = vertexShaderElement.textContent;
const fragmentShaderSource = fragmentShaderElement.textContent;
/* Main Canvas */
const mainCanvas = document.getElementById("main-canvas");
const mainGL = mainCanvas.getContext("webgl");
/* Setup Main Canvas Viewport */
(0, resize_canvas_1.default)(mainGL.canvas);
mainGL.viewport(0, 0, mainGL.canvas.width, mainGL.canvas.height);
/* Clear Main Canvas Color and Buffer */
mainGL.clear(mainGL.COLOR_BUFFER_BIT | mainGL.DEPTH_BUFFER_BIT);
/* Turn On Main Canvas Culling */
mainGL.enable(mainGL.CULL_FACE);
/* Enable the Depth Buffer in Main Canvas */
mainGL.enable(mainGL.DEPTH_TEST);
/* Add Vertex and Fragment Shader in Main Canvas */
const mainVertexShader = (0, shader_1.default)(mainGL, mainGL.VERTEX_SHADER, vertexShaderSource);
const mainFragmentShader = (0, shader_1.default)(mainGL, mainGL.FRAGMENT_SHADER, fragmentShaderSource);
/* Setup Main Program */
const mainProgram = (0, program_1.default)(mainGL, mainVertexShader, mainFragmentShader);
/* Setup Main Program Info */
const mainProgramInfo = {
    attribLocations: {
        positionLocation: mainGL.getAttribLocation(mainProgram, "a_position"),
        normalLocation: mainGL.getAttribLocation(mainProgram, "a_normal"),
        texcoordLocation: mainGL.getAttribLocation(mainProgram, "a_texcoord"),
        tangentLocation: mainGL.getAttribLocation(mainProgram, "a_vertextangent"),
        bitangentLocation: mainGL.getAttribLocation(mainProgram, "a_vertexbitangent"),
    },
    uniformLocations: {
        worldViewProjectionLocation: mainGL.getUniformLocation(mainProgram, "u_worldViewProjection"),
        worldInverseTransposeLocation: mainGL.getUniformLocation(mainProgram, "u_worldInverseTranspose"),
        ambientLightColorLocation: mainGL.getUniformLocation(mainProgram, "u_ambientLightColor"),
        reverseLightDirectionLocation: mainGL.getUniformLocation(mainProgram, "u_reverseLightDirection"),
        shadingLocation: mainGL.getUniformLocation(mainProgram, "u_shading"),
        textureLocation: mainGL.getUniformLocation(mainProgram, "u_texture"),
        textureEnvLocation: mainGL.getUniformLocation(mainProgram, "u_texture_env"),
        textureModeLocation: mainGL.getUniformLocation(mainProgram, "u_texture_mode"),
    },
};
/* Setup Main Program Buffer */
const mainProgramBuffer = {
    positionBuffer: mainGL.createBuffer(),
    normalBuffer: mainGL.createBuffer(),
    textureBuffer: mainGL.createBuffer(),
    tangentBuffer: mainGL.createBuffer(),
    bitangentBuffer: mainGL.createBuffer(),
};
/* Setup Main Renderer */
const mainRenderer = new renderer_1.default(mainGL, mainProgram, mainProgramInfo, mainProgramBuffer);
/* Secondary Canvas */
const secondaryCanvas = document.getElementById("secondary-canvas");
const secondaryGL = secondaryCanvas.getContext("webgl");
/* Setup Secondary Canvas Viewport */
(0, resize_canvas_1.default)(secondaryGL.canvas);
secondaryGL.viewport(0, 0, secondaryGL.canvas.width, secondaryGL.canvas.height);
/* Clear Secondary Canvas Color and Buffer */
secondaryGL.clear(secondaryGL.COLOR_BUFFER_BIT | secondaryGL.DEPTH_BUFFER_BIT);
/* Turn On Secondary Canvas Culling */
secondaryGL.enable(secondaryGL.CULL_FACE);
/* Enable the Depth Buffer in Secondary Canvas */
secondaryGL.enable(secondaryGL.DEPTH_TEST);
/* Add Vertex and Fragment Shader in Secondary Canvas */
const secondaryVertexShader = (0, shader_1.default)(secondaryGL, secondaryGL.VERTEX_SHADER, vertexShaderSource);
const secondaryFragmentShader = (0, shader_1.default)(secondaryGL, secondaryGL.FRAGMENT_SHADER, fragmentShaderSource);
/* Setup Secondary Program */
const secondaryProgram = (0, program_1.default)(secondaryGL, secondaryVertexShader, secondaryFragmentShader);
/* Setup Secondary Program Info */
const secondaryProgramInfo = {
    attribLocations: {
        positionLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_position"),
        normalLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_normal"),
        texcoordLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_texcoord"),
        tangentLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_vertextangent"),
        bitangentLocation: secondaryGL.getAttribLocation(secondaryProgram, "a_vertexbitangent"),
    },
    uniformLocations: {
        worldViewProjectionLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_worldViewProjection"),
        worldInverseTransposeLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_worldInverseTranspose"),
        ambientLightColorLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_ambientLightColor"),
        reverseLightDirectionLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_reverseLightDirection"),
        shadingLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_shading"),
        textureLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_texture"),
        textureEnvLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_texture_env"),
        textureModeLocation: secondaryGL.getUniformLocation(secondaryProgram, "u_texture_mode"),
    },
};
/* Setup Secondary Program Buffer */
const secondaryProgramBuffer = {
    positionBuffer: secondaryGL.createBuffer(),
    normalBuffer: secondaryGL.createBuffer(),
    textureBuffer: secondaryGL.createBuffer(),
    tangentBuffer: secondaryGL.createBuffer(),
    bitangentBuffer: secondaryGL.createBuffer(),
};
/* Setup Secondary Renderer */
const secondaryRenderer = new renderer_1.default(secondaryGL, secondaryProgram, secondaryProgramInfo, secondaryProgramBuffer);
/* Get HTML Element */
/* Main Canvas Control */
const sliderTranslateX = document.getElementById("slider-translate-x");
const labelTranslateX = document.getElementById("label-translate-x");
const sliderTranslateY = document.getElementById("slider-translate-y");
const labelTranslateY = document.getElementById("label-translate-y");
const sliderTranslateZ = document.getElementById("slider-translate-z");
const labelTranslateZ = document.getElementById("label-translate-z");
const sliderAngleX = document.getElementById("slider-angle-x");
const labelAngleX = document.getElementById("label-angle-x");
const sliderAngleY = document.getElementById("slider-angle-y");
const labelAngleY = document.getElementById("label-angle-y");
const sliderAngleZ = document.getElementById("slider-angle-z");
const labelAngleZ = document.getElementById("label-angle-z");
const sliderScaleX = document.getElementById("slider-scale-x");
const labelScaleX = document.getElementById("label-scale-x");
const sliderScaleY = document.getElementById("slider-scale-y");
const labelScaleY = document.getElementById("label-scale-y");
const sliderScaleZ = document.getElementById("slider-scale-z");
const labelScaleZ = document.getElementById("label-scale-z");
/* Camera Control Elements */
const sliderCamAngle = document.getElementById("slider-cam-angle");
const labelCamAngle = document.getElementById("label-cam-angle");
const sliderCamRadius = document.getElementById("slider-cam-radius");
const labelCamRadius = document.getElementById("label-cam-radius");
/* Secondary Canvas Control */
/* Get HTML Element */
const sliderTranslateShapeX = document.getElementById("slider-translate-shape-x");
const labelTranslateShapeX = document.getElementById("label-translate-shape-x");
const sliderTranslateShapeY = document.getElementById("slider-translate-shape-y");
const labelTranslateShapeY = document.getElementById("label-translate-shape-y");
const sliderTranslateShapeZ = document.getElementById("slider-translate-shape-z");
const labelTranslateShapeZ = document.getElementById("label-translate-shape-z");
const sliderAngleShapeX = document.getElementById("slider-angle-shape-x");
const labelAngleShapeX = document.getElementById("label-angle-shape-x");
const sliderAngleShapeY = document.getElementById("slider-angle-shape-y");
const labelAngleShapeY = document.getElementById("label-angle-shape-y");
const sliderAngleShapeZ = document.getElementById("slider-angle-shape-z");
const labelAngleShapeZ = document.getElementById("label-angle-shape-z");
const sliderScaleShapeX = document.getElementById("slider-scale-shape-x");
const labelScaleShapeX = document.getElementById("label-scale-shape-x");
const sliderScaleShapeY = document.getElementById("slider-scale-shape-y");
const labelScaleShapeY = document.getElementById("label-scale-shape-y");
const sliderScaleShapeZ = document.getElementById("slider-scale-shape-z");
const labelScaleShapeZ = document.getElementById("label-scale-shape-z");
const sliderCamAngleShape = document.getElementById("slider-cam-angle-shape");
const labelCamAngleShape = document.getElementById("label-cam-angle-shape");
const sliderCamRadiusShape = document.getElementById("slider-cam-radius-shape");
const labelCamRadiusShape = document.getElementById("label-cam-radius-shape");
const listOfProjection = document.getElementById("list-of-projection");
const listOfMapping = document.getElementById("list-of-mapping");
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
let articulated;
let selectedNode;
let camera;
let cameraShape;
let ambientColor;
let directionalLight;
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
let projectionType = "orthographic";
let projectionParams = {
    orthographic: {
        left: 0,
        right: mainGL.canvas.clientWidth,
        bottom: mainGL.canvas.clientHeight,
        top: 0,
        near: 2000,
        far: -2000,
    },
    perspective: {
        fieldOfView: (0, angle_1.degToRad)(60),
        aspect: mainGL.canvas.clientWidth /
            mainGL.canvas.clientHeight,
        near: 1,
        far: 2000,
    },
    oblique: {
        factor: 0.1,
        angle: (0, angle_1.degToRad)(15),
        ortho_left: 0,
        ortho_right: mainGL.canvas.clientWidth,
        ortho_bottom: mainGL.canvas.clientHeight,
        ortho_top: 0,
        ortho_near: 2000,
        ortho_far: -2000,
    },
};
let projectionParamsSecondary = {
    orthographic: {
        left: 0,
        right: secondaryGL.canvas.clientWidth,
        bottom: secondaryGL.canvas.clientHeight,
        top: 0,
        near: 2000,
        far: -2000,
    },
    perspective: {
        fieldOfView: (0, angle_1.degToRad)(60),
        aspect: secondaryGL.canvas.clientWidth /
            secondaryGL.canvas.clientHeight,
        near: 1,
        far: 2000,
    },
    oblique: {
        factor: 0.1,
        angle: (0, angle_1.degToRad)(15),
        ortho_left: 0,
        ortho_right: secondaryGL.canvas.clientWidth,
        ortho_bottom: secondaryGL.canvas.clientHeight,
        ortho_top: 0,
        ortho_near: 2000,
        ortho_far: -2000,
    },
};
let shaderStatus = shader_status_1.default.OFF;
let animation = false;
let mappingMode = mapping_mode_1.default.TEXTURE;
/* Global Constant */
const animationSpeed = 1.2;
/* Render Main Canvas */
const renderMainCanvas = (now) => {
    /* Convent to Second */
    now *= 0.005;
    /* Animate */
    if (animation) {
        const c = animationSpeed * now;
        articulated.applyAnimation(c);
    }
    /* Get Current Light */
    const currentLight = projectionType === "perspective"
        ? directionalLight.reverse()
        : directionalLight;
    /* Render Articulated */
    articulated.renderTree(mainRenderer, projectionType, projectionParams[projectionType], camera, offsetTranslate[projectionType].x, offsetTranslate[projectionType].y, ambientColor, currentLight, shaderStatus, mappingMode);
    if (selectedNode != null) {
        selectedNode.renderTree(secondaryRenderer, projectionType, projectionParamsSecondary[projectionType], cameraShape, offsetTranslateSecondaryCanvas[projectionType].x, offsetTranslateSecondaryCanvas[projectionType].y, ambientColor, currentLight, shaderStatus, mappingMode, transformation_1.default.identity());
    }
    /* Render Recursively */
    window.requestAnimationFrame(renderMainCanvas);
};
/* Initialize Default Value */
const initializeDefaultValue = (newArticulated, newCamera, newCameraShape, newAmbientColor, newDirectionalLight) => {
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
    sliderAngleX.valueAsNumber = Math.round((0, angle_1.radToDeg)(articulated.root.angleX));
    labelAngleX.textContent = Math.round((0, angle_1.radToDeg)(articulated.root.angleX)).toString();
    sliderAngleY.valueAsNumber = Math.round((0, angle_1.radToDeg)(articulated.root.angleY));
    labelAngleY.textContent = Math.round((0, angle_1.radToDeg)(articulated.root.angleY)).toString();
    sliderAngleZ.valueAsNumber = Math.round((0, angle_1.radToDeg)(articulated.root.angleZ));
    labelAngleZ.textContent = Math.round((0, angle_1.radToDeg)(articulated.root.angleZ)).toString();
    sliderScaleX.valueAsNumber = articulated.root.sx;
    labelScaleX.textContent = articulated.root.sx.toString();
    sliderScaleY.valueAsNumber = articulated.root.sy;
    labelScaleY.textContent = articulated.root.sy.toString();
    sliderScaleZ.valueAsNumber = articulated.root.sz;
    labelScaleZ.textContent = articulated.root.sz.toString();
    sliderCamAngle.valueAsNumber = (0, angle_1.radToDeg)(camera.angle);
    labelCamAngle.textContent = (0, angle_1.radToDeg)(camera.angle).toString();
    sliderCamRadius.valueAsNumber = camera.radius;
    labelCamRadius.textContent = camera.radius.toString();
    sliderCamAngleShape.valueAsNumber = (0, angle_1.radToDeg)(cameraShape.angle);
    labelCamAngleShape.textContent = (0, angle_1.radToDeg)(cameraShape.angle).toString();
    sliderCamRadiusShape.valueAsNumber = cameraShape.radius;
    labelCamRadiusShape.textContent = cameraShape.radius.toString();
    shadingModeButton.textContent = "ON";
    shadingModeButton.classList.add("active");
    shaderStatus = shader_status_1.default.ON;
    animationModeButton.textContent = "ON";
    animationModeButton.classList.add("active");
    animation = true;
    mainRenderer.texture("images/wood.png", 1, 1);
    secondaryRenderer.texture("images/wood.png", 1, 1);
};
/* Component Tree */
const addComponentTree = (componentTree, root, margin_left = 0) => {
    const button = document.createElement("button");
    button.textContent = root.index;
    button.addEventListener("click", (event) => {
        const textContent = event.target.textContent;
        selectedNode = articulated.findNode(textContent);
        sliderTranslateShapeX.valueAsNumber = selectedNode.tx;
        labelTranslateShapeX.textContent = selectedNode.tx.toString();
        sliderTranslateShapeY.valueAsNumber = selectedNode.ty;
        labelTranslateShapeY.textContent = selectedNode.ty.toString();
        sliderTranslateShapeZ.valueAsNumber = selectedNode.tz;
        labelTranslateShapeZ.textContent = selectedNode.tz.toString();
        sliderAngleShapeX.valueAsNumber = Math.round((0, angle_1.radToDeg)(selectedNode.angleX));
        labelAngleShapeX.textContent = Math.round((0, angle_1.radToDeg)(selectedNode.angleX)).toString();
        sliderAngleShapeY.valueAsNumber = Math.round((0, angle_1.radToDeg)(selectedNode.angleY));
        labelAngleShapeY.textContent = Math.round((0, angle_1.radToDeg)(selectedNode.angleY)).toString();
        sliderAngleShapeZ.valueAsNumber = Math.round((0, angle_1.radToDeg)(selectedNode.angleZ));
        labelAngleShapeZ.textContent = Math.round((0, angle_1.radToDeg)(selectedNode.angleZ)).toString();
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
const clearComponentTree = (componentTree) => {
    while (componentTree.firstChild) {
        componentTree.removeChild(componentTree.firstChild);
    }
};
/* Event Listener */
sliderTranslateX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateX.textContent = delta.toString();
    articulated.root.moveX(delta);
});
sliderTranslateY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateY.textContent = delta.toString();
    articulated.root.moveY(delta);
});
sliderTranslateZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateZ.textContent = delta.toString();
    articulated.root.moveZ(delta);
});
sliderAngleX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleX.textContent = delta.toString();
    articulated.root.rotateX((0, angle_1.degToRad)(delta));
});
sliderAngleY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleY.textContent = delta.toString();
    articulated.root.rotateY((0, angle_1.degToRad)(delta));
});
sliderAngleZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleZ.textContent = delta.toString();
    articulated.root.rotateZ((0, angle_1.degToRad)(delta));
});
sliderScaleX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleX.textContent = delta.toString();
    articulated.root.scaleX(delta);
});
sliderScaleY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleY.textContent = delta.toString();
    articulated.root.scaleY(delta);
});
sliderScaleZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleZ.textContent = delta.toString();
    articulated.root.scaleZ(delta);
});
sliderTranslateShapeX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateShapeX.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.moveX(delta);
    }
});
sliderTranslateShapeY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateShapeY.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.moveY(delta);
    }
});
sliderTranslateShapeZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelTranslateShapeZ.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.moveZ(delta);
    }
});
sliderAngleShapeX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleShapeX.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.rotateX((0, angle_1.degToRad)(delta));
    }
});
sliderAngleShapeY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleShapeY.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.rotateY((0, angle_1.degToRad)(delta));
    }
});
sliderAngleShapeZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelAngleShapeZ.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.rotateZ((0, angle_1.degToRad)(delta));
    }
});
sliderScaleShapeX.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleShapeX.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.scaleX(delta);
    }
});
sliderScaleShapeY.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleShapeY.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.scaleY(delta);
    }
});
sliderScaleShapeZ.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelScaleShapeZ.textContent = delta.toString();
    if (selectedNode != null) {
        selectedNode.scaleZ(delta);
    }
});
listOfProjection.addEventListener("change", () => {
    const newProjectionType = listOfProjection.selectedOptions[0]
        .value;
    projectionType = newProjectionType;
});
listOfMapping.addEventListener("change", () => {
    const newMapping = listOfMapping.selectedOptions[0].value;
    mappingMode = newMapping;
    switch (mappingMode) {
        case mapping_mode_1.default.TEXTURE:
            mainRenderer.texture("images/wood.png", 1, 1);
            secondaryRenderer.texture("images/wood.png", 1, 1);
            break;
        case mapping_mode_1.default.ENVIRONMENT:
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
        case mapping_mode_1.default.BUMP:
            mainRenderer.texture("images/bumped.png", 1, 1);
            secondaryRenderer.texture("images/bumped.png", 1, 1);
            break;
    }
});
/* Camera Control Listener */
sliderCamAngle.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelCamAngle.textContent = delta.toString();
    camera.rotate((0, angle_1.degToRad)(delta));
});
sliderCamRadius.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelCamRadius.textContent = delta.toString();
    camera.radius = delta;
});
sliderCamAngleShape.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelCamAngleShape.textContent = delta.toString();
    cameraShape.rotate((0, angle_1.degToRad)(delta));
});
sliderCamRadiusShape.addEventListener("input", (event) => {
    const delta = event.target.valueAsNumber;
    labelCamRadiusShape.textContent = delta.toString();
    cameraShape.radius = delta;
});
loadButton.addEventListener("click", () => {
    file_handling_1.default.upload((text) => {
        initializeDefaultValue(file_system_1.default.loadArticulated(text), (0, default_camera_1.default)(), (0, default_camera_1.default)(), (0, default_ambient_color_1.default)(), (0, default_directional_light_1.default)());
        clearComponentTree(componentTree);
        addComponentTree(componentTree, articulated.root);
    });
});
saveButton.addEventListener("click", () => {
    file_handling_1.default.download(file_system_1.default.serializeArticulated(articulated));
});
/* Shading and Animation */
shadingModeButton.addEventListener("click", () => {
    if (shaderStatus === shader_status_1.default.OFF) {
        shadingModeButton.classList.add("active");
        shadingModeButton.textContent = "ON";
        shaderStatus = shader_status_1.default.ON;
    }
    else {
        shadingModeButton.classList.remove("active");
        shadingModeButton.textContent = "OFF";
        shaderStatus = shader_status_1.default.OFF;
    }
});
animationModeButton.addEventListener("click", () => {
    if (!animation) {
        animationModeButton.classList.add("active");
        animationModeButton.textContent = "ON";
        animation = true;
    }
    else {
        animationModeButton.classList.remove("active");
        animationModeButton.textContent = "OFF";
        animation = false;
    }
});
/* Reset State */
resetButton.addEventListener("click", () => {
    initializeDefaultValue((0, default_articulated_1.default)(), (0, default_camera_1.default)(), (0, default_camera_1.default)(), (0, default_ambient_color_1.default)(), (0, default_directional_light_1.default)());
    clearComponentTree(componentTree);
    addComponentTree(componentTree, articulated.root);
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
    initializeDefaultValue((0, default_articulated_1.default)(), (0, default_camera_1.default)(), (0, default_camera_1.default)(), (0, default_ambient_color_1.default)(), (0, default_directional_light_1.default)());
    clearComponentTree(componentTree);
    addComponentTree(componentTree, articulated.root);
    window.requestAnimationFrame(renderMainCanvas);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3Qiw4QkFBOEI7UUFDOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVB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Q3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRCLHVDQUF1QztRQUN2QyxNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQixNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBRXZFLE9BQU8sSUFBSSxNQUFNLENBQ2YsSUFBSSxvQkFBVSxDQUNaLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUN0QyxFQUNELElBQUksb0JBQVUsQ0FDWixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FDdEMsRUFDRCxJQUFJLG9CQUFVLENBQ1osQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQ3RDLEVBQ0QsSUFBSSxvQkFBVSxDQUNaLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUN0QyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sU0FBUztRQUNkLDBCQUEwQjtRQUMxQixNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxD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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFB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RUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRCxDQUFDO1FBQ0YsV0FBVztRQUNYLElBQUksY0FBSSxDQUFDO1lBQ1AsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxp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VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0NvbnN0YW50cy9jbG9zZXN0LXRvLXplcm8udHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvYW5pbWF0aW9uLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvYXJ0aWN1bGF0ZWQtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZhY3Rvcmllcy9kcmF3LWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvZmFjZS1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL2xhbWJkYS1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL25vZGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZhY3Rvcmllcy9wb2ludC1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL3RleHR1cmUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZpbGVzL2ZpbGUtaGFuZGxpbmcudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GaWxlcy9maWxlLXN5c3RlbS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9hcnRpY3VsYXRlZC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvY2FtZXJhLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9jb2xvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvY29vcmRpbmF0ZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvZHJhdy50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvZmFjZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvbGFtYmRhLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9saWdodC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvbWF0cml4LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9ub2RlLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9wb2ludC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9PYmplY3RzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9PYmplY3RzL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09wZXJhdGlvbnMvcHJvamVjdGlvbi50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09wZXJhdGlvbnMvdHJhbnNmb3JtYXRpb24udHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9UeXBlcy9hbmltYXRpb24tdHlwZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1R5cGVzL21hcHBpbmctbW9kZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1R5cGVzL3NoYWRlci1zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9VdGlscy9hbmdsZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3Bvd2VyLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvVXRpbHMvcHJvZ3JhbS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvVXRpbHMvcmVzaXplLWNhbnZhcy50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3NoYWRlci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYW1iaWVudC1jb2xvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYXJyYXktb2YtZmFjZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYXJ0aWN1bGF0ZWQudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9kZWZhdWx0LWNhbWVyYS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtZGlyZWN0aW9uYWwtbGlnaHQudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDTE9TRVNUX1RPX1pFUk8gPSAxZS02O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ0xPU0VTVF9UT19aRVJPO1xyXG4iLCJpbXBvcnQgQW5pbWF0aW9uSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2FuaW1hdGlvbi1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiT2JqZWN0cy9hbmltYXRpb25cIjtcclxuaW1wb3J0IExhbWJkYUZhY3RvcnkgZnJvbSBcIkZhY3Rvcmllcy9sYW1iZGEtZmFjdG9yeVwiO1xyXG5cclxuY2xhc3MgQW5pbWF0aW9uRmFjdG9yeSB7XHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGFuaW1hdGlvbjogQW5pbWF0aW9uSW50ZXJmYWNlKTogQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIHR5cGUsIGxhbWJkYSB9ID0gYW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0IG5ld0xhbWJkYSA9IExhbWJkYUZhY3RvcnkuZnJvbUludGVyZmFjZShsYW1iZGEpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKGluZGV4LCB0eXBlLCBuZXdMYW1iZGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uRmFjdG9yeTtcclxuIiwiaW1wb3J0IEFydGljdWxhdGVkSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2FydGljdWxhdGVkLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgQXJ0aWN1bGF0ZWQgZnJvbSBcIk9iamVjdHMvYXJ0aWN1bGF0ZWRcIjtcclxuaW1wb3J0IE5vZGVGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvbm9kZS1mYWN0b3J5XCI7XHJcbmltcG9ydCBBbmltYXRpb25GYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvYW5pbWF0aW9uLWZhY3RvcnlcIjtcclxuXHJcbmNsYXNzIEFydGljdWxhdGVkRmFjdG9yeSB7XHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGFydGljdWxhdGVkOiBBcnRpY3VsYXRlZEludGVyZmFjZSk6IEFydGljdWxhdGVkIHtcclxuICAgIGNvbnN0IHsgcm9vdCwgYXJyYXlPZkFuaW1hdGlvbiB9ID0gYXJ0aWN1bGF0ZWQ7XHJcblxyXG4gICAgY29uc3QgbmV3Um9vdCA9IE5vZGVGYWN0b3J5LmZyb21JbnRlcmZhY2Uocm9vdCk7XHJcbiAgICBjb25zdCBuZXdBcnJheU9mQW5pbWF0aW9uID0gYXJyYXlPZkFuaW1hdGlvbi5tYXAoKGFuaW1hdGlvbikgPT5cclxuICAgICAgQW5pbWF0aW9uRmFjdG9yeS5mcm9tSW50ZXJmYWNlKGFuaW1hdGlvbilcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBcnRpY3VsYXRlZChuZXdSb290LCBuZXdBcnJheU9mQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljdWxhdGVkRmFjdG9yeTtcclxuIiwiaW1wb3J0IERyYXdJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvZHJhdy1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IERyYXcgZnJvbSBcIk9iamVjdHMvZHJhd1wiO1xyXG5pbXBvcnQgUG9pbnRGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvcG9pbnQtZmFjdG9yeVwiO1xyXG5pbXBvcnQgVGV4dHVyZUZhY3RvcnkgZnJvbSBcIkZhY3Rvcmllcy90ZXh0dXJlLWZhY3RvcnlcIjtcclxuXHJcbmNsYXNzIERyYXdGYWN0b3J5IHtcclxuICBwdWJsaWMgc3RhdGljIGZyb21JbnRlcmZhY2UoZHJhdzogRHJhd0ludGVyZmFjZSk6IERyYXcge1xyXG4gICAgY29uc3QgeyBwb2ludCwgdGV4dHVyZSB9ID0gZHJhdztcclxuXHJcbiAgICBjb25zdCBuZXdQb2ludCA9IFBvaW50RmFjdG9yeS5mcm9tSW50ZXJmYWNlKHBvaW50KTtcclxuXHJcbiAgICBjb25zdCBuZXdUZXh0dXJlID0gVGV4dHVyZUZhY3RvcnkuZnJvbUludGVyZmFjZSh0ZXh0dXJlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IERyYXcobmV3UG9pbnQsIG5ld1RleHR1cmUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd0ZhY3Rvcnk7XHJcbiIsImltcG9ydCBGYWNlSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2ZhY2UtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBGYWNlIGZyb20gXCJPYmplY3RzL2ZhY2VcIjtcclxuaW1wb3J0IERyYXdGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvZHJhdy1mYWN0b3J5XCI7XHJcblxyXG5jbGFzcyBGYWNlRmFjdG9yeSB7XHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGZhY2U6IEZhY2VJbnRlcmZhY2UpOiBGYWNlIHtcclxuICAgIGNvbnN0IHsgYXJyYXlPZkRyYXcgfSA9IGZhY2U7XHJcblxyXG4gICAgY29uc3QgbmV3QXJyYXlPZkRyYXcgPSBhcnJheU9mRHJhdy5tYXAoKGRyYXcpID0+IHtcclxuICAgICAgcmV0dXJuIERyYXdGYWN0b3J5LmZyb21JbnRlcmZhY2UoZHJhdyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEZhY2UobmV3QXJyYXlPZkRyYXcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZUZhY3Rvcnk7XHJcbiIsImltcG9ydCBMYW1iZGFJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvbGFtYmRhLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgTGFtYmRhIGZyb20gXCJPYmplY3RzL2xhbWJkYVwiO1xyXG5cclxuY2xhc3MgTGFtYmRhRmFjdG9yeSB7XHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGxhbWJkYTogTGFtYmRhSW50ZXJmYWNlKTogTGFtYmRhIHtcclxuICAgIGNvbnN0IHsgcmF3RnVuY3Rpb24gfSA9IGxhbWJkYTtcclxuXHJcbiAgICByZXR1cm4gbmV3IExhbWJkYShyYXdGdW5jdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW1iZGFGYWN0b3J5O1xyXG4iLCJpbXBvcnQgTm9kZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9ub2RlLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgTm9kZSBmcm9tIFwiT2JqZWN0cy9ub2RlXCI7XHJcbmltcG9ydCBGYWNlRmFjdG9yeSBmcm9tIFwiRmFjdG9yaWVzL2ZhY2UtZmFjdG9yeVwiO1xyXG5cclxuY2xhc3MgTm9kZUZhY3Rvcnkge1xyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUludGVyZmFjZShub2RlOiBOb2RlSW50ZXJmYWNlKTogTm9kZSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgYXJyYXlPZkZhY2UsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgdHosXHJcbiAgICAgIGFuZ2xlWCxcclxuICAgICAgYW5nbGVZLFxyXG4gICAgICBhbmdsZVosXHJcbiAgICAgIHN4LFxyXG4gICAgICBzeSxcclxuICAgICAgc3osXHJcbiAgICB9ID0gbm9kZTtcclxuXHJcbiAgICBjb25zdCBuZXdBcnJheU9mRmFjZSA9IGFycmF5T2ZGYWNlLm1hcCgoZmFjZSkgPT4ge1xyXG4gICAgICByZXR1cm4gRmFjZUZhY3RvcnkuZnJvbUludGVyZmFjZShmYWNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gTm9kZUZhY3RvcnkuZnJvbUludGVyZmFjZShjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE5vZGUoXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBuZXdDaGlsZHJlbixcclxuICAgICAgbmV3QXJyYXlPZkZhY2UsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgdHosXHJcbiAgICAgIGFuZ2xlWCxcclxuICAgICAgYW5nbGVZLFxyXG4gICAgICBhbmdsZVosXHJcbiAgICAgIHN4LFxyXG4gICAgICBzeSxcclxuICAgICAgc3pcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlRmFjdG9yeTtcclxuIiwiaW1wb3J0IFBvaW50SW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL3BvaW50LWludGVyZmFjZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIk9iamVjdHMvcG9pbnRcIjtcclxuXHJcbmNsYXNzIFBvaW50RmFjdG9yeSB7XHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKHBvaW50OiBQb2ludEludGVyZmFjZSk6IFBvaW50IHtcclxuICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gcG9pbnQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5LCB6KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50RmFjdG9yeTtcclxuIiwiaW1wb3J0IFRleHR1cmVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvdGV4dHVyZS1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFRleHR1cmUgZnJvbSBcIk9iamVjdHMvdGV4dHVyZVwiO1xyXG5cclxuY2xhc3MgVGV4dHVyZUZhY3Rvcnkge1xyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUludGVyZmFjZSh0ZXh0dXJlOiBUZXh0dXJlSW50ZXJmYWNlKTogVGV4dHVyZSB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRleHR1cmU7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKHgsIHkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dHVyZUZhY3Rvcnk7XHJcbiIsImNsYXNzIEZpbGVIYW5kbGluZyB7XHJcbiAgcHVibGljIHN0YXRpYyBkb3dubG9hZCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmlsZShbdGV4dF0sIFwiYXJ0aWN1bGF0ZWQuanNvblwiLCB7XHJcbiAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuXHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICBhLmRvd25sb2FkID0gZGF0YS5uYW1lO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG5cclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBsb2FkKGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGlucHV0LmFjY2VwdCA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcblxyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVIYW5kbGluZztcclxuIiwiaW1wb3J0IEFydGljdWxhdGVkRmFjdG9yeSBmcm9tIFwiRmFjdG9yaWVzL2FydGljdWxhdGVkLWZhY3RvcnlcIjtcclxuaW1wb3J0IEFydGljdWxhdGVkSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2FydGljdWxhdGVkLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgQXJ0aWN1bGF0ZWQgZnJvbSBcIk9iamVjdHMvYXJ0aWN1bGF0ZWRcIjtcclxuXHJcbmNsYXNzIEZpbGVTeXN0ZW0ge1xyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZEFydGljdWxhdGVkKHRleHQ6IHN0cmluZyk6IEFydGljdWxhdGVkIHtcclxuICAgIGNvbnN0IGFydGljdWxhdGVkSW50ZXJmYWNlID0gSlNPTi5wYXJzZSh0ZXh0KSBhcyBBcnRpY3VsYXRlZEludGVyZmFjZTtcclxuXHJcbiAgICByZXR1cm4gQXJ0aWN1bGF0ZWRGYWN0b3J5LmZyb21JbnRlcmZhY2UoYXJ0aWN1bGF0ZWRJbnRlcmZhY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVBcnRpY3VsYXRlZChhcnRpY3VsYXRlZDogQXJ0aWN1bGF0ZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFydGljdWxhdGVkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVTeXN0ZW07XHJcbiIsImltcG9ydCBBbmltYXRpb25JbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvYW5pbWF0aW9uLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVHlwZSBmcm9tIFwiVHlwZXMvYW5pbWF0aW9uLXR5cGVcIjtcclxuaW1wb3J0IExhbWJkYSBmcm9tIFwiT2JqZWN0cy9sYW1iZGFcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbiBpbXBsZW1lbnRzIEFuaW1hdGlvbkludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaW5kZXg6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0eXBlOiBBbmltYXRpb25UeXBlLFxyXG4gICAgcHVibGljIGxhbWJkYTogTGFtYmRhXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0SW5kZXgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFR5cGUoKTogQW5pbWF0aW9uVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybShjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubGFtYmRhLmNhbGwoYyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb247XHJcbiIsImltcG9ydCBBcnRpY3VsYXRlZEludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9hcnRpY3VsYXRlZC1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIk9iamVjdHMvbm9kZVwiO1xyXG5pbXBvcnQgQ29sb3IgZnJvbSBcIk9iamVjdHMvY29sb3JcIjtcclxuaW1wb3J0IENhbWVyYSBmcm9tIFwiT2JqZWN0cy9jYW1lcmFcIjtcclxuaW1wb3J0IExpZ2h0IGZyb20gXCJPYmplY3RzL2xpZ2h0XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIk9iamVjdHMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCBUcmFuc2Zvcm1hdGlvbiBmcm9tIFwiT3BlcmF0aW9ucy90cmFuc2Zvcm1hdGlvblwiO1xyXG5pbXBvcnQgUHJvamVjdGlvblBhcmFtcyBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi1wYXJhbXNcIjtcclxuaW1wb3J0IFByb2plY3Rpb25UeXBlIGZyb20gXCJUeXBlcy9wcm9qZWN0aW9uLXR5cGVcIjtcclxuaW1wb3J0IFNoYWRlclN0YXR1cyBmcm9tIFwiVHlwZXMvc2hhZGVyLXN0YXR1c1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVHlwZSBmcm9tIFwiVHlwZXMvYW5pbWF0aW9uLXR5cGVcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJVdGlscy9yZW5kZXJlclwiO1xyXG5cclxuY2xhc3MgQXJ0aWN1bGF0ZWQgaW1wbGVtZW50cyBBcnRpY3VsYXRlZEludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogTm9kZSxcclxuICAgIHB1YmxpYyByZWFkb25seSBhcnJheU9mQW5pbWF0aW9uOiBBbmltYXRpb25bXVxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGZpbmROb2RlKGluZGV4OiBzdHJpbmcpOiBOb2RlIHtcclxuICAgIHJldHVybiB0aGlzLnJvb3QuZmluZE5vZGUoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlclRyZWU8VCBleHRlbmRzIFByb2plY3Rpb25UeXBlPihcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByb2plY3Rpb25UeXBlOiBULFxyXG4gICAgcGFyYW1zOiBQcm9qZWN0aW9uUGFyYW1zW1RdLFxyXG4gICAgY2FtZXJhOiBDYW1lcmEsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVYOiBudW1iZXIsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVZOiBudW1iZXIsXHJcbiAgICBhbWJpZW50Q29sb3I6IENvbG9yLFxyXG4gICAgZGlyZWN0aW9uYWxMaWdodDogTGlnaHQsXHJcbiAgICBzaGFkZXJTdGF0dXM6IFNoYWRlclN0YXR1cyxcclxuICAgIG1hcHBpbmdNb2RlOiBzdHJpbmdcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMucm9vdC5yZW5kZXJUcmVlKFxyXG4gICAgICByZW5kZXJlcixcclxuICAgICAgcHJvamVjdGlvblR5cGUsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgY2FtZXJhLFxyXG4gICAgICBvZmZzZXRUcmFuc2xhdGVYLFxyXG4gICAgICBvZmZzZXRUcmFuc2xhdGVZLFxyXG4gICAgICBhbWJpZW50Q29sb3IsXHJcbiAgICAgIGRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgIHNoYWRlclN0YXR1cyxcclxuICAgICAgbWFwcGluZ01vZGUsXHJcbiAgICAgIFRyYW5zZm9ybWF0aW9uLmlkZW50aXR5KClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlBbmltYXRpb24oYzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiB0aGlzLmFycmF5T2ZBbmltYXRpb24pIHtcclxuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnJvb3QuZmluZE5vZGUoYW5pbWF0aW9uLmdldEluZGV4KCkpO1xyXG5cclxuICAgICAgc3dpdGNoIChhbmltYXRpb24uZ2V0VHlwZSgpKSB7XHJcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLk1PVkVfWDpcclxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVYKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLk1PVkVfWTpcclxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVZKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLk1PVkVfWjpcclxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLlJPVEFURV9YOlxyXG4gICAgICAgICAgY3VycmVudE5vZGUucm90YXRlWChhbmltYXRpb24udHJhbnNmb3JtKGMpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWTpcclxuICAgICAgICAgIGN1cnJlbnROb2RlLnJvdGF0ZVkoYW5pbWF0aW9uLnRyYW5zZm9ybShjKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuUk9UQVRFX1o6XHJcbiAgICAgICAgICBjdXJyZW50Tm9kZS5yb3RhdGVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLlNDQUxFX1g6XHJcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zY2FsZVgoYW5pbWF0aW9uLnRyYW5zZm9ybShjKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuU0NBTEVfWTpcclxuICAgICAgICAgIGN1cnJlbnROb2RlLnNjYWxlWShhbmltYXRpb24udHJhbnNmb3JtKGMpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQW5pbWF0aW9uVHlwZS5TQ0FMRV9aOlxyXG4gICAgICAgICAgY3VycmVudE5vZGUuc2NhbGVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljdWxhdGVkO1xyXG4iLCJpbXBvcnQgQ2FtZXJhSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2NhbWVyYS1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCJPYmplY3RzL3BvaW50XCI7XHJcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCJPYmplY3RzL2Nvb3JkaW5hdGVcIjtcclxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiT2JqZWN0cy9tYXRyaXhcIjtcclxuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIk9iamVjdHMvdmVjdG9yXCI7XHJcblxyXG5jbGFzcyBDYW1lcmEgaW1wbGVtZW50cyBDYW1lcmFJbnRlcmZhY2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyLFxyXG4gICAgcHVibGljIGNlbnRlcjogUG9pbnRcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVSYWRpdXMoZGlzdGFuY2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpdXMgPSBkaXN0YW5jZTtcclxuICB9XHJcblxyXG4gIGxvb2tBdCgpOiBNYXRyaXgge1xyXG4gICAgY29uc3QgaW5pdGlhbE1hdHJpeCA9IFRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0aW9uKFxyXG4gICAgICB0aGlzLmNlbnRlci54LFxyXG4gICAgICB0aGlzLmNlbnRlci55LFxyXG4gICAgICB0aGlzLmNlbnRlci56XHJcbiAgICApXHJcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblkodGhpcy5hbmdsZSkpXHJcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbigwLCAwLCB0aGlzLnJhZGl1cykpXHJcbiAgICAgIC5tdWx0aXBseU1hdHJpeChcclxuICAgICAgICBUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbihcclxuICAgICAgICAgIC10aGlzLmNlbnRlci54LFxyXG4gICAgICAgICAgLXRoaXMuY2VudGVyLnksXHJcbiAgICAgICAgICAtdGhpcy5jZW50ZXIuelxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gaW5pdGlhbE1hdHJpeC5hNDtcclxuXHJcbiAgICBjb25zdCBleWVWZWN0b3IgPSBuZXcgVmVjdG9yKFxyXG4gICAgICBjYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICBjYW1lcmFQb3NpdGlvbi55LFxyXG4gICAgICBjYW1lcmFQb3NpdGlvbi56XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclZlY3RvciA9IG5ldyBWZWN0b3IoXHJcbiAgICAgIHRoaXMuY2VudGVyLngsXHJcbiAgICAgIHRoaXMuY2VudGVyLnksXHJcbiAgICAgIHRoaXMuY2VudGVyLnpcclxuICAgICk7XHJcbiAgICBjb25zdCB1cFZlY3RvciA9IG5ldyBWZWN0b3IoMCwgMSwgMCk7XHJcblxyXG4gICAgY29uc3QgekF4aXMgPSBleWVWZWN0b3Iuc3VidHJhY3QoY2VudGVyVmVjdG9yKS5ub3JtYWxpemUoKTtcclxuICAgIGNvbnN0IHhBeGlzID0gdXBWZWN0b3IuY3Jvc3MoekF4aXMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgY29uc3QgeUF4aXMgPSB6QXhpcy5jcm9zcyh4QXhpcykubm9ybWFsaXplKCk7XHJcblxyXG4gICAgY29uc3QgY2FtZXJhTWF0cml4ID0gbmV3IE1hdHJpeChcclxuICAgICAgbmV3IENvb3JkaW5hdGUoeEF4aXMueCwgeEF4aXMueSwgeEF4aXMueiwgMCksXHJcbiAgICAgIG5ldyBDb29yZGluYXRlKHlBeGlzLngsIHlBeGlzLnksIHlBeGlzLnosIDApLFxyXG4gICAgICBuZXcgQ29vcmRpbmF0ZSh6QXhpcy54LCB6QXhpcy55LCB6QXhpcy56LCAwKSxcclxuICAgICAgbmV3IENvb3JkaW5hdGUoZXllVmVjdG9yLngsIGV5ZVZlY3Rvci55LCBleWVWZWN0b3IueiwgMSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGNhbWVyYU1hdHJpeC5pbnZlcnNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1lcmE7XHJcbiIsImltcG9ydCBDb2xvckludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9jb2xvci1pbnRlcmZhY2VcIjtcclxuXHJcbmNsYXNzIENvbG9yIGltcGxlbWVudHMgQ29sb3JJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcixcclxuICAgIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYjogbnVtYmVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0VHJpcGxldCgpOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xyXG4iLCJpbXBvcnQgQ29vcmRpbmF0ZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9jb29yZGluYXRlLWludGVyZmFjZVwiO1xyXG5cclxuY2xhc3MgQ29vcmRpbmF0ZSBpbXBsZW1lbnRzIENvb3JkaW5hdGVJbnRlcmZhY2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSB4OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgeTogbnVtYmVyLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHo6IG51bWJlcixcclxuICAgIHB1YmxpYyByZWFkb25seSB3OiBudW1iZXJcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRRdWFkcnVwbGV0KCk6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb3Qob3RoZXI6IENvb3JkaW5hdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy54ICogb3RoZXIueCArIHRoaXMueSAqIG90aGVyLnkgKyB0aGlzLnogKiBvdGhlci56ICsgdGhpcy53ICogb3RoZXIud1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7XHJcbiIsImltcG9ydCBEcmF3SW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2RyYXctaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xyXG5pbXBvcnQgVGV4dHVyZSBmcm9tIFwiT2JqZWN0cy90ZXh0dXJlXCI7XHJcblxyXG5jbGFzcyBEcmF3IGltcGxlbWVudHMgRHJhd0ludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHBvaW50OiBQb2ludCwgcHVibGljIHJlYWRvbmx5IHRleHR1cmU6IFRleHR1cmUpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludCgpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUZXh0dXJlKCk6IFRleHR1cmUge1xyXG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXc7XHJcbiIsImltcG9ydCBGYWNlSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2ZhY2UtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIk9iamVjdHMvdmVjdG9yXCI7XHJcbmltcG9ydCBEcmF3IGZyb20gXCJPYmplY3RzL2RyYXdcIjtcclxuXHJcbmNsYXNzIEZhY2UgaW1wbGVtZW50cyBGYWNlSW50ZXJmYWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgYXJyYXlPZkRyYXc6IERyYXdbXSkge31cclxuXHJcbiAgcHVibGljIGZpbmROb3JtYWwoKTogVmVjdG9yIHtcclxuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzBdLmdldFBvaW50KCk7XHJcbiAgICBjb25zdCBxID0gbmV3IFZlY3RvcihmaXJzdFBvaW50LngsIGZpcnN0UG9pbnQueSwgZmlyc3RQb2ludC56KTtcclxuXHJcbiAgICBjb25zdCBzZWNvbmRQb2ludCA9IHRoaXMuYXJyYXlPZkRyYXdbMV0uZ2V0UG9pbnQoKTtcclxuICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKHNlY29uZFBvaW50LngsIHNlY29uZFBvaW50LnksIHNlY29uZFBvaW50LnopO1xyXG5cclxuICAgIGNvbnN0IHRoaXJkUG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzJdLmdldFBvaW50KCk7XHJcbiAgICBjb25zdCBzID0gbmV3IFZlY3Rvcih0aGlyZFBvaW50LngsIHRoaXJkUG9pbnQueSwgdGhpcmRQb2ludC56KTtcclxuXHJcbiAgICBjb25zdCBxciA9IHIuc3VidHJhY3QocSk7XHJcbiAgICBjb25zdCBxcyA9IHMuc3VidHJhY3QocSk7XHJcblxyXG4gICAgcmV0dXJuIHFzLmNyb3NzKHFyKS5ub3JtYWxpemUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kVGFuZ2VudHMoKTogVmVjdG9yW10ge1xyXG4gICAgY29uc3QgZmlyc3RQb2ludCA9IHRoaXMuYXJyYXlPZkRyYXdbMF0uZ2V0UG9pbnQoKTtcclxuICAgIGNvbnN0IHEgPSBuZXcgVmVjdG9yKGZpcnN0UG9pbnQueCwgZmlyc3RQb2ludC55LCBmaXJzdFBvaW50LnopO1xyXG5cclxuICAgIGNvbnN0IHNlY29uZFBvaW50ID0gdGhpcy5hcnJheU9mRHJhd1sxXS5nZXRQb2ludCgpO1xyXG4gICAgY29uc3QgciA9IG5ldyBWZWN0b3Ioc2Vjb25kUG9pbnQueCwgc2Vjb25kUG9pbnQueSwgc2Vjb25kUG9pbnQueik7XHJcblxyXG4gICAgY29uc3QgdGhpcmRQb2ludCA9IHRoaXMuYXJyYXlPZkRyYXdbMl0uZ2V0UG9pbnQoKTtcclxuICAgIGNvbnN0IHMgPSBuZXcgVmVjdG9yKHRoaXJkUG9pbnQueCwgdGhpcmRQb2ludC55LCB0aGlyZFBvaW50LnopO1xyXG5cclxuICAgIGNvbnN0IHFyID0gci5zdWJ0cmFjdChxKTtcclxuICAgIGNvbnN0IHFzID0gcy5zdWJ0cmFjdChxKTtcclxuXHJcbiAgICByZXR1cm4gW3FyLm5vcm1hbGl6ZSgpLCBxcy5ub3JtYWxpemUoKV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmF3UG9zaXRpb24oKTogcmVhZG9ubHkgbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyYXlPZkRyYXcuZmxhdE1hcCgoZHJhdykgPT4gZHJhdy5nZXRQb2ludCgpLmdldFRyaXBsZXQoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmF3VGV4dHVyZSgpOiByZWFkb25seSBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcnJheU9mRHJhdy5mbGF0TWFwKChkcmF3KSA9PiBkcmF3LmdldFRleHR1cmUoKS5nZXRQYWlyKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcclxuIiwiaW1wb3J0IExhbWJkYUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9sYW1iZGEtaW50ZXJmYWNlXCI7XHJcblxyXG5jbGFzcyBMYW1iZGEgaW1wbGVtZW50cyBMYW1iZGFJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByYXdGdW5jdGlvbjogc3RyaW5nKSB7fVxyXG5cclxuICBwdWJsaWMgY2FsbChjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGV2YWwoYCgke3RoaXMucmF3RnVuY3Rpb259KSgke2N9KWApIGFzIG51bWJlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbWJkYTtcclxuIiwiaW1wb3J0IExpZ2h0SW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2xpZ2h0LWludGVyZmFjZVwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCJPYmplY3RzL3ZlY3RvclwiO1xyXG5cclxuY2xhc3MgTGlnaHQgZXh0ZW5kcyBWZWN0b3IgaW1wbGVtZW50cyBMaWdodEludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHk6IG51bWJlcixcclxuICAgIHB1YmxpYyByZWFkb25seSB6OiBudW1iZXJcclxuICApIHtcclxuICAgIHN1cGVyKHgsIHksIHopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJhd0RpcmVjdGlvbigpOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgdW5pdFZlY3RvciA9IHRoaXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIHVuaXRWZWN0b3IuZ2V0VHJpcGxldCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldmVyc2UoKTogTGlnaHQge1xyXG4gICAgcmV0dXJuIG5ldyBMaWdodCgtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0O1xyXG4iLCJpbXBvcnQgTWF0cml4SW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL21hdHJpeC1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIk9iamVjdHMvY29vcmRpbmF0ZVwiO1xyXG5cclxuY2xhc3MgTWF0cml4IGltcGxlbWVudHMgTWF0cml4SW50ZXJmYWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBhMTogQ29vcmRpbmF0ZSxcclxuICAgIHB1YmxpYyByZWFkb25seSBhMjogQ29vcmRpbmF0ZSxcclxuICAgIHB1YmxpYyByZWFkb25seSBhMzogQ29vcmRpbmF0ZSxcclxuICAgIHB1YmxpYyByZWFkb25seSBhNDogQ29vcmRpbmF0ZVxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGZsYXR0ZW4oKTogcmVhZG9ubHkgbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4udGhpcy5hMS5nZXRRdWFkcnVwbGV0KCksXHJcbiAgICAgIC4uLnRoaXMuYTIuZ2V0UXVhZHJ1cGxldCgpLFxyXG4gICAgICAuLi50aGlzLmEzLmdldFF1YWRydXBsZXQoKSxcclxuICAgICAgLi4udGhpcy5hNC5nZXRRdWFkcnVwbGV0KCksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5TWF0cml4KG90aGVyOiBNYXRyaXgpOiBNYXRyaXgge1xyXG4gICAgLyogVW5wYWNrIFwidGhpc1wiIG1hdHJpeCAqL1xyXG4gICAgY29uc3QgW2ExMSwgYTIxLCBhMzEsIGE0MV0gPSB0aGlzLmExLmdldFF1YWRydXBsZXQoKTtcclxuICAgIGNvbnN0IFthMTIsIGEyMiwgYTMyLCBhNDJdID0gdGhpcy5hMi5nZXRRdWFkcnVwbGV0KCk7XHJcbiAgICBjb25zdCBbYTEzLCBhMjMsIGEzMywgYTQzXSA9IHRoaXMuYTMuZ2V0UXVhZHJ1cGxldCgpO1xyXG4gICAgY29uc3QgW2ExNCwgYTI0LCBhMzQsIGE0NF0gPSB0aGlzLmE0LmdldFF1YWRydXBsZXQoKTtcclxuXHJcbiAgICAvKiBDcmVhdGUgdHJhbnNwb3NlIGNvb3JkaW5hdGUgKi9cclxuICAgIGNvbnN0IGExID0gbmV3IENvb3JkaW5hdGUoYTExLCBhMTIsIGExMywgYTE0KTtcclxuICAgIGNvbnN0IGEyID0gbmV3IENvb3JkaW5hdGUoYTIxLCBhMjIsIGEyMywgYTI0KTtcclxuICAgIGNvbnN0IGEzID0gbmV3IENvb3JkaW5hdGUoYTMxLCBhMzIsIGEzMywgYTM0KTtcclxuICAgIGNvbnN0IGE0ID0gbmV3IENvb3JkaW5hdGUoYTQxLCBhNDIsIGE0MywgYTQ0KTtcclxuXHJcbiAgICAvKiBNYXRyaXggbXVsdGlwbGljYXRpb24gKi9cclxuICAgIGNvbnN0IGIxMSA9IGExLmRvdChvdGhlci5hMSk7XHJcbiAgICBjb25zdCBiMTIgPSBhMS5kb3Qob3RoZXIuYTIpO1xyXG4gICAgY29uc3QgYjEzID0gYTEuZG90KG90aGVyLmEzKTtcclxuICAgIGNvbnN0IGIxNCA9IGExLmRvdChvdGhlci5hNCk7XHJcbiAgICBjb25zdCBiMjEgPSBhMi5kb3Qob3RoZXIuYTEpO1xyXG4gICAgY29uc3QgYjIyID0gYTIuZG90KG90aGVyLmEyKTtcclxuICAgIGNvbnN0IGIyMyA9IGEyLmRvdChvdGhlci5hMyk7XHJcbiAgICBjb25zdCBiMjQgPSBhMi5kb3Qob3RoZXIuYTQpO1xyXG4gICAgY29uc3QgYjMxID0gYTMuZG90KG90aGVyLmExKTtcclxuICAgIGNvbnN0IGIzMiA9IGEzLmRvdChvdGhlci5hMik7XHJcbiAgICBjb25zdCBiMzMgPSBhMy5kb3Qob3RoZXIuYTMpO1xyXG4gICAgY29uc3QgYjM0ID0gYTMuZG90KG90aGVyLmE0KTtcclxuICAgIGNvbnN0IGI0MSA9IGE0LmRvdChvdGhlci5hMSk7XHJcbiAgICBjb25zdCBiNDIgPSBhNC5kb3Qob3RoZXIuYTIpO1xyXG4gICAgY29uc3QgYjQzID0gYTQuZG90KG90aGVyLmEzKTtcclxuICAgIGNvbnN0IGI0NCA9IGE0LmRvdChvdGhlci5hNCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIHJlc3VsdCBjb29yZGluYXRlICovXHJcbiAgICBjb25zdCBiMSA9IG5ldyBDb29yZGluYXRlKGIxMSwgYjIxLCBiMzEsIGI0MSk7XHJcbiAgICBjb25zdCBiMiA9IG5ldyBDb29yZGluYXRlKGIxMiwgYjIyLCBiMzIsIGI0Mik7XHJcbiAgICBjb25zdCBiMyA9IG5ldyBDb29yZGluYXRlKGIxMywgYjIzLCBiMzMsIGI0Myk7XHJcbiAgICBjb25zdCBiNCA9IG5ldyBDb29yZGluYXRlKGIxNCwgYjI0LCBiMzQsIGI0NCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIG5ldyBtYXRyaXggKi9cclxuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgoYjEsIGIyLCBiMywgYjQpO1xyXG5cclxuICAgIHJldHVybiBuZXdNYXRyaXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHlDb29yZGluYXRlKGNvb3JkaW5hdGU6IENvb3JkaW5hdGUpOiBDb29yZGluYXRlIHtcclxuICAgIC8qIFVucGFjayBcInRoaXNcIiBtYXRyaXggKi9cclxuICAgIGNvbnN0IFthMTEsIGEyMSwgYTMxLCBhNDFdID0gdGhpcy5hMS5nZXRRdWFkcnVwbGV0KCk7XHJcbiAgICBjb25zdCBbYTEyLCBhMjIsIGEzMiwgYTQyXSA9IHRoaXMuYTIuZ2V0UXVhZHJ1cGxldCgpO1xyXG4gICAgY29uc3QgW2ExMywgYTIzLCBhMzMsIGE0M10gPSB0aGlzLmEzLmdldFF1YWRydXBsZXQoKTtcclxuICAgIGNvbnN0IFthMTQsIGEyNCwgYTM0LCBhNDRdID0gdGhpcy5hNC5nZXRRdWFkcnVwbGV0KCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIHRyYW5zcG9zZSBjb29yZGluYXRlICovXHJcbiAgICBjb25zdCBhMSA9IG5ldyBDb29yZGluYXRlKGExMSwgYTEyLCBhMTMsIGExNCk7XHJcbiAgICBjb25zdCBhMiA9IG5ldyBDb29yZGluYXRlKGEyMSwgYTIyLCBhMjMsIGEyNCk7XHJcbiAgICBjb25zdCBhMyA9IG5ldyBDb29yZGluYXRlKGEzMSwgYTMyLCBhMzMsIGEzNCk7XHJcbiAgICBjb25zdCBhNCA9IG5ldyBDb29yZGluYXRlKGE0MSwgYTQyLCBhNDMsIGE0NCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIHJlc3VsdCB2YWx1ZSAqL1xyXG4gICAgY29uc3QgeCA9IGExLmRvdChjb29yZGluYXRlKTtcclxuICAgIGNvbnN0IHkgPSBhMi5kb3QoY29vcmRpbmF0ZSk7XHJcbiAgICBjb25zdCB6ID0gYTMuZG90KGNvb3JkaW5hdGUpO1xyXG4gICAgY29uc3QgdyA9IGE0LmRvdChjb29yZGluYXRlKTtcclxuXHJcbiAgICAvKiBDcmVhdGUgbmV3IGNvb3JkaW5hdGUgKi9cclxuICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSBuZXcgQ29vcmRpbmF0ZSh4LCB5LCB6LCB3KTtcclxuXHJcbiAgICByZXR1cm4gbmV3Q29vcmRpbmF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnNlKCk6IE1hdHJpeCB7XHJcbiAgICBjb25zdCBtMTEgPSB0aGlzLmExLng7XHJcbiAgICBjb25zdCBtMTIgPSB0aGlzLmExLnk7XHJcbiAgICBjb25zdCBtMTMgPSB0aGlzLmExLno7XHJcbiAgICBjb25zdCBtMTQgPSB0aGlzLmExLnc7XHJcbiAgICBjb25zdCBtMjEgPSB0aGlzLmEyLng7XHJcbiAgICBjb25zdCBtMjIgPSB0aGlzLmEyLnk7XHJcbiAgICBjb25zdCBtMjMgPSB0aGlzLmEyLno7XHJcbiAgICBjb25zdCBtMjQgPSB0aGlzLmEyLnc7XHJcbiAgICBjb25zdCBtMzEgPSB0aGlzLmEzLng7XHJcbiAgICBjb25zdCBtMzIgPSB0aGlzLmEzLnk7XHJcbiAgICBjb25zdCBtMzMgPSB0aGlzLmEzLno7XHJcbiAgICBjb25zdCBtMzQgPSB0aGlzLmEzLnc7XHJcbiAgICBjb25zdCBtNDEgPSB0aGlzLmE0Lng7XHJcbiAgICBjb25zdCBtNDIgPSB0aGlzLmE0Lnk7XHJcbiAgICBjb25zdCBtNDMgPSB0aGlzLmE0Lno7XHJcbiAgICBjb25zdCBtNDQgPSB0aGlzLmE0Lnc7XHJcblxyXG4gICAgLyogRmluZCAzeDMgZGV0ZXJtaW5hbnQgb2YgZWFjaCB0ZXJtICovXHJcbiAgICBjb25zdCBkZXRtMTEgPVxyXG4gICAgICBtMjIgKiBtMzMgKiBtNDQgK1xyXG4gICAgICBtMjMgKiBtMzQgKiBtNDIgK1xyXG4gICAgICBtMjQgKiBtMzIgKiBtNDMgLVxyXG4gICAgICBtMjQgKiBtMzMgKiBtNDIgLVxyXG4gICAgICBtMjMgKiBtMzIgKiBtNDQgLVxyXG4gICAgICBtMjIgKiBtMzQgKiBtNDM7XHJcbiAgICBjb25zdCBkZXRtMTIgPVxyXG4gICAgICBtMjEgKiBtMzMgKiBtNDQgK1xyXG4gICAgICBtMjMgKiBtMzQgKiBtNDEgK1xyXG4gICAgICBtMjQgKiBtMzEgKiBtNDMgLVxyXG4gICAgICBtMjQgKiBtMzMgKiBtNDEgLVxyXG4gICAgICBtMjMgKiBtMzEgKiBtNDQgLVxyXG4gICAgICBtMjEgKiBtMzQgKiBtNDM7XHJcbiAgICBjb25zdCBkZXRtMTMgPVxyXG4gICAgICBtMjEgKiBtMzIgKiBtNDQgK1xyXG4gICAgICBtMjIgKiBtMzQgKiBtNDEgK1xyXG4gICAgICBtMjQgKiBtMzEgKiBtNDIgLVxyXG4gICAgICBtMjQgKiBtMzIgKiBtNDEgLVxyXG4gICAgICBtMjIgKiBtMzEgKiBtNDQgLVxyXG4gICAgICBtMjEgKiBtMzQgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMTQgPVxyXG4gICAgICBtMjEgKiBtMzIgKiBtNDMgK1xyXG4gICAgICBtMjIgKiBtMzMgKiBtNDEgK1xyXG4gICAgICBtMjMgKiBtMzEgKiBtNDIgLVxyXG4gICAgICBtMjMgKiBtMzIgKiBtNDEgLVxyXG4gICAgICBtMjIgKiBtMzEgKiBtNDMgLVxyXG4gICAgICBtMjEgKiBtMzMgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMjEgPVxyXG4gICAgICBtMTIgKiBtMzMgKiBtNDQgK1xyXG4gICAgICBtMTMgKiBtMzQgKiBtNDIgK1xyXG4gICAgICBtMTQgKiBtMzIgKiBtNDMgLVxyXG4gICAgICBtMTQgKiBtMzMgKiBtNDIgLVxyXG4gICAgICBtMTMgKiBtMzIgKiBtNDQgLVxyXG4gICAgICBtMTIgKiBtMzQgKiBtNDM7XHJcbiAgICBjb25zdCBkZXRtMjIgPVxyXG4gICAgICBtMTEgKiBtMzMgKiBtNDQgK1xyXG4gICAgICBtMTMgKiBtMzQgKiBtNDEgK1xyXG4gICAgICBtMTQgKiBtMzEgKiBtNDMgLVxyXG4gICAgICBtMTQgKiBtMzMgKiBtNDEgLVxyXG4gICAgICBtMTMgKiBtMzEgKiBtNDQgLVxyXG4gICAgICBtMTEgKiBtMzQgKiBtNDM7XHJcbiAgICBjb25zdCBkZXRtMjMgPVxyXG4gICAgICBtMTEgKiBtMzIgKiBtNDQgK1xyXG4gICAgICBtMTIgKiBtMzQgKiBtNDEgK1xyXG4gICAgICBtMTQgKiBtMzEgKiBtNDIgLVxyXG4gICAgICBtMTQgKiBtMzIgKiBtNDEgLVxyXG4gICAgICBtMTIgKiBtMzEgKiBtNDQgLVxyXG4gICAgICBtMTEgKiBtMzQgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMjQgPVxyXG4gICAgICBtMTEgKiBtMzIgKiBtNDMgK1xyXG4gICAgICBtMTIgKiBtMzMgKiBtNDEgK1xyXG4gICAgICBtMTMgKiBtMzEgKiBtNDIgLVxyXG4gICAgICBtMTMgKiBtMzIgKiBtNDEgLVxyXG4gICAgICBtMTIgKiBtMzEgKiBtNDMgLVxyXG4gICAgICBtMTEgKiBtMzMgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMzEgPVxyXG4gICAgICBtMTIgKiBtMjMgKiBtNDQgK1xyXG4gICAgICBtMTMgKiBtMjQgKiBtNDIgK1xyXG4gICAgICBtMTQgKiBtMjIgKiBtNDMgLVxyXG4gICAgICBtMTQgKiBtMjMgKiBtNDIgLVxyXG4gICAgICBtMTMgKiBtMjIgKiBtNDQgLVxyXG4gICAgICBtMTIgKiBtMjQgKiBtNDM7XHJcbiAgICBjb25zdCBkZXRtMzIgPVxyXG4gICAgICBtMTEgKiBtMjMgKiBtNDQgK1xyXG4gICAgICBtMTMgKiBtMjQgKiBtNDEgK1xyXG4gICAgICBtMTQgKiBtMjEgKiBtNDMgLVxyXG4gICAgICBtMTQgKiBtMjMgKiBtNDEgLVxyXG4gICAgICBtMTMgKiBtMjEgKiBtNDQgLVxyXG4gICAgICBtMTEgKiBtMjQgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMzMgPVxyXG4gICAgICBtMTEgKiBtMjIgKiBtNDQgK1xyXG4gICAgICBtMTIgKiBtMjQgKiBtNDEgK1xyXG4gICAgICBtMTQgKiBtMjEgKiBtNDIgLVxyXG4gICAgICBtMTQgKiBtMjIgKiBtNDEgLVxyXG4gICAgICBtMTIgKiBtMjEgKiBtNDQgLVxyXG4gICAgICBtMTEgKiBtMjQgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtMzQgPVxyXG4gICAgICBtMTEgKiBtMjIgKiBtNDMgK1xyXG4gICAgICBtMTIgKiBtMjMgKiBtNDEgK1xyXG4gICAgICBtMTMgKiBtMjEgKiBtNDIgLVxyXG4gICAgICBtMTMgKiBtMjIgKiBtNDEgLVxyXG4gICAgICBtMTIgKiBtMjEgKiBtNDMgLVxyXG4gICAgICBtMTEgKiBtMjMgKiBtNDI7XHJcbiAgICBjb25zdCBkZXRtNDEgPVxyXG4gICAgICBtMTIgKiBtMjMgKiBtMzQgK1xyXG4gICAgICBtMTMgKiBtMjQgKiBtMzIgK1xyXG4gICAgICBtMTQgKiBtMjIgKiBtMzMgLVxyXG4gICAgICBtMTQgKiBtMjMgKiBtMzIgLVxyXG4gICAgICBtMTMgKiBtMjIgKiBtMzQgLVxyXG4gICAgICBtMTIgKiBtMjQgKiBtMzM7XHJcbiAgICBjb25zdCBkZXRtNDIgPVxyXG4gICAgICBtMTEgKiBtMjMgKiBtMzQgK1xyXG4gICAgICBtMTMgKiBtMjQgKiBtMzEgK1xyXG4gICAgICBtMTQgKiBtMjEgKiBtMzMgLVxyXG4gICAgICBtMTQgKiBtMjMgKiBtMzEgLVxyXG4gICAgICBtMTMgKiBtMjEgKiBtMzQgLVxyXG4gICAgICBtMTEgKiBtMjQgKiBtMzM7XHJcbiAgICBjb25zdCBkZXRtNDMgPVxyXG4gICAgICBtMTEgKiBtMjIgKiBtMzQgK1xyXG4gICAgICBtMTIgKiBtMjQgKiBtMzEgK1xyXG4gICAgICBtMTQgKiBtMjEgKiBtMzIgLVxyXG4gICAgICBtMTQgKiBtMjIgKiBtMzEgLVxyXG4gICAgICBtMTIgKiBtMjEgKiBtMzQgLVxyXG4gICAgICBtMTEgKiBtMjQgKiBtMzI7XHJcbiAgICBjb25zdCBkZXRtNDQgPVxyXG4gICAgICBtMTEgKiBtMjIgKiBtMzMgK1xyXG4gICAgICBtMTIgKiBtMjMgKiBtMzEgK1xyXG4gICAgICBtMTMgKiBtMjEgKiBtMzIgLVxyXG4gICAgICBtMTMgKiBtMjIgKiBtMzEgLVxyXG4gICAgICBtMTIgKiBtMjEgKiBtMzMgLVxyXG4gICAgICBtMTEgKiBtMjMgKiBtMzI7XHJcblxyXG4gICAgY29uc3QgZGV0QSA9IG0xMSAqIGRldG0xMSAtIG0yMSAqIGRldG0yMSArIG0zMSAqIGRldG0zMSAtIG00MSAqIGRldG00MTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChcclxuICAgICAgbmV3IENvb3JkaW5hdGUoXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCAyKSAqIGRldG0xMSxcclxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDMpICogZGV0bTIxLFxyXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNCkgKiBkZXRtMzEsXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG00MVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQ29vcmRpbmF0ZShcclxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDMpICogZGV0bTEyLFxyXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNCkgKiBkZXRtMjIsXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG0zMixcclxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDYpICogZGV0bTQyXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBDb29yZGluYXRlKFxyXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNCkgKiBkZXRtMTMsXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG0yMyxcclxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDYpICogZGV0bTMzLFxyXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNykgKiBkZXRtNDNcclxuICAgICAgKSxcclxuICAgICAgbmV3IENvb3JkaW5hdGUoXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG0xNCxcclxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDYpICogZGV0bTI0LFxyXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNykgKiBkZXRtMzQsXHJcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA4KSAqIGRldG00NFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG4gICAgLyogVW5wYWNrIFwidGhpc1wiIG1hdHJpeCAqL1xyXG4gICAgY29uc3QgW2ExMSwgYTIxLCBhMzEsIGE0MV0gPSB0aGlzLmExLmdldFF1YWRydXBsZXQoKTtcclxuICAgIGNvbnN0IFthMTIsIGEyMiwgYTMyLCBhNDJdID0gdGhpcy5hMi5nZXRRdWFkcnVwbGV0KCk7XHJcbiAgICBjb25zdCBbYTEzLCBhMjMsIGEzMywgYTQzXSA9IHRoaXMuYTMuZ2V0UXVhZHJ1cGxldCgpO1xyXG4gICAgY29uc3QgW2ExNCwgYTI0LCBhMzQsIGE0NF0gPSB0aGlzLmE0LmdldFF1YWRydXBsZXQoKTtcclxuXHJcbiAgICAvKiBDcmVhdGUgdHJhbnNwb3NlIGNvb3JkaW5hdGUgKi9cclxuICAgIGNvbnN0IGExID0gbmV3IENvb3JkaW5hdGUoYTExLCBhMTIsIGExMywgYTE0KTtcclxuICAgIGNvbnN0IGEyID0gbmV3IENvb3JkaW5hdGUoYTIxLCBhMjIsIGEyMywgYTI0KTtcclxuICAgIGNvbnN0IGEzID0gbmV3IENvb3JkaW5hdGUoYTMxLCBhMzIsIGEzMywgYTM0KTtcclxuICAgIGNvbnN0IGE0ID0gbmV3IENvb3JkaW5hdGUoYTQxLCBhNDIsIGE0MywgYTQ0KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChhMSwgYTIsIGEzLCBhNCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7XHJcbiIsImltcG9ydCBOb2RlSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL25vZGUtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBDb2xvciBmcm9tIFwiT2JqZWN0cy9jb2xvclwiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJPYmplY3RzL2NhbWVyYVwiO1xyXG5pbXBvcnQgTGlnaHQgZnJvbSBcIk9iamVjdHMvbGlnaHRcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCJPYmplY3RzL3NoYXBlXCI7XHJcbmltcG9ydCBNYXRyaXggZnJvbSBcIk9iamVjdHMvbWF0cml4XCI7XHJcbmltcG9ydCBGYWNlIGZyb20gXCJPYmplY3RzL2ZhY2VcIjtcclxuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XHJcbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gXCJPcGVyYXRpb25zL3Byb2plY3Rpb25cIjtcclxuaW1wb3J0IFByb2plY3Rpb25QYXJhbXMgZnJvbSBcIlR5cGVzL3Byb2plY3Rpb24tcGFyYW1zXCI7XHJcbmltcG9ydCBQcm9qZWN0aW9uVHlwZSBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi10eXBlXCI7XHJcbmltcG9ydCBTaGFkZXJTdGF0dXMgZnJvbSBcIlR5cGVzL3NoYWRlci1zdGF0dXNcIjtcclxuaW1wb3J0IFByb2dyYW1QYXJhbSBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1wYXJhbVwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIlV0aWxzL3JlbmRlcmVyXCI7XHJcblxyXG5jbGFzcyBOb2RlIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBOb2RlSW50ZXJmYWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBpbmRleDogc3RyaW5nLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNoaWxkcmVuOiBOb2RlW10sXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXJyYXlPZkZhY2U6IEZhY2VbXSxcclxuICAgIHB1YmxpYyB0eDogbnVtYmVyLFxyXG4gICAgcHVibGljIHR5OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgdHo6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVg6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVk6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVo6IG51bWJlcixcclxuICAgIHB1YmxpYyBzeDogbnVtYmVyLFxyXG4gICAgcHVibGljIHN5OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgc3o6IG51bWJlclxyXG4gICkge1xyXG4gICAgc3VwZXIoYXJyYXlPZkZhY2UsIHR4LCB0eSwgdHosIGFuZ2xlWCwgYW5nbGVZLCBhbmdsZVosIHN4LCBzeSwgc3opO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmROb2RlKGluZGV4OiBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGlmICh0aGlzLmluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXN1bHQ6IE5vZGU7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBmb3VuZE5vZGUgPSBjaGlsZC5maW5kTm9kZShpbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChmb3VuZE5vZGUpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IGZvdW5kTm9kZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXJOb2RlPFQgZXh0ZW5kcyBQcm9qZWN0aW9uVHlwZT4oXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcm9qZWN0aW9uVHlwZTogVCxcclxuICAgIHBhcmFtczogUHJvamVjdGlvblBhcmFtc1tUXSxcclxuICAgIGNhbWVyYTogQ2FtZXJhLFxyXG4gICAgb2Zmc2V0VHJhbnNsYXRlWDogbnVtYmVyLFxyXG4gICAgb2Zmc2V0VHJhbnNsYXRlWTogbnVtYmVyLFxyXG4gICAgYW1iaWVudENvbG9yOiBDb2xvcixcclxuICAgIGRpcmVjdGlvbmFsTGlnaHQ6IExpZ2h0LFxyXG4gICAgc2hhZGVyU3RhdHVzOiBTaGFkZXJTdGF0dXMsXHJcbiAgICBtYXBwaW5nTW9kZTogc3RyaW5nLFxyXG4gICAgY3VycmVudFdvcmxkTWF0cml4OiBNYXRyaXhcclxuICApOiB2b2lkIHtcclxuICAgIC8qIEdldCBNYXRyaXggKi9cclxuICAgIGNvbnN0IGxvY2FsTWF0cml4ID0gdGhpcy5nZXRMb2NhbE1hdHJpeCgpO1xyXG5cclxuICAgIC8qIEluaXRpYWxpemUgd2l0aCBXb3JsZCBNYXRyaXggKi9cclxuICAgIGxldCBtYXRyaXggPSBjdXJyZW50V29ybGRNYXRyaXgubXVsdGlwbHlNYXRyaXgobG9jYWxNYXRyaXgpO1xyXG5cclxuICAgIC8qIEdldCBJbnZlcnNlIFRyYW5zcG9zZSBNYXRyaXggKi9cclxuICAgIGNvbnN0IGludmVyc2VUcmFuc3Bvc2VNYXRyaXggPSBtYXRyaXguaW52ZXJzZSgpLnRyYW5zcG9zZSgpO1xyXG5cclxuICAgIC8qIEFkZCBMb29rYXQgdG8gTWF0cml4ICovXHJcbiAgICBtYXRyaXggPSBjYW1lcmEubG9va0F0KCkubXVsdGlwbHlNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICAvKiBPZmZzZXQgUG9zaXRpb24gdG8gQ2VudGVyIG9mIE9iamVjdCAqL1xyXG4gICAgbWF0cml4ID0gVHJhbnNmb3JtYXRpb24udHJhbnNsYXRpb24oXHJcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVgsXHJcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVksXHJcbiAgICAgIDBcclxuICAgICkubXVsdGlwbHlNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICAvKiBBZGQgUHJvamVjdGlvbiB0byBNYXRyaXggKi9cclxuICAgIHN3aXRjaCAocHJvamVjdGlvblR5cGUpIHtcclxuICAgICAgY2FzZSBcIm9ydGhvZ3JhcGhpY1wiOlxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICByaWdodCxcclxuICAgICAgICAgIGJvdHRvbSxcclxuICAgICAgICAgIHRvcCxcclxuICAgICAgICAgIG5lYXI6IG5lYXJPcnRob2dyYXBpYyxcclxuICAgICAgICAgIGZhcjogZmFyT3J0aG9ncmFwaGljLFxyXG4gICAgICAgIH0gPSBwYXJhbXMgYXMgUHJvamVjdGlvblBhcmFtc1tcIm9ydGhvZ3JhcGhpY1wiXTtcclxuXHJcbiAgICAgICAgbWF0cml4ID0gUHJvamVjdGlvbi5vcnRob2dyYXBoaWMoXHJcbiAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgcmlnaHQsXHJcbiAgICAgICAgICBib3R0b20sXHJcbiAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICBuZWFyT3J0aG9ncmFwaWMsXHJcbiAgICAgICAgICBmYXJPcnRob2dyYXBoaWNcclxuICAgICAgICApLm11bHRpcGx5TWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwZXJzcGVjdGl2ZVwiOlxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGZpZWxkT2ZWaWV3LFxyXG4gICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgbmVhcjogbmVhclBlcnNwZWN0aXZlLFxyXG4gICAgICAgICAgZmFyOiBmYXJQZXJzcGVjdGl2ZSxcclxuICAgICAgICB9ID0gcGFyYW1zIGFzIFByb2plY3Rpb25QYXJhbXNbXCJwZXJzcGVjdGl2ZVwiXTtcclxuXHJcbiAgICAgICAgbWF0cml4ID0gUHJvamVjdGlvbi5wZXJzcGVjdGl2ZShcclxuICAgICAgICAgIGZpZWxkT2ZWaWV3LFxyXG4gICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgbmVhclBlcnNwZWN0aXZlLFxyXG4gICAgICAgICAgZmFyUGVyc3BlY3RpdmVcclxuICAgICAgICApLm11bHRpcGx5TWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJvYmxpcXVlXCI6XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgICBvcnRob19sZWZ0LFxyXG4gICAgICAgICAgb3J0aG9fcmlnaHQsXHJcbiAgICAgICAgICBvcnRob19ib3R0b20sXHJcbiAgICAgICAgICBvcnRob190b3AsXHJcbiAgICAgICAgICBvcnRob19uZWFyLFxyXG4gICAgICAgICAgb3J0aG9fZmFyLFxyXG4gICAgICAgIH0gPSBwYXJhbXMgYXMgUHJvamVjdGlvblBhcmFtc1tcIm9ibGlxdWVcIl07XHJcblxyXG4gICAgICAgIG1hdHJpeCA9IFByb2plY3Rpb24ub2JsaXF1ZShcclxuICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgIGFuZ2xlLFxyXG4gICAgICAgICAgb3J0aG9fbGVmdCxcclxuICAgICAgICAgIG9ydGhvX3JpZ2h0LFxyXG4gICAgICAgICAgb3J0aG9fYm90dG9tLFxyXG4gICAgICAgICAgb3J0aG9fdG9wLFxyXG4gICAgICAgICAgb3J0aG9fbmVhcixcclxuICAgICAgICAgIG9ydGhvX2ZhclxyXG4gICAgICAgICkubXVsdGlwbHlNYXRyaXgobWF0cml4KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXdNYXRyaXggPSBtYXRyaXguZmxhdHRlbigpO1xyXG4gICAgY29uc3QgcmF3SW52ZXJzZVRyYW5zcG9zZU1hdHJpeCA9IGludmVyc2VUcmFuc3Bvc2VNYXRyaXguZmxhdHRlbigpO1xyXG5cclxuICAgIC8qIEdldCBBbWJpZW50IENvbG9yICovXHJcbiAgICBjb25zdCByYXdBbWJpZW50Q29sb3IgPSBhbWJpZW50Q29sb3IuZ2V0VHJpcGxldCgpO1xyXG5cclxuICAgIC8qIEdldCBEaXJlY3Rpb25hbCBMaWdodCAqL1xyXG4gICAgY29uc3QgcmF3RGlyZWN0aW9uYWxMaWdodCA9IGRpcmVjdGlvbmFsTGlnaHQuZ2V0UmF3RGlyZWN0aW9uKCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIFByb2dyYW0gUGFyYW1ldGVyICovXHJcbiAgICBjb25zdCBwcm9ncmFtUGFyYW06IFByb2dyYW1QYXJhbSA9IHtcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHJhd1Bvc2l0aW9uOiB0aGlzLmdldFJhd1Bvc2l0aW9uKCksXHJcbiAgICAgICAgcmF3Tm9ybWFsOiB0aGlzLmdldFJhd05vcm1hbCgpLFxyXG4gICAgICAgIHJhd1RleHR1cmU6IHRoaXMuZ2V0UmF3VGV4dHVyZSgpLFxyXG4gICAgICAgIHJhd1RhbmdlbnQ6IHRoaXMuZ2V0UmF3VGFuZ2VudCgpLFxyXG4gICAgICAgIHJhd0JpdGFuZ2VudDogdGhpcy5nZXRSYXdCaXRhbmdlbnQoKSxcclxuICAgICAgfSxcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICByYXdNYXRyaXgsXHJcbiAgICAgICAgcmF3SW52ZXJzZVRyYW5zcG9zZU1hdHJpeCxcclxuICAgICAgICByYXdBbWJpZW50Q29sb3IsXHJcbiAgICAgICAgcmF3RGlyZWN0aW9uYWxMaWdodCxcclxuICAgICAgICBzaGFkZXJTdGF0dXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8qIENvdW50IFZlcnRleCAqL1xyXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50VmVydGV4KCk7XHJcblxyXG4gICAgLyogUmVuZGVyICovXHJcbiAgICByZW5kZXJlci5yZW5kZXIocHJvZ3JhbVBhcmFtLCBjb3VudCwgbWFwcGluZ01vZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlclRyZWU8VCBleHRlbmRzIFByb2plY3Rpb25UeXBlPihcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByb2plY3Rpb25UeXBlOiBULFxyXG4gICAgcGFyYW1zOiBQcm9qZWN0aW9uUGFyYW1zW1RdLFxyXG4gICAgY2FtZXJhOiBDYW1lcmEsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVYOiBudW1iZXIsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVZOiBudW1iZXIsXHJcbiAgICBhbWJpZW50Q29sb3I6IENvbG9yLFxyXG4gICAgZGlyZWN0aW9uYWxMaWdodDogTGlnaHQsXHJcbiAgICBzaGFkZXJTdGF0dXM6IFNoYWRlclN0YXR1cyxcclxuICAgIG1hcHBpbmdNb2RlOiBzdHJpbmcsXHJcbiAgICBjdXJyZW50V29ybGRNYXRyaXg6IE1hdHJpeFxyXG4gICk6IHZvaWQge1xyXG4gICAgLyogUmVuZGVyIEN1cnJlbnQgTm9kZSAqL1xyXG4gICAgdGhpcy5yZW5kZXJOb2RlKFxyXG4gICAgICByZW5kZXJlcixcclxuICAgICAgcHJvamVjdGlvblR5cGUsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgY2FtZXJhLFxyXG4gICAgICBvZmZzZXRUcmFuc2xhdGVYLFxyXG4gICAgICBvZmZzZXRUcmFuc2xhdGVZLFxyXG4gICAgICBhbWJpZW50Q29sb3IsXHJcbiAgICAgIGRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgIHNoYWRlclN0YXR1cyxcclxuICAgICAgbWFwcGluZ01vZGUsXHJcbiAgICAgIGN1cnJlbnRXb3JsZE1hdHJpeFxyXG4gICAgKTtcclxuXHJcbiAgICAvKiBDaGFuZ2UgV29ybGQgTWF0cml4IGZvciBDaGlsZHJlbiAqL1xyXG4gICAgY29uc3QgY2hpbGRyZW5Xb3JsZE1hdHJpeCA9IGN1cnJlbnRXb3JsZE1hdHJpeC5tdWx0aXBseU1hdHJpeChcclxuICAgICAgdGhpcy5nZXRMb2NhbE1hdHJpeCgpXHJcbiAgICApO1xyXG5cclxuICAgIC8qIFJlbmRlciBDaGlsZHJlbiAqL1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLnJlbmRlclRyZWUoXHJcbiAgICAgICAgcmVuZGVyZXIsXHJcbiAgICAgICAgcHJvamVjdGlvblR5cGUsXHJcbiAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIGNhbWVyYSxcclxuICAgICAgICBvZmZzZXRUcmFuc2xhdGVYLFxyXG4gICAgICAgIG9mZnNldFRyYW5zbGF0ZVksXHJcbiAgICAgICAgYW1iaWVudENvbG9yLFxyXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgc2hhZGVyU3RhdHVzLFxyXG4gICAgICAgIG1hcHBpbmdNb2RlLFxyXG4gICAgICAgIGNoaWxkcmVuV29ybGRNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcbiIsImltcG9ydCBQb2ludEludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9wb2ludC1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIk9iamVjdHMvY29vcmRpbmF0ZVwiO1xyXG5cclxuY2xhc3MgUG9pbnQgZXh0ZW5kcyBDb29yZGluYXRlIGltcGxlbWVudHMgUG9pbnRJbnRlcmZhY2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSB4OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgeTogbnVtYmVyLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHo6IG51bWJlclxyXG4gICkge1xyXG4gICAgc3VwZXIoeCwgeSwgeiwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VHJpcGxldCgpOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xyXG4iLCJpbXBvcnQgU2hhcGVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvc2hhcGUtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xyXG5pbXBvcnQgTWF0cml4IGZyb20gXCJPYmplY3RzL21hdHJpeFwiO1xyXG5pbXBvcnQgRmFjZSBmcm9tIFwiT2JqZWN0cy9mYWNlXCI7XHJcbmltcG9ydCBUcmFuc2Zvcm1hdGlvbiBmcm9tIFwiT3BlcmF0aW9ucy90cmFuc2Zvcm1hdGlvblwiO1xyXG5cclxuY2xhc3MgU2hhcGUgaW1wbGVtZW50cyBTaGFwZUludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXJyYXlPZkZhY2U6IEZhY2VbXSxcclxuICAgIHB1YmxpYyB0eDogbnVtYmVyLFxyXG4gICAgcHVibGljIHR5OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgdHo6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVg6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVk6IG51bWJlcixcclxuICAgIHB1YmxpYyBhbmdsZVo6IG51bWJlcixcclxuICAgIHB1YmxpYyBzeDogbnVtYmVyLFxyXG4gICAgcHVibGljIHN5OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgc3o6IG51bWJlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG1vdmVYKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudHggPSBkZWx0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlWShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnR5ID0gZGVsdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVooZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy50eiA9IGRlbHRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZVgoYW5nbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hbmdsZVggPSBhbmdsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGVZKGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5nbGVZID0gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlWihhbmdsZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuZ2xlWiA9IGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjYWxlWChkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnN4ID0gZGVsdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2NhbGVZKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc3kgPSBkZWx0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY2FsZVooZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zeiA9IGRlbHRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJhd1Bvc2l0aW9uKCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbkFycmF5ID0gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PiBmLmdldFJhd1Bvc2l0aW9uKCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9uQXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJhd1RleHR1cmUoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIGNvbnN0IHRleHR1cmVBcnJheSA9IHRoaXMuYXJyYXlPZkZhY2UuZmxhdE1hcCgoZikgPT4gZi5nZXRSYXdUZXh0dXJlKCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRleHR1cmVBcnJheSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmF3Tm9ybWFsKCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICBjb25zdCBub3JtYWxBcnJheSA9IHRoaXMuYXJyYXlPZkZhY2UuZmxhdE1hcCgoZikgPT5cclxuICAgICAgQXJyYXk8cmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXJdPihmLmFycmF5T2ZEcmF3Lmxlbmd0aClcclxuICAgICAgICAuZmlsbChmLmZpbmROb3JtYWwoKS5nZXRUcmlwbGV0KCkpXHJcbiAgICAgICAgLmZsYXQoKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShub3JtYWxBcnJheSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmF3VGFuZ2VudCgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgY29uc3QgdGFuZ2VudEFycmF5ID0gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PlxyXG4gICAgICBBcnJheTxyZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+KGYuYXJyYXlPZkRyYXcubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKGYuZmluZFRhbmdlbnRzKClbMF0uZ2V0VHJpcGxldCgpKVxyXG4gICAgICAgIC5mbGF0KClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGFuZ2VudEFycmF5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSYXdCaXRhbmdlbnQoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIGNvbnN0IGJpdGFuZ2VudEFycmF5ID0gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PlxyXG4gICAgICBBcnJheTxyZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+KGYuYXJyYXlPZkRyYXcubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKGYuZmluZFRhbmdlbnRzKClbMV0uZ2V0VHJpcGxldCgpKVxyXG4gICAgICAgIC5mbGF0KClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYml0YW5nZW50QXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvdW50VmVydGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PiBmLmFycmF5T2ZEcmF3KS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9jYWxNYXRyaXgoKTogTWF0cml4IHtcclxuICAgIGNvbnN0IHBpdm90ID0gbmV3IFBvaW50KDAsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBUcmFuc2Zvcm1hdGlvbi5nZW5lcmFsKFxyXG4gICAgICB0aGlzLnR4LFxyXG4gICAgICB0aGlzLnR5LFxyXG4gICAgICB0aGlzLnR6LFxyXG4gICAgICB0aGlzLmFuZ2xlWCxcclxuICAgICAgdGhpcy5hbmdsZVksXHJcbiAgICAgIHRoaXMuYW5nbGVaLFxyXG4gICAgICB0aGlzLnN4LFxyXG4gICAgICB0aGlzLnN5LFxyXG4gICAgICB0aGlzLnN6LFxyXG4gICAgICBwaXZvdFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xyXG4iLCJpbXBvcnQgVGV4dHVyZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy90ZXh0dXJlLWludGVyZmFjZVwiO1xyXG5cclxuY2xhc3MgVGV4dHVyZSBpbXBsZW1lbnRzIFRleHR1cmVJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB4OiBudW1iZXIsIHB1YmxpYyByZWFkb25seSB5OiBudW1iZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWlyKCk6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0dXJlO1xyXG4iLCJpbXBvcnQgVmVjdG9ySW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL3ZlY3Rvci1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIk9iamVjdHMvY29vcmRpbmF0ZVwiO1xyXG5pbXBvcnQgQ0xPU0VTVF9UT19aRVJPIGZyb20gXCJDb25zdGFudHMvY2xvc2VzdC10by16ZXJvXCI7XHJcblxyXG5jbGFzcyBWZWN0b3IgZXh0ZW5kcyBDb29yZGluYXRlIGltcGxlbWVudHMgVmVjdG9ySW50ZXJmYWNlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHk6IG51bWJlcixcclxuICAgIHB1YmxpYyByZWFkb25seSB6OiBudW1iZXJcclxuICApIHtcclxuICAgIHN1cGVyKHgsIHksIHosIDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRyaXBsZXQoKTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCk6IFZlY3RvciB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoXHJcbiAgICAgIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMuelxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbGVuZ3RoIDwgQ0xPU0VTVF9UT19aRVJPXHJcbiAgICAgID8gbmV3IFZlY3RvcigwLCAwLCAwKVxyXG4gICAgICA6IG5ldyBWZWN0b3IodGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IFZlY3Rvcik6IFZlY3RvciB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnggLSBvdGhlci54LCB0aGlzLnkgLSBvdGhlci55LCB0aGlzLnogLSBvdGhlci56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcm9zcyhvdGhlcjogVmVjdG9yKTogVmVjdG9yIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKFxyXG4gICAgICB0aGlzLnkgKiBvdGhlci56IC0gdGhpcy56ICogb3RoZXIueSxcclxuICAgICAgdGhpcy56ICogb3RoZXIueCAtIHRoaXMueCAqIG90aGVyLnosXHJcbiAgICAgIHRoaXMueCAqIG90aGVyLnkgLSB0aGlzLnkgKiBvdGhlci54XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xyXG4iLCJpbXBvcnQgTWF0cml4IGZyb20gXCJPYmplY3RzL21hdHJpeFwiO1xyXG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0aW9uIHtcclxuICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhcclxuICAgIGxlZnQ6IG51bWJlcixcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b206IG51bWJlcixcclxuICAgIHRvcDogbnVtYmVyLFxyXG4gICAgbmVhcjogbnVtYmVyLFxyXG4gICAgZmFyOiBudW1iZXJcclxuICApOiBNYXRyaXgge1xyXG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZSgyIC8gKHJpZ2h0IC0gbGVmdCksIDAsIDAsIDApO1xyXG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAyIC8gKHRvcCAtIGJvdHRvbSksIDAsIDApO1xyXG4gICAgY29uc3QgcDMgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAyIC8gKG5lYXIgLSBmYXIpLCAwKTtcclxuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoXHJcbiAgICAgIC0ocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpLFxyXG4gICAgICAtKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKSxcclxuICAgICAgLShmYXIgKyBuZWFyKSAvIChmYXIgLSBuZWFyKSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBlcnNwZWN0aXZlKFxyXG4gICAgZmllbGRPZlZpZXc6IG51bWJlcixcclxuICAgIGFzcGVjdDogbnVtYmVyLFxyXG4gICAgbmVhcjogbnVtYmVyLFxyXG4gICAgZmFyOiBudW1iZXJcclxuICApOiBNYXRyaXgge1xyXG4gICAgY29uc3QgZiA9IE1hdGgudGFuKDAuNSAqIChNYXRoLlBJIC0gZmllbGRPZlZpZXcpKTtcclxuICAgIGNvbnN0IHcxID0gLShmYXIgKyBuZWFyKSAvIChmYXIgLSBuZWFyKTtcclxuICAgIGNvbnN0IHcyID0gKC0yICogbmVhciAqIGZhcikgLyAoZmFyIC0gbmVhcik7XHJcblxyXG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZShmIC8gYXNwZWN0LCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IHAyID0gbmV3IENvb3JkaW5hdGUoMCwgZiwgMCwgMCk7XHJcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIHcxLCAtMSk7XHJcbiAgICBjb25zdCBwNCA9IG5ldyBDb29yZGluYXRlKDAsIDAsIHcyLCAwKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9ibGlxdWUoXHJcbiAgICBmYWN0b3I6IG51bWJlcixcclxuICAgIGFuZ2xlOiBudW1iZXIsXHJcbiAgICBvcnRob19sZWZ0OiBudW1iZXIsXHJcbiAgICBvcnRob19yaWdodDogbnVtYmVyLFxyXG4gICAgb3J0aG9fYm90dG9tOiBudW1iZXIsXHJcbiAgICBvcnRob190b3A6IG51bWJlcixcclxuICAgIG9ydGhvX25lYXI6IG51bWJlcixcclxuICAgIG9ydGhvX2ZhcjogbnVtYmVyXHJcbiAgKTogTWF0cml4IHtcclxuICAgIC8qIENhbGN1bGF0ZSBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXggKi9cclxuICAgIGNvbnN0IHBPcnRobyA9IFByb2plY3Rpb24ub3J0aG9ncmFwaGljKFxyXG4gICAgICBvcnRob19sZWZ0LFxyXG4gICAgICBvcnRob19yaWdodCxcclxuICAgICAgb3J0aG9fYm90dG9tLFxyXG4gICAgICBvcnRob190b3AsXHJcbiAgICAgIG9ydGhvX25lYXIsXHJcbiAgICAgIG9ydGhvX2ZhclxyXG4gICAgKTtcclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgdHJhbnNwb3NlZCBzaGVhciBwcm9qZWN0aW9uIG1hdHJpeCAqL1xyXG4gICAgY29uc3QgY290X2FuZ2xlID0gMSAvIE1hdGgudGFuKGFuZ2xlKTtcclxuICAgIGNvbnN0IHNoZWFyWCA9IGZhY3RvciAqIGNvdF9hbmdsZTtcclxuICAgIGNvbnN0IHNoZWFyWSA9IGZhY3RvciAqIC1jb3RfYW5nbGU7XHJcbiAgICBjb25zdCBwVHJTaGVhcjEgPSBuZXcgQ29vcmRpbmF0ZSgxLCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IHBUclNoZWFyMiA9IG5ldyBDb29yZGluYXRlKDAsIDEsIDAsIDApO1xyXG4gICAgY29uc3QgcFRyU2hlYXIzID0gbmV3IENvb3JkaW5hdGUoc2hlYXJYLCBzaGVhclksIDEsIDApO1xyXG4gICAgY29uc3QgcFRyU2hlYXI0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XHJcbiAgICBjb25zdCBwVHJTaGVhciA9IG5ldyBNYXRyaXgocFRyU2hlYXIxLCBwVHJTaGVhcjIsIHBUclNoZWFyMywgcFRyU2hlYXI0KTtcclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgb2JsaXF1ZSBwcm9qZWN0aW9uIG1hdHJpeCAqL1xyXG4gICAgY29uc3Qgb2JsaXF1ZU1hdHJpeCA9IHBPcnRoby5tdWx0aXBseU1hdHJpeChwVHJTaGVhcik7XHJcblxyXG4gICAgcmV0dXJuIG9ibGlxdWVNYXRyaXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0aW9uO1xyXG4iLCJpbXBvcnQgTWF0cml4IGZyb20gXCJPYmplY3RzL21hdHJpeFwiO1xyXG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XHJcblxyXG5jbGFzcyBUcmFuc2Zvcm1hdGlvbiB7XHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXgge1xyXG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZSgxLCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IHAyID0gbmV3IENvb3JkaW5hdGUoMCwgMSwgMCwgMCk7XHJcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0aW9uKHR4OiBudW1iZXIsIHR5OiBudW1iZXIsIHR6OiBudW1iZXIpOiBNYXRyaXgge1xyXG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZSgxLCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IHAyID0gbmV3IENvb3JkaW5hdGUoMCwgMSwgMCwgMCk7XHJcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSh0eCwgdHksIHR6LCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZVg6IG51bWJlcik6IE1hdHJpeCB7XHJcbiAgICBjb25zdCBwMSA9IG5ldyBDb29yZGluYXRlKDEsIDAsIDAsIDApO1xyXG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCBNYXRoLmNvcyhhbmdsZVgpLCBNYXRoLnNpbihhbmdsZVgpLCAwKTtcclxuICAgIGNvbnN0IHAzID0gbmV3IENvb3JkaW5hdGUoMCwgLU1hdGguc2luKGFuZ2xlWCksIE1hdGguY29zKGFuZ2xlWCksIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWShhbmdsZVk6IG51bWJlcik6IE1hdHJpeCB7XHJcbiAgICBjb25zdCBwMSA9IG5ldyBDb29yZGluYXRlKE1hdGguY29zKGFuZ2xlWSksIDAsIC1NYXRoLnNpbihhbmdsZVkpLCAwKTtcclxuICAgIGNvbnN0IHAyID0gbmV3IENvb3JkaW5hdGUoMCwgMSwgMCwgMCk7XHJcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKE1hdGguc2luKGFuZ2xlWSksIDAsIE1hdGguY29zKGFuZ2xlWSksIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWihhbmdsZVo6IG51bWJlcik6IE1hdHJpeCB7XHJcbiAgICBjb25zdCBwMSA9IG5ldyBDb29yZGluYXRlKE1hdGguY29zKGFuZ2xlWiksIE1hdGguc2luKGFuZ2xlWiksIDAsIDApO1xyXG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgtTWF0aC5zaW4oYW5nbGVaKSwgTWF0aC5jb3MoYW5nbGVaKSwgMCwgMCk7XHJcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIHN6OiBudW1iZXIpOiBNYXRyaXgge1xyXG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZShzeCwgMCwgMCwgMCk7XHJcbiAgICBjb25zdCBwMiA9IG5ldyBDb29yZGluYXRlKDAsIHN5LCAwLCAwKTtcclxuICAgIGNvbnN0IHAzID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgc3osIDApO1xyXG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYWwoXHJcbiAgICB0eDogbnVtYmVyLFxyXG4gICAgdHk6IG51bWJlcixcclxuICAgIHR6OiBudW1iZXIsXHJcbiAgICBhbmdsZVg6IG51bWJlcixcclxuICAgIGFuZ2xlWTogbnVtYmVyLFxyXG4gICAgYW5nbGVaOiBudW1iZXIsXHJcbiAgICBzeDogbnVtYmVyLFxyXG4gICAgc3k6IG51bWJlcixcclxuICAgIHN6OiBudW1iZXIsXHJcbiAgICBwaXZvdDogQ29vcmRpbmF0ZVxyXG4gICk6IE1hdHJpeCB7XHJcbiAgICByZXR1cm4gVHJhbnNmb3JtYXRpb24udHJhbnNsYXRpb24odHgsIHR5LCB0eilcclxuICAgICAgLm11bHRpcGx5TWF0cml4KFRyYW5zZm9ybWF0aW9uLnRyYW5zbGF0aW9uKHBpdm90LngsIHBpdm90LnksIHBpdm90LnopKVxyXG4gICAgICAubXVsdGlwbHlNYXRyaXgoVHJhbnNmb3JtYXRpb24ucm90YXRpb25YKGFuZ2xlWCkpXHJcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblkoYW5nbGVZKSlcclxuICAgICAgLm11bHRpcGx5TWF0cml4KFRyYW5zZm9ybWF0aW9uLnJvdGF0aW9uWihhbmdsZVopKVxyXG4gICAgICAubXVsdGlwbHlNYXRyaXgoVHJhbnNmb3JtYXRpb24uc2NhbGUoc3gsIHN5LCBzeikpXHJcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbigtcGl2b3QueCwgLXBpdm90LnksIC1waXZvdC56KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1hdGlvbjtcclxuIiwiZW51bSBBbmltYXRpb25UeXBlIHtcclxuICBNT1ZFX1ggPSBcIm1vdmVYXCIsXHJcbiAgTU9WRV9ZID0gXCJtb3ZlWVwiLFxyXG4gIE1PVkVfWiA9IFwibW92ZVpcIixcclxuICBST1RBVEVfWCA9IFwicm90YXRlWFwiLFxyXG4gIFJPVEFURV9ZID0gXCJyb3RhdGVZXCIsXHJcbiAgUk9UQVRFX1ogPSBcInJvdGF0ZVpcIixcclxuICBTQ0FMRV9YID0gXCJzY2FsZVhcIixcclxuICBTQ0FMRV9ZID0gXCJzY2FsZVlcIixcclxuICBTQ0FMRV9aID0gXCJzY2FsZVpcIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uVHlwZTtcclxuIiwiZW51bSBNYXBwaW5nTW9kZSB7XHJcbiAgVEVYVFVSRSA9IFwidGV4dHVyZVwiLFxyXG4gIEVOVklST05NRU5UID0gXCJlbnZpcm9ubWVudFwiLFxyXG4gIEJVTVAgPSBcImJ1bXBcIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwcGluZ01vZGU7XHJcbiIsImVudW0gU2hhZGVyU3RhdHVzIHtcclxuICBPRkYgPSAwLFxyXG4gIE9OID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZGVyU3RhdHVzO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIChkICogTWF0aC5QSSkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyOiBudW1iZXIpIHtcclxuICByZXR1cm4gKHIgKiAxODApIC8gTWF0aC5QSTtcclxufVxyXG4iLCJmdW5jdGlvbiBpc1Bvd2VyT2ZUd28odmFsdWU6IG51bWJlcikge1xyXG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUG93ZXJPZlR3bztcclxuIiwiZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcclxuICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxyXG4gIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsXHJcbiAgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyXHJcbik6IFdlYkdMUHJvZ3JhbSB7XHJcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuXHJcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpIGFzIGJvb2xlYW47XHJcbiAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBDb3VsZCBub3QgaW5pdGlhbGl6ZSBzaGFkZXJzOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvZ3JhbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvZ3JhbTtcclxuIiwiaW1wb3J0IFByb2dyYW1QYXJhbSBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1wYXJhbVwiO1xyXG5pbXBvcnQgUHJvZ3JhbUluZm8gZnJvbSBcIlR5cGVzL3Byb2dyYW0taW5mb1wiO1xyXG5pbXBvcnQgUHJvZ3JhbUJ1ZmZlciBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1idWZmZXJcIjtcclxuaW1wb3J0IEVudmlyb25tZW50SW5mbyBmcm9tIFwiVHlwZXMvZW52aXJvbm1lbnQtaW5mb1wiO1xyXG5pbXBvcnQgTWFwcGluZ01vZGUgZnJvbSBcIlR5cGVzL21hcHBpbmctbW9kZVwiO1xyXG5pbXBvcnQgaXNQb3dlck9mVHdvIGZyb20gXCJVdGlscy9wb3dlclwiO1xyXG5cclxuY2xhc3MgUmVuZGVyZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBwdWJsaWMgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxyXG4gICAgcHVibGljIHByb2dyYW1JbmZvOiBQcm9ncmFtSW5mbyxcclxuICAgIHB1YmxpYyBwcm9ncmFtQnVmZmVyOiBQcm9ncmFtQnVmZmVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdGV4dHVyZShzb3VyY2U6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8qIENyZWF0ZSBhIFRleHR1cmUgKi9cclxuICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuXHJcbiAgICBjb25zdCB0ZXhJbWFnZUxldmVsID0gMDtcclxuICAgIGNvbnN0IHRleEltYWdlSW50ZXJuYWxGb3JtYXQgPSB0aGlzLmdsLlJHQkE7XHJcbiAgICBjb25zdCB0ZXhJbWFnZVdpZHRoID0gd2lkdGg7XHJcbiAgICBjb25zdCB0ZXhJbWFnZUhlaWdodCA9IGhlaWdodDtcclxuICAgIGNvbnN0IHRleEltYWdlQm9yZGVyID0gMDtcclxuICAgIGNvbnN0IHRleEltYWdlRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xyXG4gICAgY29uc3QgdGV4SW1hZ2VUeXBlID0gdGhpcy5nbC5VTlNJR05FRF9CWVRFO1xyXG5cclxuICAgIC8vIExvYWQgdGV4dHVyZSB3aXRoIG9wYXF1ZSBibHVlIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBpbWFnZSB0byBsb2FkXHJcbiAgICB0aGlzLmdsLnRleEltYWdlMkQoXHJcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgdGV4SW1hZ2VMZXZlbCxcclxuICAgICAgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCxcclxuICAgICAgdGV4SW1hZ2VXaWR0aCxcclxuICAgICAgdGV4SW1hZ2VIZWlnaHQsXHJcbiAgICAgIHRleEltYWdlQm9yZGVyLFxyXG4gICAgICB0ZXhJbWFnZUZvcm1hdCxcclxuICAgICAgdGV4SW1hZ2VUeXBlLFxyXG4gICAgICBuZXcgVWludDhBcnJheShbMCwgMCwgMjU1LCAyNTVdKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICB0aGlzLmdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgdGV4SW1hZ2VMZXZlbCxcclxuICAgICAgICB0ZXhJbWFnZUludGVybmFsRm9ybWF0LFxyXG4gICAgICAgIHRleEltYWdlRm9ybWF0LFxyXG4gICAgICAgIHRleEltYWdlVHlwZSxcclxuICAgICAgICBpbWFnZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGlzUG93ZXJPZlR3byhpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mVHdvKGltYWdlLmhlaWdodCkpIHtcclxuICAgICAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFX1dSQVBfUyxcclxuICAgICAgICAgIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCxcclxuICAgICAgICAgIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICAgICAgICB0aGlzLmdsLkxJTkVBUlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW52aXJvbm1lbnQoZW52aXJvbm1lbnRJbmZvOiBFbnZpcm9ubWVudEluZm8pOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBbXHJcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLFxyXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcclxuICAgICAgdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksXHJcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLFxyXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcclxuICAgICAgdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1osXHJcbiAgICBdO1xyXG5cclxuICAgIGVudmlyb25tZW50SW5mby5mb3JFYWNoKChpbmZvLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB0ZXhJbWFnZUxldmVsID0gMDtcclxuICAgICAgY29uc3QgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcclxuICAgICAgY29uc3QgdGV4SW1hZ2VXaWR0aCA9IGluZm8ud2lkdGg7XHJcbiAgICAgIGNvbnN0IHRleEltYWdlSGVpZ2h0ID0gaW5mby5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHRleEltYWdlQm9yZGVyID0gMDtcclxuICAgICAgY29uc3QgdGV4SW1hZ2VGb3JtYXQgPSB0aGlzLmdsLlJHQkE7XHJcbiAgICAgIGNvbnN0IHRleEltYWdlVHlwZSA9IHRoaXMuZ2wuVU5TSUdORURfQllURTtcclxuXHJcbiAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICB0YXJnZXRbaW5kZXhdLFxyXG4gICAgICAgIHRleEltYWdlTGV2ZWwsXHJcbiAgICAgICAgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCxcclxuICAgICAgICB0ZXhJbWFnZVdpZHRoLFxyXG4gICAgICAgIHRleEltYWdlSGVpZ2h0LFxyXG4gICAgICAgIHRleEltYWdlQm9yZGVyLFxyXG4gICAgICAgIHRleEltYWdlRm9ybWF0LFxyXG4gICAgICAgIHRleEltYWdlVHlwZSxcclxuICAgICAgICBudWxsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBpbmZvLnNvdXJjZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICB0YXJnZXRbaW5kZXhdLFxyXG4gICAgICAgICAgdGV4SW1hZ2VMZXZlbCxcclxuICAgICAgICAgIHRleEltYWdlSW50ZXJuYWxGb3JtYXQsXHJcbiAgICAgICAgICB0ZXhJbWFnZUZvcm1hdCxcclxuICAgICAgICAgIHRleEltYWdlVHlwZSxcclxuICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoXHJcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUCxcclxuICAgICAgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICAgIHRoaXMuZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKFxyXG4gICAgcHJvZ3JhbVBhcmFtOiBQcm9ncmFtUGFyYW0sXHJcbiAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgbWFwcGluZ01vZGU6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgLyogVXNlIFByb2dyYW0gKi9cclxuICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgIC8qIFVucGFjayBQcm9ncmFtIEluZm8gKi9cclxuICAgIGNvbnN0IHsgYXR0cmliTG9jYXRpb25zLCB1bmlmb3JtTG9jYXRpb25zIH0gPSB0aGlzLnByb2dyYW1JbmZvO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwb3NpdGlvbkxvY2F0aW9uLFxyXG4gICAgICBub3JtYWxMb2NhdGlvbixcclxuICAgICAgdGV4Y29vcmRMb2NhdGlvbixcclxuICAgICAgdGFuZ2VudExvY2F0aW9uLFxyXG4gICAgICBiaXRhbmdlbnRMb2NhdGlvbixcclxuICAgIH0gPSBhdHRyaWJMb2NhdGlvbnM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHdvcmxkVmlld1Byb2plY3Rpb25Mb2NhdGlvbixcclxuICAgICAgd29ybGRJbnZlcnNlVHJhbnNwb3NlTG9jYXRpb24sXHJcbiAgICAgIGFtYmllbnRMaWdodENvbG9yTG9jYXRpb24sXHJcbiAgICAgIHJldmVyc2VMaWdodERpcmVjdGlvbkxvY2F0aW9uLFxyXG4gICAgICBzaGFkaW5nTG9jYXRpb24sXHJcbiAgICAgIHRleHR1cmVMb2NhdGlvbixcclxuICAgICAgdGV4dHVyZUVudkxvY2F0aW9uLFxyXG4gICAgICB0ZXh0dXJlTW9kZUxvY2F0aW9uLFxyXG4gICAgfSA9IHVuaWZvcm1Mb2NhdGlvbnM7XHJcblxyXG4gICAgLyogVW5wYWNrIFByb2dyYW0gQnVmZmVyICovXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHBvc2l0aW9uQnVmZmVyLFxyXG4gICAgICBub3JtYWxCdWZmZXIsXHJcbiAgICAgIHRleHR1cmVCdWZmZXIsXHJcbiAgICAgIHRhbmdlbnRCdWZmZXIsXHJcbiAgICAgIGJpdGFuZ2VudEJ1ZmZlcixcclxuICAgIH0gPSB0aGlzLnByb2dyYW1CdWZmZXI7XHJcblxyXG4gICAgLyogVW5wYWNrIFByb2dyYW0gUGFyYW1ldGVyICovXHJcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHVuaWZvcm1zIH0gPSBwcm9ncmFtUGFyYW07XHJcbiAgICBjb25zdCB7IHJhd1Bvc2l0aW9uLCByYXdOb3JtYWwsIHJhd1RleHR1cmUsIHJhd1RhbmdlbnQsIHJhd0JpdGFuZ2VudCB9ID1cclxuICAgICAgYXR0cmlidXRlcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgcmF3TWF0cml4LFxyXG4gICAgICByYXdJbnZlcnNlVHJhbnNwb3NlTWF0cml4LFxyXG4gICAgICByYXdBbWJpZW50Q29sb3IsXHJcbiAgICAgIHJhd0RpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgIHNoYWRlclN0YXR1cyxcclxuICAgIH0gPSB1bmlmb3JtcztcclxuXHJcbiAgICAvKiBTZXR1cCBQb3NpdGlvbiBBdHRyaWJ1dGUgKi9cclxuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7XHJcbiAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcmF3UG9zaXRpb24sIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uU2l6ZSA9IDM7IC8qIDMgY29tcG9uZW50cyBwZXIgaXRlcmF0aW9uICovXHJcbiAgICBjb25zdCBwb3NpdGlvblR5cGUgPSB0aGlzLmdsLkZMT0FUOyAvKiBUaGUgZGF0YSBpcyAzMiBiaXQgZmxvYXQgKi9cclxuICAgIGNvbnN0IHBvc2l0aW9uTm9ybWFsaXplZCA9IGZhbHNlOyAvKiBEb24ndCBub3JtYWxpemUgdGhlIGRhdGEgKi9cclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyaWRlID0gMDsgLyogMDogTW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uICovXHJcbiAgICBjb25zdCBwb3NpdGlvbk9mZnNldCA9IDA7IC8qIFN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlciAqL1xyXG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICBwb3NpdGlvbkxvY2F0aW9uLFxyXG4gICAgICBwb3NpdGlvblNpemUsXHJcbiAgICAgIHBvc2l0aW9uVHlwZSxcclxuICAgICAgcG9zaXRpb25Ob3JtYWxpemVkLFxyXG4gICAgICBwb3NpdGlvblN0cmlkZSxcclxuICAgICAgcG9zaXRpb25PZmZzZXRcclxuICAgICk7XHJcblxyXG4gICAgLyogU2V0dXAgTm9ybWFsIEF0dHJpYnV0ZSAqL1xyXG4gICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShub3JtYWxMb2NhdGlvbik7XHJcbiAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5vcm1hbEJ1ZmZlcik7XHJcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHJhd05vcm1hbCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsU2l6ZSA9IDM7IC8qIDMgY29tcG9uZW50cyBwZXIgaXRlcmF0aW9uICovXHJcbiAgICBjb25zdCBub3JtYWxUeXBlID0gdGhpcy5nbC5GTE9BVDsgLyogVGhlIGRhdGEgaXMgMzIgYml0IGZsb2F0ICovXHJcbiAgICBjb25zdCBub3JtYWxOb3JtYWxpemVkID0gZmFsc2U7IC8qIERvbid0IG5vcm1hbGl6ZSB0aGUgZGF0YSAqL1xyXG4gICAgY29uc3Qgbm9ybWFsU3RyaWRlID0gMDsgLyogMDogTW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uICovXHJcbiAgICBjb25zdCBub3JtYWxPZmZzZXQgPSAwOyAvKiBTdGFydCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIgKi9cclxuICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgbm9ybWFsTG9jYXRpb24sXHJcbiAgICAgIG5vcm1hbFNpemUsXHJcbiAgICAgIG5vcm1hbFR5cGUsXHJcbiAgICAgIG5vcm1hbE5vcm1hbGl6ZWQsXHJcbiAgICAgIG5vcm1hbFN0cmlkZSxcclxuICAgICAgbm9ybWFsT2Zmc2V0XHJcbiAgICApO1xyXG5cclxuICAgIC8qIFNldHVwIFRleHR1cmUgQXR0cmlidXRlICovXHJcbiAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleGNvb3JkTG9jYXRpb24pO1xyXG4gICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlQnVmZmVyKTtcclxuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcmF3VGV4dHVyZSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZVNpemUgPSAyOyAvKiAyIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAqL1xyXG4gICAgY29uc3QgdGV4dHVyZVR5cGUgPSB0aGlzLmdsLkZMT0FUOyAvKiBUaGUgZGF0YSBpcyAzMiBiaXQgZmxvYXQgKi9cclxuICAgIGNvbnN0IHRleHR1cmVOb3JtYWxpemVkID0gZmFsc2U7IC8qIERvbid0IG5vcm1hbGl6ZSB0aGUgZGF0YSAqL1xyXG4gICAgY29uc3QgdGV4dHVyZVN0cmlkZSA9IDA7IC8qIDA6IE1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvbiAqL1xyXG4gICAgY29uc3QgdGV4dHVyZU9mZnNldCA9IDA7IC8qIFN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlciAqL1xyXG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICB0ZXhjb29yZExvY2F0aW9uLFxyXG4gICAgICB0ZXh0dXJlU2l6ZSxcclxuICAgICAgdGV4dHVyZVR5cGUsXHJcbiAgICAgIHRleHR1cmVOb3JtYWxpemVkLFxyXG4gICAgICB0ZXh0dXJlU3RyaWRlLFxyXG4gICAgICB0ZXh0dXJlT2Zmc2V0XHJcbiAgICApO1xyXG5cclxuICAgIC8qIFNldHVwIFRhbmdlbnQgQXR0cmlidXRlICovXHJcbiAgICBjb25zdCB0YW5nZW50U2l6ZSA9IDM7IC8qIDMgY29tcG9uZW50cyBwZXIgaXRlcmF0aW9uICovXHJcbiAgICBjb25zdCB0YW5nZW50VHlwZSA9IHRoaXMuZ2wuRkxPQVQ7IC8qIFRoZSBkYXRhIGlzIDMyIGJpdCBmbG9hdCAqL1xyXG4gICAgY29uc3QgdGFuZ2VudE5vcm1hbGl6ZWQgPSBmYWxzZTsgLyogRG9uJ3Qgbm9ybWFsaXplIHRoZSBkYXRhICovXHJcbiAgICBjb25zdCB0YW5nZW50U3RyaWRlID0gMDsgLyogMDogTW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uICovXHJcbiAgICBjb25zdCB0YW5nZW50T2Zmc2V0ID0gMDsgLyogU3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyICovXHJcbiAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRhbmdlbnRMb2NhdGlvbik7XHJcbiAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRhbmdlbnRCdWZmZXIpO1xyXG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCByYXdUYW5nZW50LCB0aGlzLmdsLlNUQVRJQ19EUkFXKTtcclxuICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgdGFuZ2VudExvY2F0aW9uLFxyXG4gICAgICB0YW5nZW50U2l6ZSxcclxuICAgICAgdGFuZ2VudFR5cGUsXHJcbiAgICAgIHRhbmdlbnROb3JtYWxpemVkLFxyXG4gICAgICB0YW5nZW50U3RyaWRlLFxyXG4gICAgICB0YW5nZW50T2Zmc2V0XHJcbiAgICApO1xyXG5cclxuICAgIC8qIFNldHVwIEJpdGFuZ2VudCBBdHRyaWJ1dGUgKi9cclxuICAgIGNvbnN0IGJpdGFuZ2VudFNpemUgPSAzOyAvKiAzIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAqL1xyXG4gICAgY29uc3QgYml0YW5nZW50VHlwZSA9IHRoaXMuZ2wuRkxPQVQ7IC8qIFRoZSBkYXRhIGlzIDMyIGJpdCBmbG9hdCAqL1xyXG4gICAgY29uc3QgYml0YW5nZW50Tm9ybWFsaXplZCA9IGZhbHNlOyAvKiBEb24ndCBub3JtYWxpemUgdGhlIGRhdGEgKi9cclxuICAgIGNvbnN0IGJpdGFuZ2VudFN0cmlkZSA9IDA7IC8qIDA6IE1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvbiAqL1xyXG4gICAgY29uc3QgYml0YW5nZW50T2Zmc2V0ID0gMDsgLyogU3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyICovXHJcbiAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGJpdGFuZ2VudExvY2F0aW9uKTtcclxuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYml0YW5nZW50QnVmZmVyKTtcclxuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcmF3Qml0YW5nZW50LCB0aGlzLmdsLlNUQVRJQ19EUkFXKTtcclxuICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgYml0YW5nZW50TG9jYXRpb24sXHJcbiAgICAgIGJpdGFuZ2VudFNpemUsXHJcbiAgICAgIGJpdGFuZ2VudFR5cGUsXHJcbiAgICAgIGJpdGFuZ2VudE5vcm1hbGl6ZWQsXHJcbiAgICAgIGJpdGFuZ2VudFN0cmlkZSxcclxuICAgICAgYml0YW5nZW50T2Zmc2V0XHJcbiAgICApO1xyXG5cclxuICAgIC8qIFNldCBXb3JsZCBWaWV3IFByb2plY3Rpb24gVW5pZm9ybSAqL1xyXG4gICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHdvcmxkVmlld1Byb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHJhd01hdHJpeCk7XHJcblxyXG4gICAgLyogU2V0IFdvcmxkIEludmVyc2UgUHJvamVjdGlvbiBVbmlmb3JtICovXHJcbiAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgIHdvcmxkSW52ZXJzZVRyYW5zcG9zZUxvY2F0aW9uLFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgcmF3SW52ZXJzZVRyYW5zcG9zZU1hdHJpeFxyXG4gICAgKTtcclxuXHJcbiAgICAvKiBTZXQgQW1iaWVudCBDb2xvciBVbmlmb3JtICovXHJcbiAgICB0aGlzLmdsLnVuaWZvcm0zZnYoYW1iaWVudExpZ2h0Q29sb3JMb2NhdGlvbiwgcmF3QW1iaWVudENvbG9yKTtcclxuXHJcbiAgICAvKiBTZXQgRGlyZWN0aW9uYWwgTGlnaHQgVW5pZm9ybSAqL1xyXG4gICAgdGhpcy5nbC51bmlmb3JtM2Z2KHJldmVyc2VMaWdodERpcmVjdGlvbkxvY2F0aW9uLCByYXdEaXJlY3Rpb25hbExpZ2h0KTtcclxuXHJcbiAgICAvKiBTZXQgU2hhZGVyIFN0YXR1cyBVbmlmb3JtICovXHJcbiAgICB0aGlzLmdsLnVuaWZvcm0xaShzaGFkaW5nTG9jYXRpb24sIHNoYWRlclN0YXR1cyk7XHJcblxyXG4gICAgc3dpdGNoIChtYXBwaW5nTW9kZSkge1xyXG4gICAgICBjYXNlIE1hcHBpbmdNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgLyogU2V0IFRleHR1cmUgVW5pZm9ybSAqL1xyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVMb2NhdGlvbiwgMCk7XHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZUVudkxvY2F0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgLyogU2V0IFRleHR1cmUgTW9kZSBVbmlmb3JtICovXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZU1vZGVMb2NhdGlvbiwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWFwcGluZ01vZGUuRU5WSVJPTk1FTlQ6XHJcbiAgICAgICAgLyogU2V0IFRleHR1cmUgVW5pZm9ybSAqL1xyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVMb2NhdGlvbiwgMSk7XHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZUVudkxvY2F0aW9uLCAwKTtcclxuXHJcbiAgICAgICAgLyogU2V0IFRleHR1cmUgTW9kZSBVbmlmb3JtICovXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZU1vZGVMb2NhdGlvbiwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWFwcGluZ01vZGUuQlVNUDpcclxuICAgICAgICAvKiBTZXQgVGV4dHVyZSBVbmlmb3JtICovXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZUxvY2F0aW9uLCAwKTtcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSh0ZXh0dXJlRW52TG9jYXRpb24sIDEpO1xyXG5cclxuICAgICAgICAvKiBTZXQgVGV4dHVyZSBNb2RlIFVuaWZvcm0gKi9cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSh0ZXh0dXJlTW9kZUxvY2F0aW9uLCAyKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvKiBEcmF3IFNoYXBlICovXHJcbiAgICBjb25zdCBwcmltaXRpdmVUeXBlID0gdGhpcy5nbC5UUklBTkdMRVM7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAwO1xyXG5cclxuICAgIHRoaXMuZ2wuZHJhd0FycmF5cyhwcmltaXRpdmVUeXBlLCBvZmZzZXQsIGNvdW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG4iLCJmdW5jdGlvbiByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVTaGFkZXIoXHJcbiAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcclxuICB0eXBlOiBudW1iZXIsXHJcbiAgc291cmNlOiBzdHJpbmdcclxuKTogV2ViR0xTaGFkZXIge1xyXG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSBhcyBib29sZWFuO1xyXG4gIGlmICghc3VjY2Vzcykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgY29tcGlsZSBzaGFkZXI6ICR7Z2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpfWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhZGVyO1xyXG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIk9iamVjdHMvY29sb3JcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdEFtYmllbnRDb2xvcigpOiBDb2xvciB7XHJcbiAgcmV0dXJuIG5ldyBDb2xvcigwLjUsIDAuNSwgMC41KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yO1xyXG4iLCJpbXBvcnQgRmFjZSBmcm9tIFwiT2JqZWN0cy9mYWNlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xyXG5pbXBvcnQgVGV4dHVyZSBmcm9tIFwiT2JqZWN0cy90ZXh0dXJlXCI7XHJcbmltcG9ydCBEcmF3IGZyb20gXCJPYmplY3RzL2RyYXdcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCk6IEZhY2VbXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIC8vIEZyb250IEZhY2VcclxuICAgIG5ldyBGYWNlKFtcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KC0yNSwgMjUsIDI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIDI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAtMjUsIDI1KSwgbmV3IFRleHR1cmUoMSwgMSkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDEpKSxcclxuICAgIF0pLFxyXG4gICAgLy8gQmFjayBGYWNlXHJcbiAgICBuZXcgRmFjZShbXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgLTI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXHJcbiAgICBdKSxcclxuICAgIC8vIFRvcCBGYWNlXHJcbiAgICBuZXcgRmFjZShbXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAwKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDApKSxcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAwKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgMjUsIDI1KSwgbmV3IFRleHR1cmUoMSwgMSkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXHJcbiAgICBdKSxcclxuICAgIC8vIEJvdHRvbSBmYWNlXHJcbiAgICBuZXcgRmFjZShbXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXHJcbiAgICBdKSxcclxuICAgIC8vIFJpZ2h0IGZhY2VcclxuICAgIG5ldyBGYWNlKFtcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAyNSwgLTI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcclxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDEpKSxcclxuICAgIF0pLFxyXG4gICAgLy8gTGVmdCBmYWNlXHJcbiAgICBuZXcgRmFjZShbXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIDI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxyXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXHJcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXHJcbiAgICBdKSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZTtcclxuIiwiaW1wb3J0IEFydGljdWxhdGVkIGZyb20gXCJPYmplY3RzL2FydGljdWxhdGVkXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCJPYmplY3RzL25vZGVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiT2JqZWN0cy9hbmltYXRpb25cIjtcclxuaW1wb3J0IExhbWJkYSBmcm9tIFwiT2JqZWN0cy9sYW1iZGFcIjtcclxuaW1wb3J0IEFuaW1hdGlvblR5cGUgZnJvbSBcIlR5cGVzL2FuaW1hdGlvbi10eXBlXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSBmcm9tIFwiTWFpbi9kZWZhdWx0LWFycmF5LW9mLWZhY2VcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdEFydGljdWxhdGVkKCk6IEFydGljdWxhdGVkIHtcclxuICByZXR1cm4gbmV3IEFydGljdWxhdGVkKFxyXG4gICAgbmV3IE5vZGUoXHJcbiAgICAgIFwicm9vdFwiLFxyXG4gICAgICBbXHJcbiAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICBcInBvaW50LWJldHdlZW4tZmVldFwiLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBuZXcgTm9kZShcclxuICAgICAgICAgICAgICBcIndhaXN0XCIsXHJcbiAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgIFwidG9yc29cIixcclxuICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZnQtYXJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1mb3JlYXJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1oYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC01MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1hcm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1mb3JlYXJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtaGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgLTEwMCxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICBcImxlZnQtbGVnXCIsXHJcbiAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZShcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1jYWxmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1mb290XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXHJcbiAgICAgICAgICAgICAgICAgIC01MCxcclxuICAgICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBuZXcgTm9kZShcclxuICAgICAgICAgICAgICAgICAgXCJyaWdodC1sZWdcIixcclxuICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1jYWxmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtZm9vdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgLTE1MCxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgW10sXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgMSxcclxuICAgICAgICAgIDFcclxuICAgICAgICApLFxyXG4gICAgICBdLFxyXG4gICAgICBbXSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgMVxyXG4gICAgKSxcclxuICAgIFtcclxuICAgICAgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICBcInBvaW50LWJldHdlZW4tZmVldFwiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuTU9WRV9ZLFxyXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gLTUwICogTWF0aC5hYnMoTWF0aC5zaW4oYykpXCIpXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgXCJsZWZ0LWxlZ1wiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKVwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwicmlnaHQtbGVnXCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWCxcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IC1NYXRoLnNpbihjKVwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwibGVmdC1jYWxmXCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWCxcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IC1NYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwicmlnaHQtY2FsZlwiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwibGVmdC1mb290XCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWCxcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IC1NYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwicmlnaHQtZm9vdFwiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwibGVmdC1hcm1cIixcclxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9aLFxyXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYykgKiAwLjRcIilcclxuICAgICAgKSxcclxuICAgICAgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICBcInJpZ2h0LWFybVwiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1osXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwibGVmdC1mb3JlYXJtXCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWixcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjEpICogMC40XCIpXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgXCJyaWdodC1mb3JlYXJtXCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWixcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjEpICogMC40XCIpXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgXCJsZWZ0LWhhbmRcIixcclxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9aLFxyXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyAtIDAuMSkgKiAwLjRcIilcclxuICAgICAgKSxcclxuICAgICAgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICBcInJpZ2h0LWhhbmRcIixcclxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9aLFxyXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyAtIDAuMSkgKiAwLjRcIilcclxuICAgICAgKSxcclxuICAgICAgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICBcIndhaXN0XCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWSxcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMpICogMC40XCIpXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgXCJ0b3Jzb1wiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1ksXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKSAqIDAuNFwiKVxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgIFwibmVja1wiLFxyXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1ksXHJcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjICsgMC4yNSkgKiAwLjRcIilcclxuICAgICAgKSxcclxuICAgICAgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICBcImhlYWRcIixcclxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9YLFxyXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyAqIDIpICogMC4yXCIpXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgXCJoZWFkXCIsXHJcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWSxcclxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjUpICogMC40XCIpXHJcbiAgICAgICksXHJcbiAgICBdXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0QXJ0aWN1bGF0ZWQ7XHJcbiIsImltcG9ydCBDYW1lcmEgZnJvbSBcIk9iamVjdHMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIlV0aWxzL2FuZ2xlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZWZhdWx0Q2FtZXJhKCk6IENhbWVyYSB7XHJcbiAgcmV0dXJuIG5ldyBDYW1lcmEoNTAwLCBkZWdUb1JhZCgwKSwgbmV3IFBvaW50KDAsIDAsIDApKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0Q2FtZXJhO1xyXG4iLCJpbXBvcnQgTGlnaHQgZnJvbSBcIk9iamVjdHMvbGlnaHRcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdERpcmVjdGlvbmFsTGlnaHQoKTogTGlnaHQge1xyXG4gIHJldHVybiBuZXcgTGlnaHQoMCwgMCwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlRGVmYXVsdERpcmVjdGlvbmFsTGlnaHQ7XHJcbiIsImltcG9ydCBjcmVhdGVTaGFkZXIgZnJvbSBcIlV0aWxzL3NoYWRlclwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvZ3JhbSBmcm9tIFwiVXRpbHMvcHJvZ3JhbVwiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiVXRpbHMvYW5nbGVcIjtcclxuaW1wb3J0IHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUgZnJvbSBcIlV0aWxzL3Jlc2l6ZS1jYW52YXNcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJVdGlscy9yZW5kZXJlclwiO1xyXG5pbXBvcnQgQXJ0aWN1bGF0ZWQgZnJvbSBcIk9iamVjdHMvYXJ0aWN1bGF0ZWRcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIk9iamVjdHMvbm9kZVwiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJPYmplY3RzL2NhbWVyYVwiO1xyXG5pbXBvcnQgTGlnaHQgZnJvbSBcIk9iamVjdHMvbGlnaHRcIjtcclxuaW1wb3J0IENvbG9yIGZyb20gXCJPYmplY3RzL2NvbG9yXCI7XHJcbmltcG9ydCBQcm9qZWN0aW9uVHlwZSBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi10eXBlXCI7XHJcbmltcG9ydCBQcm9qZWN0aW9uUGFyYW1zIGZyb20gXCJUeXBlcy9wcm9qZWN0aW9uLXBhcmFtc1wiO1xyXG5pbXBvcnQgU2hhZGVyU3RhdHVzIGZyb20gXCJUeXBlcy9zaGFkZXItc3RhdHVzXCI7XHJcbmltcG9ydCBQcm9ncmFtSW5mbyBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1pbmZvXCI7XHJcbmltcG9ydCBQcm9ncmFtQnVmZmVyIGZyb20gXCJUeXBlcy9wcm9ncmFtLWJ1ZmZlclwiO1xyXG5pbXBvcnQgTWFwcGluZ01vZGUgZnJvbSBcIlR5cGVzL21hcHBpbmctbW9kZVwiO1xyXG5pbXBvcnQgRmlsZUhhbmRsaW5nIGZyb20gXCJGaWxlcy9maWxlLWhhbmRsaW5nXCI7XHJcbmltcG9ydCBGaWxlU3lzdGVtIGZyb20gXCJGaWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVEZWZhdWx0Q2FtZXJhIGZyb20gXCJNYWluL2RlZmF1bHQtY2FtZXJhXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHRBbWJpZW50Q29sb3IgZnJvbSBcIk1haW4vZGVmYXVsdC1hbWJpZW50LWNvbG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHREaXJlY3Rpb25hbExpZ2h0IGZyb20gXCJNYWluL2RlZmF1bHQtZGlyZWN0aW9uYWwtbGlnaHRcIjtcclxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdEFydGljdWxhdGVkIGZyb20gXCJNYWluL2RlZmF1bHQtYXJ0aWN1bGF0ZWRcIjtcclxuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XHJcblxyXG4vKiBHZXQgVmVydGV4IGRhbiBGcmFnbWVudCBTb3VyY2UgKi9cclxuY29uc3QgdmVydGV4U2hhZGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlclwiKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXJcIik7XHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSB2ZXJ0ZXhTaGFkZXJFbGVtZW50LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGZyYWdtZW50U2hhZGVyRWxlbWVudC50ZXh0Q29udGVudDtcclxuXHJcbi8qIE1haW4gQ2FudmFzICovXHJcbmNvbnN0IG1haW5DYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBtYWluR0wgPSBtYWluQ2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcbi8qIFNldHVwIE1haW4gQ2FudmFzIFZpZXdwb3J0ICovXHJcbnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUobWFpbkdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XHJcbm1haW5HTC52aWV3cG9ydCgwLCAwLCBtYWluR0wuY2FudmFzLndpZHRoLCBtYWluR0wuY2FudmFzLmhlaWdodCk7XHJcblxyXG4vKiBDbGVhciBNYWluIENhbnZhcyBDb2xvciBhbmQgQnVmZmVyICovXHJcbm1haW5HTC5jbGVhcihtYWluR0wuQ09MT1JfQlVGRkVSX0JJVCB8IG1haW5HTC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbi8qIFR1cm4gT24gTWFpbiBDYW52YXMgQ3VsbGluZyAqL1xyXG5tYWluR0wuZW5hYmxlKG1haW5HTC5DVUxMX0ZBQ0UpO1xyXG5cclxuLyogRW5hYmxlIHRoZSBEZXB0aCBCdWZmZXIgaW4gTWFpbiBDYW52YXMgKi9cclxubWFpbkdMLmVuYWJsZShtYWluR0wuREVQVEhfVEVTVCk7XHJcblxyXG4vKiBBZGQgVmVydGV4IGFuZCBGcmFnbWVudCBTaGFkZXIgaW4gTWFpbiBDYW52YXMgKi9cclxuY29uc3QgbWFpblZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcclxuICBtYWluR0wsXHJcbiAgbWFpbkdMLlZFUlRFWF9TSEFERVIsXHJcbiAgdmVydGV4U2hhZGVyU291cmNlXHJcbik7XHJcbmNvbnN0IG1haW5GcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcclxuICBtYWluR0wsXHJcbiAgbWFpbkdMLkZSQUdNRU5UX1NIQURFUixcclxuICBmcmFnbWVudFNoYWRlclNvdXJjZVxyXG4pO1xyXG5cclxuLyogU2V0dXAgTWFpbiBQcm9ncmFtICovXHJcbmNvbnN0IG1haW5Qcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShtYWluR0wsIG1haW5WZXJ0ZXhTaGFkZXIsIG1haW5GcmFnbWVudFNoYWRlcik7XHJcblxyXG4vKiBTZXR1cCBNYWluIFByb2dyYW0gSW5mbyAqL1xyXG5jb25zdCBtYWluUHJvZ3JhbUluZm86IFByb2dyYW1JbmZvID0ge1xyXG4gIGF0dHJpYkxvY2F0aW9uczoge1xyXG4gICAgcG9zaXRpb25Mb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcImFfcG9zaXRpb25cIiksXHJcbiAgICBub3JtYWxMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcImFfbm9ybWFsXCIpLFxyXG4gICAgdGV4Y29vcmRMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcImFfdGV4Y29vcmRcIiksXHJcbiAgICB0YW5nZW50TG9jYXRpb246IG1haW5HTC5nZXRBdHRyaWJMb2NhdGlvbihtYWluUHJvZ3JhbSwgXCJhX3ZlcnRleHRhbmdlbnRcIiksXHJcbiAgICBiaXRhbmdlbnRMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICBtYWluUHJvZ3JhbSxcclxuICAgICAgXCJhX3ZlcnRleGJpdGFuZ2VudFwiXHJcbiAgICApLFxyXG4gIH0sXHJcbiAgdW5pZm9ybUxvY2F0aW9uczoge1xyXG4gICAgd29ybGRWaWV3UHJvamVjdGlvbkxvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICBtYWluUHJvZ3JhbSxcclxuICAgICAgXCJ1X3dvcmxkVmlld1Byb2plY3Rpb25cIlxyXG4gICAgKSxcclxuICAgIHdvcmxkSW52ZXJzZVRyYW5zcG9zZUxvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICBtYWluUHJvZ3JhbSxcclxuICAgICAgXCJ1X3dvcmxkSW52ZXJzZVRyYW5zcG9zZVwiXHJcbiAgICApLFxyXG4gICAgYW1iaWVudExpZ2h0Q29sb3JMb2NhdGlvbjogbWFpbkdMLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgbWFpblByb2dyYW0sXHJcbiAgICAgIFwidV9hbWJpZW50TGlnaHRDb2xvclwiXHJcbiAgICApLFxyXG4gICAgcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uTG9jYXRpb246IG1haW5HTC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgIG1haW5Qcm9ncmFtLFxyXG4gICAgICBcInVfcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uXCJcclxuICAgICksXHJcbiAgICBzaGFkaW5nTG9jYXRpb246IG1haW5HTC5nZXRVbmlmb3JtTG9jYXRpb24obWFpblByb2dyYW0sIFwidV9zaGFkaW5nXCIpLFxyXG4gICAgdGV4dHVyZUxvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcInVfdGV4dHVyZVwiKSxcclxuICAgIHRleHR1cmVFbnZMb2NhdGlvbjogbWFpbkdMLmdldFVuaWZvcm1Mb2NhdGlvbihtYWluUHJvZ3JhbSwgXCJ1X3RleHR1cmVfZW52XCIpLFxyXG4gICAgdGV4dHVyZU1vZGVMb2NhdGlvbjogbWFpbkdMLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgbWFpblByb2dyYW0sXHJcbiAgICAgIFwidV90ZXh0dXJlX21vZGVcIlxyXG4gICAgKSxcclxuICB9LFxyXG59O1xyXG5cclxuLyogU2V0dXAgTWFpbiBQcm9ncmFtIEJ1ZmZlciAqL1xyXG5jb25zdCBtYWluUHJvZ3JhbUJ1ZmZlcjogUHJvZ3JhbUJ1ZmZlciA9IHtcclxuICBwb3NpdGlvbkJ1ZmZlcjogbWFpbkdMLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gIG5vcm1hbEJ1ZmZlcjogbWFpbkdMLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gIHRleHR1cmVCdWZmZXI6IG1haW5HTC5jcmVhdGVCdWZmZXIoKSxcclxuICB0YW5nZW50QnVmZmVyOiBtYWluR0wuY3JlYXRlQnVmZmVyKCksXHJcbiAgYml0YW5nZW50QnVmZmVyOiBtYWluR0wuY3JlYXRlQnVmZmVyKCksXHJcbn07XHJcblxyXG4vKiBTZXR1cCBNYWluIFJlbmRlcmVyICovXHJcbmNvbnN0IG1haW5SZW5kZXJlciA9IG5ldyBSZW5kZXJlcihcclxuICBtYWluR0wsXHJcbiAgbWFpblByb2dyYW0sXHJcbiAgbWFpblByb2dyYW1JbmZvLFxyXG4gIG1haW5Qcm9ncmFtQnVmZmVyXHJcbik7XHJcblxyXG4vKiBTZWNvbmRhcnkgQ2FudmFzICovXHJcbmNvbnN0IHNlY29uZGFyeUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2Vjb25kYXJ5LWNhbnZhc1wiXHJcbikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmNvbnN0IHNlY29uZGFyeUdMID0gc2Vjb25kYXJ5Q2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcbi8qIFNldHVwIFNlY29uZGFyeSBDYW52YXMgVmlld3BvcnQgKi9cclxucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShzZWNvbmRhcnlHTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpO1xyXG5zZWNvbmRhcnlHTC52aWV3cG9ydCgwLCAwLCBzZWNvbmRhcnlHTC5jYW52YXMud2lkdGgsIHNlY29uZGFyeUdMLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuLyogQ2xlYXIgU2Vjb25kYXJ5IENhbnZhcyBDb2xvciBhbmQgQnVmZmVyICovXHJcbnNlY29uZGFyeUdMLmNsZWFyKHNlY29uZGFyeUdMLkNPTE9SX0JVRkZFUl9CSVQgfCBzZWNvbmRhcnlHTC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbi8qIFR1cm4gT24gU2Vjb25kYXJ5IENhbnZhcyBDdWxsaW5nICovXHJcbnNlY29uZGFyeUdMLmVuYWJsZShzZWNvbmRhcnlHTC5DVUxMX0ZBQ0UpO1xyXG5cclxuLyogRW5hYmxlIHRoZSBEZXB0aCBCdWZmZXIgaW4gU2Vjb25kYXJ5IENhbnZhcyAqL1xyXG5zZWNvbmRhcnlHTC5lbmFibGUoc2Vjb25kYXJ5R0wuREVQVEhfVEVTVCk7XHJcblxyXG4vKiBBZGQgVmVydGV4IGFuZCBGcmFnbWVudCBTaGFkZXIgaW4gU2Vjb25kYXJ5IENhbnZhcyAqL1xyXG5jb25zdCBzZWNvbmRhcnlWZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoXHJcbiAgc2Vjb25kYXJ5R0wsXHJcbiAgc2Vjb25kYXJ5R0wuVkVSVEVYX1NIQURFUixcclxuICB2ZXJ0ZXhTaGFkZXJTb3VyY2VcclxuKTtcclxuY29uc3Qgc2Vjb25kYXJ5RnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoXHJcbiAgc2Vjb25kYXJ5R0wsXHJcbiAgc2Vjb25kYXJ5R0wuRlJBR01FTlRfU0hBREVSLFxyXG4gIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbik7XHJcblxyXG4vKiBTZXR1cCBTZWNvbmRhcnkgUHJvZ3JhbSAqL1xyXG5jb25zdCBzZWNvbmRhcnlQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcclxuICBzZWNvbmRhcnlHTCxcclxuICBzZWNvbmRhcnlWZXJ0ZXhTaGFkZXIsXHJcbiAgc2Vjb25kYXJ5RnJhZ21lbnRTaGFkZXJcclxuKTtcclxuXHJcbi8qIFNldHVwIFNlY29uZGFyeSBQcm9ncmFtIEluZm8gKi9cclxuY29uc3Qgc2Vjb25kYXJ5UHJvZ3JhbUluZm86IFByb2dyYW1JbmZvID0ge1xyXG4gIGF0dHJpYkxvY2F0aW9uczoge1xyXG4gICAgcG9zaXRpb25Mb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0QXR0cmliTG9jYXRpb24oXHJcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXHJcbiAgICAgIFwiYV9wb3NpdGlvblwiXHJcbiAgICApLFxyXG4gICAgbm9ybWFsTG9jYXRpb246IHNlY29uZGFyeUdMLmdldEF0dHJpYkxvY2F0aW9uKHNlY29uZGFyeVByb2dyYW0sIFwiYV9ub3JtYWxcIiksXHJcbiAgICB0ZXhjb29yZExvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcclxuICAgICAgXCJhX3RleGNvb3JkXCJcclxuICAgICksXHJcbiAgICB0YW5nZW50TG9jYXRpb246IHNlY29uZGFyeUdMLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxyXG4gICAgICBcImFfdmVydGV4dGFuZ2VudFwiXHJcbiAgICApLFxyXG4gICAgYml0YW5nZW50TG9jYXRpb246IHNlY29uZGFyeUdMLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxyXG4gICAgICBcImFfdmVydGV4Yml0YW5nZW50XCJcclxuICAgICksXHJcbiAgfSxcclxuICB1bmlmb3JtTG9jYXRpb25zOiB7XHJcbiAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcclxuICAgICAgXCJ1X3dvcmxkVmlld1Byb2plY3Rpb25cIlxyXG4gICAgKSxcclxuICAgIHdvcmxkSW52ZXJzZVRyYW5zcG9zZUxvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXHJcbiAgICAgIFwidV93b3JsZEludmVyc2VUcmFuc3Bvc2VcIlxyXG4gICAgKSxcclxuICAgIGFtYmllbnRMaWdodENvbG9yTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcclxuICAgICAgXCJ1X2FtYmllbnRMaWdodENvbG9yXCJcclxuICAgICksXHJcbiAgICByZXZlcnNlTGlnaHREaXJlY3Rpb25Mb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxyXG4gICAgICBcInVfcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uXCJcclxuICAgICksXHJcbiAgICBzaGFkaW5nTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcclxuICAgICAgXCJ1X3NoYWRpbmdcIlxyXG4gICAgKSxcclxuICAgIHRleHR1cmVMb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxyXG4gICAgICBcInVfdGV4dHVyZVwiXHJcbiAgICApLFxyXG4gICAgdGV4dHVyZUVudkxvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXHJcbiAgICAgIFwidV90ZXh0dXJlX2VudlwiXHJcbiAgICApLFxyXG4gICAgdGV4dHVyZU1vZGVMb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxyXG4gICAgICBcInVfdGV4dHVyZV9tb2RlXCJcclxuICAgICksXHJcbiAgfSxcclxufTtcclxuXHJcbi8qIFNldHVwIFNlY29uZGFyeSBQcm9ncmFtIEJ1ZmZlciAqL1xyXG5jb25zdCBzZWNvbmRhcnlQcm9ncmFtQnVmZmVyOiBQcm9ncmFtQnVmZmVyID0ge1xyXG4gIHBvc2l0aW9uQnVmZmVyOiBzZWNvbmRhcnlHTC5jcmVhdGVCdWZmZXIoKSxcclxuICBub3JtYWxCdWZmZXI6IHNlY29uZGFyeUdMLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gIHRleHR1cmVCdWZmZXI6IHNlY29uZGFyeUdMLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gIHRhbmdlbnRCdWZmZXI6IHNlY29uZGFyeUdMLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gIGJpdGFuZ2VudEJ1ZmZlcjogc2Vjb25kYXJ5R0wuY3JlYXRlQnVmZmVyKCksXHJcbn07XHJcblxyXG4vKiBTZXR1cCBTZWNvbmRhcnkgUmVuZGVyZXIgKi9cclxuY29uc3Qgc2Vjb25kYXJ5UmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoXHJcbiAgc2Vjb25kYXJ5R0wsXHJcbiAgc2Vjb25kYXJ5UHJvZ3JhbSxcclxuICBzZWNvbmRhcnlQcm9ncmFtSW5mbyxcclxuICBzZWNvbmRhcnlQcm9ncmFtQnVmZmVyXHJcbik7XHJcblxyXG4vKiBHZXQgSFRNTCBFbGVtZW50ICovXHJcbi8qIE1haW4gQ2FudmFzIENvbnRyb2wgKi9cclxuY29uc3Qgc2xpZGVyVHJhbnNsYXRlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLXRyYW5zbGF0ZS14XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFRyYW5zbGF0ZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS14XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyVHJhbnNsYXRlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLXRyYW5zbGF0ZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFRyYW5zbGF0ZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS15XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyVHJhbnNsYXRlWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLXRyYW5zbGF0ZS16XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFRyYW5zbGF0ZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS16XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyQW5nbGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJzbGlkZXItYW5nbGUteFwiXHJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbGFiZWxBbmdsZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWFuZ2xlLXhcIik7XHJcblxyXG5jb25zdCBzbGlkZXJBbmdsZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1hbmdsZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbEFuZ2xlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtYW5nbGUteVwiKTtcclxuXHJcbmNvbnN0IHNsaWRlckFuZ2xlWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLWFuZ2xlLXpcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsQW5nbGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS16XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyU2NhbGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJzbGlkZXItc2NhbGUteFwiXHJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbGFiZWxTY2FsZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXNjYWxlLXhcIik7XHJcblxyXG5jb25zdCBzbGlkZXJTY2FsZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1zY2FsZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFNjYWxlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtc2NhbGUteVwiKTtcclxuXHJcbmNvbnN0IHNsaWRlclNjYWxlWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLXNjYWxlLXpcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsU2NhbGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS16XCIpO1xyXG5cclxuLyogQ2FtZXJhIENvbnRyb2wgRWxlbWVudHMgKi9cclxuY29uc3Qgc2xpZGVyQ2FtQW5nbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1jYW0tYW5nbGVcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsQ2FtQW5nbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWNhbS1hbmdsZVwiKTtcclxuXHJcbmNvbnN0IHNsaWRlckNhbVJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLWNhbS1yYWRpdXNcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsQ2FtUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1jYW0tcmFkaXVzXCIpO1xyXG5cclxuLyogU2Vjb25kYXJ5IENhbnZhcyBDb250cm9sICovXHJcbi8qIEdldCBIVE1MIEVsZW1lbnQgKi9cclxuY29uc3Qgc2xpZGVyVHJhbnNsYXRlU2hhcGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJzbGlkZXItdHJhbnNsYXRlLXNoYXBlLXhcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsVHJhbnNsYXRlU2hhcGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC10cmFuc2xhdGUtc2hhcGUteFwiKTtcclxuXHJcbmNvbnN0IHNsaWRlclRyYW5zbGF0ZVNoYXBlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLXRyYW5zbGF0ZS1zaGFwZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFRyYW5zbGF0ZVNoYXBlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtdHJhbnNsYXRlLXNoYXBlLXlcIik7XHJcblxyXG5jb25zdCBzbGlkZXJUcmFuc2xhdGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci10cmFuc2xhdGUtc2hhcGUtelwiXHJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbGFiZWxUcmFuc2xhdGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS1zaGFwZS16XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyQW5nbGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1hbmdsZS1zaGFwZS14XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbEFuZ2xlU2hhcGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS1zaGFwZS14XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyQW5nbGVTaGFwZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1hbmdsZS1zaGFwZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbEFuZ2xlU2hhcGVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS1zaGFwZS15XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyQW5nbGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1hbmdsZS1zaGFwZS16XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbEFuZ2xlU2hhcGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS1zaGFwZS16XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyU2NhbGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1zY2FsZS1zaGFwZS14XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFNjYWxlU2hhcGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS1zaGFwZS14XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyU2NhbGVTaGFwZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1zY2FsZS1zaGFwZS15XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFNjYWxlU2hhcGVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS1zaGFwZS15XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyU2NhbGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInNsaWRlci1zY2FsZS1zaGFwZS16XCJcclxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBsYWJlbFNjYWxlU2hhcGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS1zaGFwZS16XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyQ2FtQW5nbGVTaGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLWNhbS1hbmdsZS1zaGFwZVwiXHJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbGFiZWxDYW1BbmdsZVNoYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1jYW0tYW5nbGUtc2hhcGVcIik7XHJcblxyXG5jb25zdCBzbGlkZXJDYW1SYWRpdXNTaGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwic2xpZGVyLWNhbS1yYWRpdXMtc2hhcGVcIlxyXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxhYmVsQ2FtUmFkaXVzU2hhcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWNhbS1yYWRpdXMtc2hhcGVcIik7XHJcblxyXG5jb25zdCBsaXN0T2ZQcm9qZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJsaXN0LW9mLXByb2plY3Rpb25cIlxyXG4pIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuY29uc3QgbGlzdE9mTWFwcGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwibGlzdC1vZi1tYXBwaW5nXCJcclxuKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbmNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWQtYnRuXCIpO1xyXG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ0blwiKTtcclxuY29uc3Qgc2hhZGluZ01vZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoYWRpbmctbW9kZS1idG5cIik7XHJcbmNvbnN0IGFuaW1hdGlvbk1vZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvbi1tb2RlLWJ0blwiKTtcclxuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ0blwiKTtcclxuY29uc3QgaGVscEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1idG5cIik7XHJcbmNvbnN0IGhlbHBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1wYW5lbFwiKTtcclxuY29uc3QgY2xvc2VIZWxwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1oZWxwLWJ0blwiKTtcclxuY29uc3QgY29tcG9uZW50VHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcG9uZW50LXRyZWVcIik7XHJcblxyXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXHJcbmxldCBhcnRpY3VsYXRlZDogQXJ0aWN1bGF0ZWQ7XHJcbmxldCBzZWxlY3RlZE5vZGU6IE5vZGU7XHJcblxyXG5sZXQgY2FtZXJhOiBDYW1lcmE7XHJcbmxldCBjYW1lcmFTaGFwZTogQ2FtZXJhO1xyXG5sZXQgYW1iaWVudENvbG9yOiBDb2xvcjtcclxubGV0IGRpcmVjdGlvbmFsTGlnaHQ6IExpZ2h0O1xyXG5cclxubGV0IG9mZnNldFRyYW5zbGF0ZSA9IHtcclxuICBvcnRob2dyYXBoaWM6IHtcclxuICAgIHg6IG1haW5DYW52YXMud2lkdGggLyAyLFxyXG4gICAgeTogbWFpbkNhbnZhcy5oZWlnaHQsXHJcbiAgfSxcclxuICBwZXJzcGVjdGl2ZToge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgfSxcclxuICBvYmxpcXVlOiB7XHJcbiAgICB4OiBtYWluQ2FudmFzLndpZHRoIC8gMS41LFxyXG4gICAgeTogMCxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IG9mZnNldFRyYW5zbGF0ZVNlY29uZGFyeUNhbnZhcyA9IHtcclxuICBvcnRob2dyYXBoaWM6IHtcclxuICAgIHg6IHNlY29uZGFyeUNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICB5OiBzZWNvbmRhcnlDYW52YXMuaGVpZ2h0LFxyXG4gIH0sXHJcbiAgcGVyc3BlY3RpdmU6IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gIH0sXHJcbiAgb2JsaXF1ZToge1xyXG4gICAgeDogc2Vjb25kYXJ5Q2FudmFzLndpZHRoIC8gMS41LFxyXG4gICAgeTogMCxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IHByb2plY3Rpb25UeXBlOiBQcm9qZWN0aW9uVHlwZSA9IFwib3J0aG9ncmFwaGljXCI7XHJcbmxldCBwcm9qZWN0aW9uUGFyYW1zOiBQcm9qZWN0aW9uUGFyYW1zID0ge1xyXG4gIG9ydGhvZ3JhcGhpYzoge1xyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAobWFpbkdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50V2lkdGgsXHJcbiAgICBib3R0b206IChtYWluR0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRIZWlnaHQsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBuZWFyOiAyMDAwLFxyXG4gICAgZmFyOiAtMjAwMCxcclxuICB9LFxyXG4gIHBlcnNwZWN0aXZlOiB7XHJcbiAgICBmaWVsZE9mVmlldzogZGVnVG9SYWQoNjApLFxyXG4gICAgYXNwZWN0OlxyXG4gICAgICAobWFpbkdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50V2lkdGggL1xyXG4gICAgICAobWFpbkdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50SGVpZ2h0LFxyXG4gICAgbmVhcjogMSxcclxuICAgIGZhcjogMjAwMCxcclxuICB9LFxyXG4gIG9ibGlxdWU6IHtcclxuICAgIGZhY3RvcjogMC4xLFxyXG4gICAgYW5nbGU6IGRlZ1RvUmFkKDE1KSxcclxuICAgIG9ydGhvX2xlZnQ6IDAsXHJcbiAgICBvcnRob19yaWdodDogKG1haW5HTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudFdpZHRoLFxyXG4gICAgb3J0aG9fYm90dG9tOiAobWFpbkdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50SGVpZ2h0LFxyXG4gICAgb3J0aG9fdG9wOiAwLFxyXG4gICAgb3J0aG9fbmVhcjogMjAwMCxcclxuICAgIG9ydGhvX2ZhcjogLTIwMDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBwcm9qZWN0aW9uUGFyYW1zU2Vjb25kYXJ5OiBQcm9qZWN0aW9uUGFyYW1zID0ge1xyXG4gIG9ydGhvZ3JhcGhpYzoge1xyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAoc2Vjb25kYXJ5R0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRXaWR0aCxcclxuICAgIGJvdHRvbTogKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50SGVpZ2h0LFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbmVhcjogMjAwMCxcclxuICAgIGZhcjogLTIwMDAsXHJcbiAgfSxcclxuICBwZXJzcGVjdGl2ZToge1xyXG4gICAgZmllbGRPZlZpZXc6IGRlZ1RvUmFkKDYwKSxcclxuICAgIGFzcGVjdDpcclxuICAgICAgKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50V2lkdGggL1xyXG4gICAgICAoc2Vjb25kYXJ5R0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRIZWlnaHQsXHJcbiAgICBuZWFyOiAxLFxyXG4gICAgZmFyOiAyMDAwLFxyXG4gIH0sXHJcbiAgb2JsaXF1ZToge1xyXG4gICAgZmFjdG9yOiAwLjEsXHJcbiAgICBhbmdsZTogZGVnVG9SYWQoMTUpLFxyXG4gICAgb3J0aG9fbGVmdDogMCxcclxuICAgIG9ydGhvX3JpZ2h0OiAoc2Vjb25kYXJ5R0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRXaWR0aCxcclxuICAgIG9ydGhvX2JvdHRvbTogKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50SGVpZ2h0LFxyXG4gICAgb3J0aG9fdG9wOiAwLFxyXG4gICAgb3J0aG9fbmVhcjogMjAwMCxcclxuICAgIG9ydGhvX2ZhcjogLTIwMDAsXHJcbiAgfSxcclxufTtcclxubGV0IHNoYWRlclN0YXR1czogU2hhZGVyU3RhdHVzID0gU2hhZGVyU3RhdHVzLk9GRjtcclxubGV0IGFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5sZXQgbWFwcGluZ01vZGU6IE1hcHBpbmdNb2RlID0gTWFwcGluZ01vZGUuVEVYVFVSRTtcclxuXHJcbi8qIEdsb2JhbCBDb25zdGFudCAqL1xyXG5jb25zdCBhbmltYXRpb25TcGVlZCA9IDEuMjtcclxuXHJcbi8qIFJlbmRlciBNYWluIENhbnZhcyAqL1xyXG5jb25zdCByZW5kZXJNYWluQ2FudmFzID0gKG5vdzogRE9NSGlnaFJlc1RpbWVTdGFtcCkgPT4ge1xyXG4gIC8qIENvbnZlbnQgdG8gU2Vjb25kICovXHJcbiAgbm93ICo9IDAuMDA1O1xyXG5cclxuICAvKiBBbmltYXRlICovXHJcbiAgaWYgKGFuaW1hdGlvbikge1xyXG4gICAgY29uc3QgYyA9IGFuaW1hdGlvblNwZWVkICogbm93O1xyXG5cclxuICAgIGFydGljdWxhdGVkLmFwcGx5QW5pbWF0aW9uKGMpO1xyXG4gIH1cclxuXHJcbiAgLyogR2V0IEN1cnJlbnQgTGlnaHQgKi9cclxuICBjb25zdCBjdXJyZW50TGlnaHQgPVxyXG4gICAgcHJvamVjdGlvblR5cGUgPT09IFwicGVyc3BlY3RpdmVcIlxyXG4gICAgICA/IGRpcmVjdGlvbmFsTGlnaHQucmV2ZXJzZSgpXHJcbiAgICAgIDogZGlyZWN0aW9uYWxMaWdodDtcclxuXHJcbiAgLyogUmVuZGVyIEFydGljdWxhdGVkICovXHJcbiAgYXJ0aWN1bGF0ZWQucmVuZGVyVHJlZShcclxuICAgIG1haW5SZW5kZXJlcixcclxuICAgIHByb2plY3Rpb25UeXBlLFxyXG4gICAgcHJvamVjdGlvblBhcmFtc1twcm9qZWN0aW9uVHlwZV0sXHJcbiAgICBjYW1lcmEsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVbcHJvamVjdGlvblR5cGVdLngsXHJcbiAgICBvZmZzZXRUcmFuc2xhdGVbcHJvamVjdGlvblR5cGVdLnksXHJcbiAgICBhbWJpZW50Q29sb3IsXHJcbiAgICBjdXJyZW50TGlnaHQsXHJcbiAgICBzaGFkZXJTdGF0dXMsXHJcbiAgICBtYXBwaW5nTW9kZVxyXG4gICk7XHJcblxyXG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgc2VsZWN0ZWROb2RlLnJlbmRlclRyZWUoXHJcbiAgICAgIHNlY29uZGFyeVJlbmRlcmVyLFxyXG4gICAgICBwcm9qZWN0aW9uVHlwZSxcclxuICAgICAgcHJvamVjdGlvblBhcmFtc1NlY29uZGFyeVtwcm9qZWN0aW9uVHlwZV0sXHJcbiAgICAgIGNhbWVyYVNoYXBlLFxyXG4gICAgICBvZmZzZXRUcmFuc2xhdGVTZWNvbmRhcnlDYW52YXNbcHJvamVjdGlvblR5cGVdLngsXHJcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVNlY29uZGFyeUNhbnZhc1twcm9qZWN0aW9uVHlwZV0ueSxcclxuICAgICAgYW1iaWVudENvbG9yLFxyXG4gICAgICBjdXJyZW50TGlnaHQsXHJcbiAgICAgIHNoYWRlclN0YXR1cyxcclxuICAgICAgbWFwcGluZ01vZGUsXHJcbiAgICAgIFRyYW5zZm9ybWF0aW9uLmlkZW50aXR5KClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiBSZW5kZXIgUmVjdXJzaXZlbHkgKi9cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck1haW5DYW52YXMpO1xyXG59O1xyXG5cclxuLyogSW5pdGlhbGl6ZSBEZWZhdWx0IFZhbHVlICovXHJcbmNvbnN0IGluaXRpYWxpemVEZWZhdWx0VmFsdWUgPSAoXHJcbiAgbmV3QXJ0aWN1bGF0ZWQ6IEFydGljdWxhdGVkLFxyXG4gIG5ld0NhbWVyYTogQ2FtZXJhLFxyXG4gIG5ld0NhbWVyYVNoYXBlOiBDYW1lcmEsXHJcbiAgbmV3QW1iaWVudENvbG9yOiBDb2xvcixcclxuICBuZXdEaXJlY3Rpb25hbExpZ2h0OiBMaWdodFxyXG4pID0+IHtcclxuICBhcnRpY3VsYXRlZCA9IG5ld0FydGljdWxhdGVkO1xyXG4gIGNhbWVyYSA9IG5ld0NhbWVyYTtcclxuICBjYW1lcmFTaGFwZSA9IG5ld0NhbWVyYVNoYXBlO1xyXG4gIGFtYmllbnRDb2xvciA9IG5ld0FtYmllbnRDb2xvcjtcclxuICBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3RGlyZWN0aW9uYWxMaWdodDtcclxuXHJcbiAgc2xpZGVyVHJhbnNsYXRlWC52YWx1ZUFzTnVtYmVyID0gYXJ0aWN1bGF0ZWQucm9vdC50eDtcclxuICBsYWJlbFRyYW5zbGF0ZVgudGV4dENvbnRlbnQgPSBhcnRpY3VsYXRlZC5yb290LnR4LnRvU3RyaW5nKCk7XHJcblxyXG4gIHNsaWRlclRyYW5zbGF0ZVkudmFsdWVBc051bWJlciA9IGFydGljdWxhdGVkLnJvb3QudHk7XHJcbiAgbGFiZWxUcmFuc2xhdGVZLnRleHRDb250ZW50ID0gYXJ0aWN1bGF0ZWQucm9vdC50eS50b1N0cmluZygpO1xyXG5cclxuICBzbGlkZXJUcmFuc2xhdGVaLnZhbHVlQXNOdW1iZXIgPSBhcnRpY3VsYXRlZC5yb290LnR6O1xyXG4gIGxhYmVsVHJhbnNsYXRlWi50ZXh0Q29udGVudCA9IGFydGljdWxhdGVkLnJvb3QudHoudG9TdHJpbmcoKTtcclxuXHJcbiAgc2xpZGVyQW5nbGVYLnZhbHVlQXNOdW1iZXIgPSBNYXRoLnJvdW5kKHJhZFRvRGVnKGFydGljdWxhdGVkLnJvb3QuYW5nbGVYKSk7XHJcbiAgbGFiZWxBbmdsZVgudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxyXG4gICAgcmFkVG9EZWcoYXJ0aWN1bGF0ZWQucm9vdC5hbmdsZVgpXHJcbiAgKS50b1N0cmluZygpO1xyXG5cclxuICBzbGlkZXJBbmdsZVkudmFsdWVBc051bWJlciA9IE1hdGgucm91bmQocmFkVG9EZWcoYXJ0aWN1bGF0ZWQucm9vdC5hbmdsZVkpKTtcclxuICBsYWJlbEFuZ2xlWS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoXHJcbiAgICByYWRUb0RlZyhhcnRpY3VsYXRlZC5yb290LmFuZ2xlWSlcclxuICApLnRvU3RyaW5nKCk7XHJcblxyXG4gIHNsaWRlckFuZ2xlWi52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhhcnRpY3VsYXRlZC5yb290LmFuZ2xlWikpO1xyXG4gIGxhYmVsQW5nbGVaLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcclxuICAgIHJhZFRvRGVnKGFydGljdWxhdGVkLnJvb3QuYW5nbGVaKVxyXG4gICkudG9TdHJpbmcoKTtcclxuXHJcbiAgc2xpZGVyU2NhbGVYLnZhbHVlQXNOdW1iZXIgPSBhcnRpY3VsYXRlZC5yb290LnN4O1xyXG4gIGxhYmVsU2NhbGVYLnRleHRDb250ZW50ID0gYXJ0aWN1bGF0ZWQucm9vdC5zeC50b1N0cmluZygpO1xyXG5cclxuICBzbGlkZXJTY2FsZVkudmFsdWVBc051bWJlciA9IGFydGljdWxhdGVkLnJvb3Quc3k7XHJcbiAgbGFiZWxTY2FsZVkudGV4dENvbnRlbnQgPSBhcnRpY3VsYXRlZC5yb290LnN5LnRvU3RyaW5nKCk7XHJcblxyXG4gIHNsaWRlclNjYWxlWi52YWx1ZUFzTnVtYmVyID0gYXJ0aWN1bGF0ZWQucm9vdC5zejtcclxuICBsYWJlbFNjYWxlWi50ZXh0Q29udGVudCA9IGFydGljdWxhdGVkLnJvb3Quc3oudG9TdHJpbmcoKTtcclxuXHJcbiAgc2xpZGVyQ2FtQW5nbGUudmFsdWVBc051bWJlciA9IHJhZFRvRGVnKGNhbWVyYS5hbmdsZSk7XHJcbiAgbGFiZWxDYW1BbmdsZS50ZXh0Q29udGVudCA9IHJhZFRvRGVnKGNhbWVyYS5hbmdsZSkudG9TdHJpbmcoKTtcclxuXHJcbiAgc2xpZGVyQ2FtUmFkaXVzLnZhbHVlQXNOdW1iZXIgPSBjYW1lcmEucmFkaXVzO1xyXG4gIGxhYmVsQ2FtUmFkaXVzLnRleHRDb250ZW50ID0gY2FtZXJhLnJhZGl1cy50b1N0cmluZygpO1xyXG5cclxuICBzbGlkZXJDYW1BbmdsZVNoYXBlLnZhbHVlQXNOdW1iZXIgPSByYWRUb0RlZyhjYW1lcmFTaGFwZS5hbmdsZSk7XHJcbiAgbGFiZWxDYW1BbmdsZVNoYXBlLnRleHRDb250ZW50ID0gcmFkVG9EZWcoY2FtZXJhU2hhcGUuYW5nbGUpLnRvU3RyaW5nKCk7XHJcblxyXG4gIHNsaWRlckNhbVJhZGl1c1NoYXBlLnZhbHVlQXNOdW1iZXIgPSBjYW1lcmFTaGFwZS5yYWRpdXM7XHJcbiAgbGFiZWxDYW1SYWRpdXNTaGFwZS50ZXh0Q29udGVudCA9IGNhbWVyYVNoYXBlLnJhZGl1cy50b1N0cmluZygpO1xyXG5cclxuICBzaGFkaW5nTW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT05cIjtcclxuICBzaGFkaW5nTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHNoYWRlclN0YXR1cyA9IFNoYWRlclN0YXR1cy5PTjtcclxuXHJcbiAgYW5pbWF0aW9uTW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT05cIjtcclxuICBhbmltYXRpb25Nb2RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgYW5pbWF0aW9uID0gdHJ1ZTtcclxuXHJcbiAgbWFpblJlbmRlcmVyLnRleHR1cmUoXCJpbWFnZXMvd29vZC5wbmdcIiwgMSwgMSk7XHJcbiAgc2Vjb25kYXJ5UmVuZGVyZXIudGV4dHVyZShcImltYWdlcy93b29kLnBuZ1wiLCAxLCAxKTtcclxufTtcclxuXHJcbi8qIENvbXBvbmVudCBUcmVlICovXHJcbmNvbnN0IGFkZENvbXBvbmVudFRyZWUgPSAoXHJcbiAgY29tcG9uZW50VHJlZTogSFRNTEVsZW1lbnQsXHJcbiAgcm9vdDogTm9kZSxcclxuICBtYXJnaW5fbGVmdCA9IDBcclxuKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gcm9vdC5pbmRleDtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBzZWxlY3RlZE5vZGUgPSBhcnRpY3VsYXRlZC5maW5kTm9kZSh0ZXh0Q29udGVudCk7XHJcbiAgICBzbGlkZXJUcmFuc2xhdGVTaGFwZVgudmFsdWVBc051bWJlciA9IHNlbGVjdGVkTm9kZS50eDtcclxuICAgIGxhYmVsVHJhbnNsYXRlU2hhcGVYLnRleHRDb250ZW50ID0gc2VsZWN0ZWROb2RlLnR4LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgc2xpZGVyVHJhbnNsYXRlU2hhcGVZLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZE5vZGUudHk7XHJcbiAgICBsYWJlbFRyYW5zbGF0ZVNoYXBlWS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTm9kZS50eS50b1N0cmluZygpO1xyXG5cclxuICAgIHNsaWRlclRyYW5zbGF0ZVNoYXBlWi52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWROb2RlLnR6O1xyXG4gICAgbGFiZWxUcmFuc2xhdGVTaGFwZVoudGV4dENvbnRlbnQgPSBzZWxlY3RlZE5vZGUudHoudG9TdHJpbmcoKTtcclxuXHJcbiAgICBzbGlkZXJBbmdsZVNoYXBlWC52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhzZWxlY3RlZE5vZGUuYW5nbGVYKSk7XHJcbiAgICBsYWJlbEFuZ2xlU2hhcGVYLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcclxuICAgICAgcmFkVG9EZWcoc2VsZWN0ZWROb2RlLmFuZ2xlWClcclxuICAgICkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBzbGlkZXJBbmdsZVNoYXBlWS52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhzZWxlY3RlZE5vZGUuYW5nbGVZKSk7XHJcbiAgICBsYWJlbEFuZ2xlU2hhcGVZLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcclxuICAgICAgcmFkVG9EZWcoc2VsZWN0ZWROb2RlLmFuZ2xlWSlcclxuICAgICkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBzbGlkZXJBbmdsZVNoYXBlWi52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhzZWxlY3RlZE5vZGUuYW5nbGVaKSk7XHJcbiAgICBsYWJlbEFuZ2xlU2hhcGVaLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcclxuICAgICAgcmFkVG9EZWcoc2VsZWN0ZWROb2RlLmFuZ2xlWilcclxuICAgICkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBzbGlkZXJTY2FsZVNoYXBlWC52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWROb2RlLnN4O1xyXG4gICAgbGFiZWxTY2FsZVNoYXBlWC50ZXh0Q29udGVudCA9IHNlbGVjdGVkTm9kZS5zeC50b1N0cmluZygpO1xyXG5cclxuICAgIHNsaWRlclNjYWxlU2hhcGVZLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZE5vZGUuc3k7XHJcbiAgICBsYWJlbFNjYWxlU2hhcGVZLnRleHRDb250ZW50ID0gc2VsZWN0ZWROb2RlLnN5LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgc2xpZGVyU2NhbGVTaGFwZVoudmFsdWVBc051bWJlciA9IHNlbGVjdGVkTm9kZS5zejtcclxuICAgIGxhYmVsU2NhbGVTaGFwZVoudGV4dENvbnRlbnQgPSBzZWxlY3RlZE5vZGUuc3oudG9TdHJpbmcoKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHttYXJnaW5fbGVmdH0lYDtcclxuXHJcbiAgY29tcG9uZW50VHJlZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIGNvbXBvbmVudFRyZWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuXHJcbiAgZm9yIChjb25zdCBjaGlsZCBvZiByb290LmNoaWxkcmVuKSB7XHJcbiAgICBhZGRDb21wb25lbnRUcmVlKGNvbXBvbmVudFRyZWUsIGNoaWxkLCBtYXJnaW5fbGVmdCArIDUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29tcG9uZW50VHJlZSA9IChjb21wb25lbnRUcmVlIDogSFRNTEVsZW1lbnQpID0+IHtcclxuICB3aGlsZSAoY29tcG9uZW50VHJlZS5maXJzdENoaWxkKSB7XHJcbiAgICBjb21wb25lbnRUcmVlLnJlbW92ZUNoaWxkKGNvbXBvbmVudFRyZWUuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFdmVudCBMaXN0ZW5lciAqL1xyXG5zbGlkZXJUcmFuc2xhdGVYLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxUcmFuc2xhdGVYLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBhcnRpY3VsYXRlZC5yb290Lm1vdmVYKGRlbHRhKTtcclxufSk7XHJcblxyXG5zbGlkZXJUcmFuc2xhdGVZLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxUcmFuc2xhdGVZLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBhcnRpY3VsYXRlZC5yb290Lm1vdmVZKGRlbHRhKTtcclxufSk7XHJcblxyXG5zbGlkZXJUcmFuc2xhdGVaLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxUcmFuc2xhdGVaLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBhcnRpY3VsYXRlZC5yb290Lm1vdmVaKGRlbHRhKTtcclxufSk7XHJcblxyXG5zbGlkZXJBbmdsZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbEFuZ2xlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgYXJ0aWN1bGF0ZWQucm9vdC5yb3RhdGVYKGRlZ1RvUmFkKGRlbHRhKSk7XHJcbn0pO1xyXG5cclxuc2xpZGVyQW5nbGVZLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxBbmdsZVkudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xyXG4gIGFydGljdWxhdGVkLnJvb3Qucm90YXRlWShkZWdUb1JhZChkZWx0YSkpO1xyXG59KTtcclxuXHJcbnNsaWRlckFuZ2xlWi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsQW5nbGVaLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBhcnRpY3VsYXRlZC5yb290LnJvdGF0ZVooZGVnVG9SYWQoZGVsdGEpKTtcclxufSk7XHJcblxyXG5zbGlkZXJTY2FsZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbFNjYWxlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgYXJ0aWN1bGF0ZWQucm9vdC5zY2FsZVgoZGVsdGEpO1xyXG59KTtcclxuXHJcbnNsaWRlclNjYWxlWS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsU2NhbGVZLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBhcnRpY3VsYXRlZC5yb290LnNjYWxlWShkZWx0YSk7XHJcbn0pO1xyXG5cclxuc2xpZGVyU2NhbGVaLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxTY2FsZVoudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xyXG4gIGFydGljdWxhdGVkLnJvb3Quc2NhbGVaKGRlbHRhKTtcclxufSk7XHJcblxyXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICBzZWxlY3RlZE5vZGUubW92ZVgoZGVsdGEpO1xyXG4gIH1cclxufSk7XHJcblxyXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICBzZWxlY3RlZE5vZGUubW92ZVkoZGVsdGEpO1xyXG4gIH1cclxufSk7XHJcblxyXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWi50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICBzZWxlY3RlZE5vZGUubW92ZVooZGVsdGEpO1xyXG4gIH1cclxufSk7XHJcblxyXG5zbGlkZXJBbmdsZVNoYXBlWC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsQW5nbGVTaGFwZVgudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xyXG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgc2VsZWN0ZWROb2RlLnJvdGF0ZVgoZGVnVG9SYWQoZGVsdGEpKTtcclxuICB9XHJcbn0pO1xyXG5cclxuc2xpZGVyQW5nbGVTaGFwZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbEFuZ2xlU2hhcGVZLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBpZiAoc2VsZWN0ZWROb2RlICE9IG51bGwpIHtcclxuICAgIHNlbGVjdGVkTm9kZS5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhKSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNsaWRlckFuZ2xlU2hhcGVaLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxBbmdsZVNoYXBlWi50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICBzZWxlY3RlZE5vZGUucm90YXRlWihkZWdUb1JhZChkZWx0YSkpO1xyXG4gIH1cclxufSk7XHJcblxyXG5zbGlkZXJTY2FsZVNoYXBlWC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsU2NhbGVTaGFwZVgudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xyXG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgc2VsZWN0ZWROb2RlLnNjYWxlWChkZWx0YSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNsaWRlclNjYWxlU2hhcGVZLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxTY2FsZVNoYXBlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICBzZWxlY3RlZE5vZGUuc2NhbGVZKGRlbHRhKTtcclxuICB9XHJcbn0pO1xyXG5cclxuc2xpZGVyU2NhbGVTaGFwZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbFNjYWxlU2hhcGVaLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBpZiAoc2VsZWN0ZWROb2RlICE9IG51bGwpIHtcclxuICAgIHNlbGVjdGVkTm9kZS5zY2FsZVooZGVsdGEpO1xyXG4gIH1cclxufSk7XHJcblxyXG5saXN0T2ZQcm9qZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2plY3Rpb25UeXBlID0gbGlzdE9mUHJvamVjdGlvbi5zZWxlY3RlZE9wdGlvbnNbMF1cclxuICAgIC52YWx1ZSBhcyBQcm9qZWN0aW9uVHlwZTtcclxuXHJcbiAgcHJvamVjdGlvblR5cGUgPSBuZXdQcm9qZWN0aW9uVHlwZTtcclxufSk7XHJcblxyXG5saXN0T2ZNYXBwaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG5ld01hcHBpbmcgPSBsaXN0T2ZNYXBwaW5nLnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZSBhcyBNYXBwaW5nTW9kZTtcclxuICBtYXBwaW5nTW9kZSA9IG5ld01hcHBpbmc7XHJcblxyXG4gIHN3aXRjaCAobWFwcGluZ01vZGUpIHtcclxuICAgIGNhc2UgTWFwcGluZ01vZGUuVEVYVFVSRTpcclxuICAgICAgbWFpblJlbmRlcmVyLnRleHR1cmUoXCJpbWFnZXMvd29vZC5wbmdcIiwgMSwgMSk7XHJcbiAgICAgIHNlY29uZGFyeVJlbmRlcmVyLnRleHR1cmUoXCJpbWFnZXMvd29vZC5wbmdcIiwgMSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTWFwcGluZ01vZGUuRU5WSVJPTk1FTlQ6XHJcbiAgICAgIG1haW5SZW5kZXJlci5lbnZpcm9ubWVudChbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc291cmNlOiBcImltYWdlcy9wb3MteC5qcGdcIixcclxuICAgICAgICAgIHdpZHRoOiA1MTIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvbmVnLXguanBnXCIsXHJcbiAgICAgICAgICB3aWR0aDogNTEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL3Bvcy15LmpwZ1wiLFxyXG4gICAgICAgICAgd2lkdGg6IDUxMixcclxuICAgICAgICAgIGhlaWdodDogNTEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc291cmNlOiBcImltYWdlcy9uZWcteS5qcGdcIixcclxuICAgICAgICAgIHdpZHRoOiA1MTIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvcG9zLXouanBnXCIsXHJcbiAgICAgICAgICB3aWR0aDogNTEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL25lZy16LmpwZ1wiLFxyXG4gICAgICAgICAgd2lkdGg6IDUxMixcclxuICAgICAgICAgIGhlaWdodDogNTEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZWNvbmRhcnlSZW5kZXJlci5lbnZpcm9ubWVudChbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc291cmNlOiBcImltYWdlcy9wb3MteC5qcGdcIixcclxuICAgICAgICAgIHdpZHRoOiA1MTIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvbmVnLXguanBnXCIsXHJcbiAgICAgICAgICB3aWR0aDogNTEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL3Bvcy15LmpwZ1wiLFxyXG4gICAgICAgICAgd2lkdGg6IDUxMixcclxuICAgICAgICAgIGhlaWdodDogNTEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc291cmNlOiBcImltYWdlcy9uZWcteS5qcGdcIixcclxuICAgICAgICAgIHdpZHRoOiA1MTIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvcG9zLXouanBnXCIsXHJcbiAgICAgICAgICB3aWR0aDogNTEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL25lZy16LmpwZ1wiLFxyXG4gICAgICAgICAgd2lkdGg6IDUxMixcclxuICAgICAgICAgIGhlaWdodDogNTEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIE1hcHBpbmdNb2RlLkJVTVA6XHJcbiAgICAgIG1haW5SZW5kZXJlci50ZXh0dXJlKFwiaW1hZ2VzL2J1bXBlZC5wbmdcIiwgMSwgMSk7XHJcbiAgICAgIHNlY29uZGFyeVJlbmRlcmVyLnRleHR1cmUoXCJpbWFnZXMvYnVtcGVkLnBuZ1wiLCAxLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qIENhbWVyYSBDb250cm9sIExpc3RlbmVyICovXHJcbnNsaWRlckNhbUFuZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcclxuXHJcbiAgbGFiZWxDYW1BbmdsZS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgY2FtZXJhLnJvdGF0ZShkZWdUb1JhZChkZWx0YSkpO1xyXG59KTtcclxuXHJcbnNsaWRlckNhbVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsQ2FtUmFkaXVzLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBjYW1lcmEucmFkaXVzID0gZGVsdGE7XHJcbn0pO1xyXG5cclxuc2xpZGVyQ2FtQW5nbGVTaGFwZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XHJcblxyXG4gIGxhYmVsQ2FtQW5nbGVTaGFwZS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XHJcbiAgY2FtZXJhU2hhcGUucm90YXRlKGRlZ1RvUmFkKGRlbHRhKSk7XHJcbn0pO1xyXG5cclxuc2xpZGVyQ2FtUmFkaXVzU2hhcGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xyXG5cclxuICBsYWJlbENhbVJhZGl1c1NoYXBlLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcclxuICBjYW1lcmFTaGFwZS5yYWRpdXMgPSBkZWx0YTtcclxufSk7XHJcblxyXG5sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgRmlsZUhhbmRsaW5nLnVwbG9hZCgodGV4dCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZURlZmF1bHRWYWx1ZShcclxuICAgICAgRmlsZVN5c3RlbS5sb2FkQXJ0aWN1bGF0ZWQodGV4dCksXHJcbiAgICAgIGdlbmVyYXRlRGVmYXVsdENhbWVyYSgpLFxyXG4gICAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcclxuICAgICAgZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yKCksXHJcbiAgICAgIGdlbmVyYXRlRGVmYXVsdERpcmVjdGlvbmFsTGlnaHQoKVxyXG4gICAgKTtcclxuICAgIGNsZWFyQ29tcG9uZW50VHJlZShjb21wb25lbnRUcmVlKTtcclxuICAgIGFkZENvbXBvbmVudFRyZWUoY29tcG9uZW50VHJlZSwgYXJ0aWN1bGF0ZWQucm9vdCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIEZpbGVIYW5kbGluZy5kb3dubG9hZChGaWxlU3lzdGVtLnNlcmlhbGl6ZUFydGljdWxhdGVkKGFydGljdWxhdGVkKSk7XHJcbn0pO1xyXG5cclxuLyogU2hhZGluZyBhbmQgQW5pbWF0aW9uICovXHJcbnNoYWRpbmdNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKHNoYWRlclN0YXR1cyA9PT0gU2hhZGVyU3RhdHVzLk9GRikge1xyXG4gICAgc2hhZGluZ01vZGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHNoYWRpbmdNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJPTlwiO1xyXG5cclxuICAgIHNoYWRlclN0YXR1cyA9IFNoYWRlclN0YXR1cy5PTjtcclxuICB9IGVsc2Uge1xyXG4gICAgc2hhZGluZ01vZGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNoYWRpbmdNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJPRkZcIjtcclxuXHJcbiAgICBzaGFkZXJTdGF0dXMgPSBTaGFkZXJTdGF0dXMuT0ZGO1xyXG4gIH1cclxufSk7XHJcblxyXG5hbmltYXRpb25Nb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKCFhbmltYXRpb24pIHtcclxuICAgIGFuaW1hdGlvbk1vZGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGFuaW1hdGlvbk1vZGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk9OXCI7XHJcblxyXG4gICAgYW5pbWF0aW9uID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgYW5pbWF0aW9uTW9kZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgYW5pbWF0aW9uTW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT0ZGXCI7XHJcblxyXG4gICAgYW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qIFJlc2V0IFN0YXRlICovXHJcbnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaW5pdGlhbGl6ZURlZmF1bHRWYWx1ZShcclxuICAgIGdlbmVyYXRlRGVmYXVsdEFydGljdWxhdGVkKCksXHJcbiAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcclxuICAgIGdlbmVyYXRlRGVmYXVsdENhbWVyYSgpLFxyXG4gICAgZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yKCksXHJcbiAgICBnZW5lcmF0ZURlZmF1bHREaXJlY3Rpb25hbExpZ2h0KClcclxuICApO1xyXG4gIGNsZWFyQ29tcG9uZW50VHJlZShjb21wb25lbnRUcmVlKTtcclxuICBhZGRDb21wb25lbnRUcmVlKGNvbXBvbmVudFRyZWUsIGFydGljdWxhdGVkLnJvb3QpO1xyXG59KTtcclxuXHJcbi8qIEhlbHAgQnV0dG9uICovXHJcbmhlbHBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBoZWxwTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59KTtcclxuXHJcbmNsb3NlSGVscEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGhlbHBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBoZWxwTW9kYWwpIHtcclxuICAgIGhlbHBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qIE1haW4gKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGluaXRpYWxpemVEZWZhdWx0VmFsdWUoXHJcbiAgICBnZW5lcmF0ZURlZmF1bHRBcnRpY3VsYXRlZCgpLFxyXG4gICAgZ2VuZXJhdGVEZWZhdWx0Q2FtZXJhKCksXHJcbiAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcclxuICAgIGdlbmVyYXRlRGVmYXVsdEFtYmllbnRDb2xvcigpLFxyXG4gICAgZ2VuZXJhdGVEZWZhdWx0RGlyZWN0aW9uYWxMaWdodCgpXHJcbiAgKTtcclxuICBjbGVhckNvbXBvbmVudFRyZWUoY29tcG9uZW50VHJlZSk7XHJcbiAgYWRkQ29tcG9uZW50VHJlZShjb21wb25lbnRUcmVlLCBhcnRpY3VsYXRlZC5yb290KTtcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck1haW5DYW52YXMpO1xyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9