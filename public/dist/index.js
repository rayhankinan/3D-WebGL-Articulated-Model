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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3Qiw4QkFBOEI7UUFDOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVB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Q3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRCLHVDQUF1QztRQUN2QyxNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7WUFDZixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQixNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBRXZFLE9BQU8sSUFBSSxNQUFNLENBQ2YsSUFBSSxvQkFBVSxDQUNaLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUN0QyxFQUNELElBQUksb0JBQVUsQ0FDWixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FDdEMsRUFDRCxJQUFJLG9CQUFVLENBQ1osQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQ3RDLEVBQ0QsSUFBSSxvQkFBVSxDQUNaLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNyQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQ3JDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUN0QyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sU0FBUztRQUNkLDBCQUEwQjtRQUMxQixNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyRCxpQ0FBaUM7UUFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBRUQscUJBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdlF0QixvR0FBa0M7QUFHbEMscUlBQXVEO0FBQ3ZELHlIQUErQztBQU8vQyxNQUFNLElBQUssU0FBUSxlQUFLO0lBQ3RCLFlBQ2tCLEtBQWEsRUFDYixRQUFnQixFQUNoQixXQUFtQixFQUM1QixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWMsRUFDZCxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7UUFFakIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBYm5ELFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtJQUduQixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLE1BQVksQ0FBQztZQUVqQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXhDLElBQUksU0FBUyxFQUFFO29CQUNiLE1BQU0sR0FBRyxTQUFTLENBQUM7b0JBQ25CLE1BQU07aUJBQ1A7YUFDRjtZQUVELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUNmLFFBQWtCLEVBQ2xCLGNBQWlCLEVBQ2pCLE1BQTJCLEVBQzNCLE1BQWMsRUFDZCxnQkFBd0IsRUFDeEIsZ0JBQXdCLEVBQ3hCLFlBQW1CLEVBQ25CLGdCQUF1QixFQUN2QixZQUEwQixFQUMxQixXQUFtQixFQUNuQixrQkFBMEI7UUFFMUIsZ0JBQWdCO1FBQ2hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUxQyxrQ0FBa0M7UUFDbEMsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVELGtDQUFrQztRQUNsQyxNQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU1RCwwQkFBMEI7UUFDMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEQseUNBQXlDO1FBQ3pDLE1BQU0sR0FBRyx3QkFBYyxDQUFDLFdBQVcsQ0FDakMsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixDQUFDLENBQ0YsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsOEJBQThCO1FBQzlCLFFBQVEsY0FBYyxFQUFFO1lBQ3RCLEtBQUssY0FBYztnQkFDakIsTUFBTSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQUUsZUFBZSxFQUNyQixHQUFHLEVBQUUsZUFBZSxHQUNyQixHQUFHLE1BQTBDLENBQUM7Z0JBRS9DLE1BQU0sR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FDOUIsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILGVBQWUsRUFDZixlQUFlLENBQ2hCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxhQUFhO2dCQUNoQixNQUFNLEVBQ0osV0FBVyxFQUNYLE1BQU0sRUFDTixJQUFJLEVBQUUsZUFBZSxFQUNyQixHQUFHLEVBQUUsY0FBYyxHQUNwQixHQUFHLE1BQXlDLENBQUM7Z0JBRTlDLE1BQU0sR0FBRyxvQkFBVSxDQUFDLFdBQVcsQ0FDN0IsV0FBVyxFQUNYLE1BQU0sRUFDTixlQUFlLEVBQ2YsY0FBYyxDQUNmLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLE1BQU0sRUFDSixNQUFNLEVBQ04sS0FBSyxFQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxHQUNWLEdBQUcsTUFBcUMsQ0FBQztnQkFFMUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsT0FBTyxDQUN6QixNQUFNLEVBQ04sS0FBSyxFQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxDQUNWLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1NBQ1Q7UUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsTUFBTSx5QkFBeUIsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuRSx1QkFBdUI7UUFDdkIsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxELDJCQUEyQjtRQUMzQixNQUFNLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRS9ELDhCQUE4QjtRQUM5QixNQUFNLFlBQVksR0FBaUI7WUFDakMsVUFBVSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNyQztZQUNELFFBQVEsRUFBRTtnQkFDUixTQUFTO2dCQUNULHlCQUF5QjtnQkFDekIsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLFlBQVk7YUFDYjtTQUNGLENBQUM7UUFFRixrQkFBa0I7UUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpDLFlBQVk7UUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLFVBQVUsQ0FDZixRQUFrQixFQUNsQixjQUFpQixFQUNqQixNQUEyQixFQUMzQixNQUFjLEVBQ2QsZ0JBQXdCLEVBQ3hCLGdCQUF3QixFQUN4QixZQUFtQixFQUNuQixnQkFBdUIsRUFDdkIsWUFBMEIsRUFDMUIsV0FBbUIsRUFDbkIsa0JBQTBCO1FBRTFCLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUNiLFFBQVEsRUFDUixjQUFjLEVBQ2QsTUFBTSxFQUNOLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxrQkFBa0IsQ0FDbkIsQ0FBQztRQUVGLHNDQUFzQztRQUN0QyxNQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FDM0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUN0QixDQUFDO1FBRUYscUJBQXFCO1FBQ3JCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxLQUFLLENBQUMsVUFBVSxDQUNkLFFBQVEsRUFDUixjQUFjLEVBQ2QsTUFBTSxFQUNOLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxtQkFBbUIsQ0FDcEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGO0FBRUQscUJBQWUsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdE9wQixtSEFBNEM7QUFFNUMsTUFBTSxLQUFNLFNBQVEsb0JBQVU7SUFDNUIsWUFDa0IsQ0FBUyxFQUNULENBQVMsRUFDVCxDQUFTO1FBRXpCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUpGLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ1QsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUczQixDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQUVELHFCQUFlLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckIsb0dBQWtDO0FBR2xDLHFJQUF1RDtBQUV2RCxNQUFNLEtBQUs7SUFDVCxZQUNrQixXQUFtQixFQUM1QixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWMsRUFDZCxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7UUFURCxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7SUFDaEIsQ0FBQztJQUVHLEtBQUssQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsQixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDbEIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxPQUFPLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDbEIsQ0FBQztJQUVNLGNBQWM7UUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLE9BQU8sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGFBQWE7UUFDbEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLE9BQU8sSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLFlBQVk7UUFDakIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNqRCxLQUFLLENBQW9DLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQzNELElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDakMsSUFBSSxFQUFFLENBQ1YsQ0FBQztRQUVGLE9BQU8sSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGFBQWE7UUFDbEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNsRCxLQUFLLENBQW9DLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQzNELElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEMsSUFBSSxFQUFFLENBQ1YsQ0FBQztRQUVGLE9BQU8sSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLGVBQWU7UUFDcEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNwRCxLQUFLLENBQW9DLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQzNELElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEMsSUFBSSxFQUFFLENBQ1YsQ0FBQztRQUVGLE9BQU8sSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBRU0sY0FBYztRQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sd0JBQWMsQ0FBQyxPQUFPLENBQzNCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsRUFBRSxFQUNQLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQscUJBQWUsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEhyQixNQUFNLE9BQU87SUFDWCxZQUE0QixDQUFTLEVBQWtCLENBQVM7UUFBcEMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFrQixNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUcsQ0FBQztJQUU3RCxPQUFPO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQUVELHFCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QixtSEFBNEM7QUFDNUMsc0lBQXdEO0FBRXhELE1BQU0sTUFBTyxTQUFRLG9CQUFVO0lBQzdCLFlBQ2tCLENBQVMsRUFDVCxDQUFTLEVBQ1QsQ0FBUztRQUV6QixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFKRixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ1QsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7SUFHM0IsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1FBRUYsT0FBTyxNQUFNLEdBQUcseUJBQWU7WUFDN0IsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYTtRQUMzQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxNQUFNLENBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFDbkMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFDbkMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELHFCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDdEIsdUdBQW9DO0FBQ3BDLG1IQUE0QztBQUU1QyxNQUFNLFVBQVU7SUFDUCxNQUFNLENBQUMsWUFBWSxDQUN4QixJQUFZLEVBQ1osS0FBYSxFQUNiLE1BQWMsRUFDZCxHQUFXLEVBQ1gsSUFBWSxFQUNaLEdBQVc7UUFFWCxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQ3ZCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQ2hDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQ2hDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQzVCLENBQUMsQ0FDRixDQUFDO1FBRUYsT0FBTyxJQUFJLGdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLFdBQW1CLEVBQ25CLE1BQWMsRUFDZCxJQUFZLEVBQ1osR0FBVztRQUVYLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFNUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNuQixNQUFjLEVBQ2QsS0FBYSxFQUNiLFVBQWtCLEVBQ2xCLFdBQW1CLEVBQ25CLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFNBQWlCO1FBRWpCLDhDQUE4QztRQUM5QyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUNwQyxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsQ0FDVixDQUFDO1FBRUYsa0RBQWtEO1FBQ2xELE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLFNBQVMsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFeEUseUNBQXlDO1FBQ3pDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQscUJBQWUsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEYxQix1R0FBb0M7QUFDcEMsbUhBQTRDO0FBRTVDLE1BQU0sY0FBYztJQUNYLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0QyxPQUFPLElBQUksZ0JBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDMUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSSxnQkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFB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RUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRCxDQUFDO1FBQ0YsV0FBVztRQUNYLElBQUksY0FBSSxDQUFDO1lBQ1AsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxjQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxp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VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0NvbnN0YW50cy9jbG9zZXN0LXRvLXplcm8udHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvYW5pbWF0aW9uLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvYXJ0aWN1bGF0ZWQtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZhY3Rvcmllcy9kcmF3LWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GYWN0b3JpZXMvZmFjZS1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL2xhbWJkYS1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL25vZGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZhY3Rvcmllcy9wb2ludC1mYWN0b3J5LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvRmFjdG9yaWVzL3RleHR1cmUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL0ZpbGVzL2ZpbGUtaGFuZGxpbmcudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9GaWxlcy9maWxlLXN5c3RlbS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9hcnRpY3VsYXRlZC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvY2FtZXJhLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9jb2xvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvY29vcmRpbmF0ZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvZHJhdy50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvZmFjZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvbGFtYmRhLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9saWdodC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvbWF0cml4LnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9ub2RlLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvT2JqZWN0cy9wb2ludC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09iamVjdHMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9PYmplY3RzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9PYmplY3RzL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09wZXJhdGlvbnMvcHJvamVjdGlvbi50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL09wZXJhdGlvbnMvdHJhbnNmb3JtYXRpb24udHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9UeXBlcy9hbmltYXRpb24tdHlwZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1R5cGVzL21hcHBpbmctbW9kZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1R5cGVzL3NoYWRlci1zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9VdGlscy9hbmdsZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3Bvd2VyLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvVXRpbHMvcHJvZ3JhbS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3QvLi9zcmMvVXRpbHMvcmVzaXplLWNhbnZhcy50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL1V0aWxzL3NoYWRlci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYW1iaWVudC1jb2xvci50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYXJyYXktb2YtZmFjZS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtYXJ0aWN1bGF0ZWQudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9kZWZhdWx0LWNhbWVyYS50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0Ly4vc3JjL2RlZmF1bHQtZGlyZWN0aW9uYWwtbGlnaHQudHMiLCJ3ZWJwYWNrOi8vM0QtV2ViR0wtSG9sbG93LU9iamVjdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzNELVdlYkdMLUhvbGxvdy1PYmplY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8zRC1XZWJHTC1Ib2xsb3ctT2JqZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDTE9TRVNUX1RPX1pFUk8gPSAxZS02O1xuXG5leHBvcnQgZGVmYXVsdCBDTE9TRVNUX1RPX1pFUk87XG4iLCJpbXBvcnQgQW5pbWF0aW9uSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2FuaW1hdGlvbi1pbnRlcmZhY2VcIjtcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIk9iamVjdHMvYW5pbWF0aW9uXCI7XG5pbXBvcnQgTGFtYmRhRmFjdG9yeSBmcm9tIFwiRmFjdG9yaWVzL2xhbWJkYS1mYWN0b3J5XCI7XG5cbmNsYXNzIEFuaW1hdGlvbkZhY3Rvcnkge1xuICBwdWJsaWMgc3RhdGljIGZyb21JbnRlcmZhY2UoYW5pbWF0aW9uOiBBbmltYXRpb25JbnRlcmZhY2UpOiBBbmltYXRpb24ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHR5cGUsIGxhbWJkYSB9ID0gYW5pbWF0aW9uO1xuXG4gICAgY29uc3QgbmV3TGFtYmRhID0gTGFtYmRhRmFjdG9yeS5mcm9tSW50ZXJmYWNlKGxhbWJkYSk7XG5cbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbihpbmRleCwgdHlwZSwgbmV3TGFtYmRhKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GYWN0b3J5O1xuIiwiaW1wb3J0IEFydGljdWxhdGVkSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2FydGljdWxhdGVkLWludGVyZmFjZVwiO1xuaW1wb3J0IEFydGljdWxhdGVkIGZyb20gXCJPYmplY3RzL2FydGljdWxhdGVkXCI7XG5pbXBvcnQgTm9kZUZhY3RvcnkgZnJvbSBcIkZhY3Rvcmllcy9ub2RlLWZhY3RvcnlcIjtcbmltcG9ydCBBbmltYXRpb25GYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvYW5pbWF0aW9uLWZhY3RvcnlcIjtcblxuY2xhc3MgQXJ0aWN1bGF0ZWRGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGFydGljdWxhdGVkOiBBcnRpY3VsYXRlZEludGVyZmFjZSk6IEFydGljdWxhdGVkIHtcbiAgICBjb25zdCB7IHJvb3QsIGFycmF5T2ZBbmltYXRpb24gfSA9IGFydGljdWxhdGVkO1xuXG4gICAgY29uc3QgbmV3Um9vdCA9IE5vZGVGYWN0b3J5LmZyb21JbnRlcmZhY2Uocm9vdCk7XG4gICAgY29uc3QgbmV3QXJyYXlPZkFuaW1hdGlvbiA9IGFycmF5T2ZBbmltYXRpb24ubWFwKChhbmltYXRpb24pID0+XG4gICAgICBBbmltYXRpb25GYWN0b3J5LmZyb21JbnRlcmZhY2UoYW5pbWF0aW9uKVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IEFydGljdWxhdGVkKG5ld1Jvb3QsIG5ld0FycmF5T2ZBbmltYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljdWxhdGVkRmFjdG9yeTtcbiIsImltcG9ydCBEcmF3SW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2RyYXctaW50ZXJmYWNlXCI7XG5pbXBvcnQgRHJhdyBmcm9tIFwiT2JqZWN0cy9kcmF3XCI7XG5pbXBvcnQgUG9pbnRGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvcG9pbnQtZmFjdG9yeVwiO1xuaW1wb3J0IFRleHR1cmVGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvdGV4dHVyZS1mYWN0b3J5XCI7XG5cbmNsYXNzIERyYXdGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGRyYXc6IERyYXdJbnRlcmZhY2UpOiBEcmF3IHtcbiAgICBjb25zdCB7IHBvaW50LCB0ZXh0dXJlIH0gPSBkcmF3O1xuXG4gICAgY29uc3QgbmV3UG9pbnQgPSBQb2ludEZhY3RvcnkuZnJvbUludGVyZmFjZShwb2ludCk7XG5cbiAgICBjb25zdCBuZXdUZXh0dXJlID0gVGV4dHVyZUZhY3RvcnkuZnJvbUludGVyZmFjZSh0ZXh0dXJlKTtcblxuICAgIHJldHVybiBuZXcgRHJhdyhuZXdQb2ludCwgbmV3VGV4dHVyZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd0ZhY3Rvcnk7XG4iLCJpbXBvcnQgRmFjZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9mYWNlLWludGVyZmFjZVwiO1xuaW1wb3J0IEZhY2UgZnJvbSBcIk9iamVjdHMvZmFjZVwiO1xuaW1wb3J0IERyYXdGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvZHJhdy1mYWN0b3J5XCI7XG5cbmNsYXNzIEZhY2VGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKGZhY2U6IEZhY2VJbnRlcmZhY2UpOiBGYWNlIHtcbiAgICBjb25zdCB7IGFycmF5T2ZEcmF3IH0gPSBmYWNlO1xuXG4gICAgY29uc3QgbmV3QXJyYXlPZkRyYXcgPSBhcnJheU9mRHJhdy5tYXAoKGRyYXcpID0+IHtcbiAgICAgIHJldHVybiBEcmF3RmFjdG9yeS5mcm9tSW50ZXJmYWNlKGRyYXcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBGYWNlKG5ld0FycmF5T2ZEcmF3KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNlRmFjdG9yeTtcbiIsImltcG9ydCBMYW1iZGFJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvbGFtYmRhLWludGVyZmFjZVwiO1xuaW1wb3J0IExhbWJkYSBmcm9tIFwiT2JqZWN0cy9sYW1iZGFcIjtcblxuY2xhc3MgTGFtYmRhRmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgZnJvbUludGVyZmFjZShsYW1iZGE6IExhbWJkYUludGVyZmFjZSk6IExhbWJkYSB7XG4gICAgY29uc3QgeyByYXdGdW5jdGlvbiB9ID0gbGFtYmRhO1xuXG4gICAgcmV0dXJuIG5ldyBMYW1iZGEocmF3RnVuY3Rpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbWJkYUZhY3Rvcnk7XG4iLCJpbXBvcnQgTm9kZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9ub2RlLWludGVyZmFjZVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIk9iamVjdHMvbm9kZVwiO1xuaW1wb3J0IEZhY2VGYWN0b3J5IGZyb20gXCJGYWN0b3JpZXMvZmFjZS1mYWN0b3J5XCI7XG5cbmNsYXNzIE5vZGVGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKG5vZGU6IE5vZGVJbnRlcmZhY2UpOiBOb2RlIHtcbiAgICBjb25zdCB7XG4gICAgICBpbmRleCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXJyYXlPZkZhY2UsXG4gICAgICB0eCxcbiAgICAgIHR5LFxuICAgICAgdHosXG4gICAgICBhbmdsZVgsXG4gICAgICBhbmdsZVksXG4gICAgICBhbmdsZVosXG4gICAgICBzeCxcbiAgICAgIHN5LFxuICAgICAgc3osXG4gICAgfSA9IG5vZGU7XG5cbiAgICBjb25zdCBuZXdBcnJheU9mRmFjZSA9IGFycmF5T2ZGYWNlLm1hcCgoZmFjZSkgPT4ge1xuICAgICAgcmV0dXJuIEZhY2VGYWN0b3J5LmZyb21JbnRlcmZhY2UoZmFjZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdDaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgIHJldHVybiBOb2RlRmFjdG9yeS5mcm9tSW50ZXJmYWNlKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgIGluZGV4LFxuICAgICAgbmV3Q2hpbGRyZW4sXG4gICAgICBuZXdBcnJheU9mRmFjZSxcbiAgICAgIHR4LFxuICAgICAgdHksXG4gICAgICB0eixcbiAgICAgIGFuZ2xlWCxcbiAgICAgIGFuZ2xlWSxcbiAgICAgIGFuZ2xlWixcbiAgICAgIHN4LFxuICAgICAgc3ksXG4gICAgICBzelxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZUZhY3Rvcnk7XG4iLCJpbXBvcnQgUG9pbnRJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvcG9pbnQtaW50ZXJmYWNlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIk9iamVjdHMvcG9pbnRcIjtcblxuY2xhc3MgUG9pbnRGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBmcm9tSW50ZXJmYWNlKHBvaW50OiBQb2ludEludGVyZmFjZSk6IFBvaW50IHtcbiAgICBjb25zdCB7IHgsIHksIHogfSA9IHBvaW50O1xuXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5LCB6KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludEZhY3Rvcnk7XG4iLCJpbXBvcnQgVGV4dHVyZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy90ZXh0dXJlLWludGVyZmFjZVwiO1xuaW1wb3J0IFRleHR1cmUgZnJvbSBcIk9iamVjdHMvdGV4dHVyZVwiO1xuXG5jbGFzcyBUZXh0dXJlRmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgZnJvbUludGVyZmFjZSh0ZXh0dXJlOiBUZXh0dXJlSW50ZXJmYWNlKTogVGV4dHVyZSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0ZXh0dXJlO1xuXG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKHgsIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHR1cmVGYWN0b3J5O1xuIiwiY2xhc3MgRmlsZUhhbmRsaW5nIHtcbiAgcHVibGljIHN0YXRpYyBkb3dubG9hZCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZpbGUoW3RleHRdLCBcImFydGljdWxhdGVkLmpzb25cIiwge1xuICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLmRvd25sb2FkID0gZGF0YS5uYW1lO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBhLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdXBsb2FkKGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZmlsZVwiO1xuICAgIGlucHV0LmFjY2VwdCA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dC5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVIYW5kbGluZztcbiIsImltcG9ydCBBcnRpY3VsYXRlZEZhY3RvcnkgZnJvbSBcIkZhY3Rvcmllcy9hcnRpY3VsYXRlZC1mYWN0b3J5XCI7XG5pbXBvcnQgQXJ0aWN1bGF0ZWRJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvYXJ0aWN1bGF0ZWQtaW50ZXJmYWNlXCI7XG5pbXBvcnQgQXJ0aWN1bGF0ZWQgZnJvbSBcIk9iamVjdHMvYXJ0aWN1bGF0ZWRcIjtcblxuY2xhc3MgRmlsZVN5c3RlbSB7XG4gIHB1YmxpYyBzdGF0aWMgbG9hZEFydGljdWxhdGVkKHRleHQ6IHN0cmluZyk6IEFydGljdWxhdGVkIHtcbiAgICBjb25zdCBhcnRpY3VsYXRlZEludGVyZmFjZSA9IEpTT04ucGFyc2UodGV4dCkgYXMgQXJ0aWN1bGF0ZWRJbnRlcmZhY2U7XG5cbiAgICByZXR1cm4gQXJ0aWN1bGF0ZWRGYWN0b3J5LmZyb21JbnRlcmZhY2UoYXJ0aWN1bGF0ZWRJbnRlcmZhY2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVBcnRpY3VsYXRlZChhcnRpY3VsYXRlZDogQXJ0aWN1bGF0ZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcnRpY3VsYXRlZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVN5c3RlbTtcbiIsImltcG9ydCBBbmltYXRpb25JbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvYW5pbWF0aW9uLWludGVyZmFjZVwiO1xuaW1wb3J0IEFuaW1hdGlvblR5cGUgZnJvbSBcIlR5cGVzL2FuaW1hdGlvbi10eXBlXCI7XG5pbXBvcnQgTGFtYmRhIGZyb20gXCJPYmplY3RzL2xhbWJkYVwiO1xuXG5jbGFzcyBBbmltYXRpb24gaW1wbGVtZW50cyBBbmltYXRpb25JbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5kZXg6IHN0cmluZyxcbiAgICBwdWJsaWMgdHlwZTogQW5pbWF0aW9uVHlwZSxcbiAgICBwdWJsaWMgbGFtYmRhOiBMYW1iZGFcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRJbmRleCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgcHVibGljIGdldFR5cGUoKTogQW5pbWF0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sYW1iZGEuY2FsbChjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb247XG4iLCJpbXBvcnQgQXJ0aWN1bGF0ZWRJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvYXJ0aWN1bGF0ZWQtaW50ZXJmYWNlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiT2JqZWN0cy9ub2RlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIk9iamVjdHMvY29sb3JcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIk9iamVjdHMvY2FtZXJhXCI7XG5pbXBvcnQgTGlnaHQgZnJvbSBcIk9iamVjdHMvbGlnaHRcIjtcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIk9iamVjdHMvYW5pbWF0aW9uXCI7XG5pbXBvcnQgVHJhbnNmb3JtYXRpb24gZnJvbSBcIk9wZXJhdGlvbnMvdHJhbnNmb3JtYXRpb25cIjtcbmltcG9ydCBQcm9qZWN0aW9uUGFyYW1zIGZyb20gXCJUeXBlcy9wcm9qZWN0aW9uLXBhcmFtc1wiO1xuaW1wb3J0IFByb2plY3Rpb25UeXBlIGZyb20gXCJUeXBlcy9wcm9qZWN0aW9uLXR5cGVcIjtcbmltcG9ydCBTaGFkZXJTdGF0dXMgZnJvbSBcIlR5cGVzL3NoYWRlci1zdGF0dXNcIjtcbmltcG9ydCBBbmltYXRpb25UeXBlIGZyb20gXCJUeXBlcy9hbmltYXRpb24tdHlwZVwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJVdGlscy9yZW5kZXJlclwiO1xuXG5jbGFzcyBBcnRpY3VsYXRlZCBpbXBsZW1lbnRzIEFydGljdWxhdGVkSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHJvb3Q6IE5vZGUsXG4gICAgcHVibGljIHJlYWRvbmx5IGFycmF5T2ZBbmltYXRpb246IEFuaW1hdGlvbltdXG4gICkge31cblxuICBwdWJsaWMgZmluZE5vZGUoaW5kZXg6IHN0cmluZyk6IE5vZGUge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZmluZE5vZGUoaW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlclRyZWU8VCBleHRlbmRzIFByb2plY3Rpb25UeXBlPihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgcHJvamVjdGlvblR5cGU6IFQsXG4gICAgcGFyYW1zOiBQcm9qZWN0aW9uUGFyYW1zW1RdLFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIG9mZnNldFRyYW5zbGF0ZVg6IG51bWJlcixcbiAgICBvZmZzZXRUcmFuc2xhdGVZOiBudW1iZXIsXG4gICAgYW1iaWVudENvbG9yOiBDb2xvcixcbiAgICBkaXJlY3Rpb25hbExpZ2h0OiBMaWdodCxcbiAgICBzaGFkZXJTdGF0dXM6IFNoYWRlclN0YXR1cyxcbiAgICBtYXBwaW5nTW9kZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMucm9vdC5yZW5kZXJUcmVlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICBwcm9qZWN0aW9uVHlwZSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNhbWVyYSxcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVgsXG4gICAgICBvZmZzZXRUcmFuc2xhdGVZLFxuICAgICAgYW1iaWVudENvbG9yLFxuICAgICAgZGlyZWN0aW9uYWxMaWdodCxcbiAgICAgIHNoYWRlclN0YXR1cyxcbiAgICAgIG1hcHBpbmdNb2RlLFxuICAgICAgVHJhbnNmb3JtYXRpb24uaWRlbnRpdHkoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlBbmltYXRpb24oYzogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hcnJheU9mQW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMucm9vdC5maW5kTm9kZShhbmltYXRpb24uZ2V0SW5kZXgoKSk7XG5cbiAgICAgIHN3aXRjaCAoYW5pbWF0aW9uLmdldFR5cGUoKSkge1xuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuTU9WRV9YOlxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVYKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuTU9WRV9ZOlxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVZKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuTU9WRV9aOlxuICAgICAgICAgIGN1cnJlbnROb2RlLm1vdmVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuUk9UQVRFX1g6XG4gICAgICAgICAgY3VycmVudE5vZGUucm90YXRlWChhbmltYXRpb24udHJhbnNmb3JtKGMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLlJPVEFURV9ZOlxuICAgICAgICAgIGN1cnJlbnROb2RlLnJvdGF0ZVkoYW5pbWF0aW9uLnRyYW5zZm9ybShjKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWjpcbiAgICAgICAgICBjdXJyZW50Tm9kZS5yb3RhdGVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFuaW1hdGlvblR5cGUuU0NBTEVfWDpcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zY2FsZVgoYW5pbWF0aW9uLnRyYW5zZm9ybShjKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQW5pbWF0aW9uVHlwZS5TQ0FMRV9ZOlxuICAgICAgICAgIGN1cnJlbnROb2RlLnNjYWxlWShhbmltYXRpb24udHJhbnNmb3JtKGMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBbmltYXRpb25UeXBlLlNDQUxFX1o6XG4gICAgICAgICAgY3VycmVudE5vZGUuc2NhbGVaKGFuaW1hdGlvbi50cmFuc2Zvcm0oYykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY3VsYXRlZDtcbiIsImltcG9ydCBDYW1lcmFJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvY2FtZXJhLWludGVyZmFjZVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJPYmplY3RzL3BvaW50XCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCJPYmplY3RzL21hdHJpeFwiO1xuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCJPYmplY3RzL3ZlY3RvclwiO1xuXG5jbGFzcyBDYW1lcmEgaW1wbGVtZW50cyBDYW1lcmFJbnRlcmZhY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyLFxuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyLFxuICAgIHB1YmxpYyBjZW50ZXI6IFBvaW50XG4gICkge31cblxuICBwdWJsaWMgcm90YXRlKGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBwdWJsaWMgbW92ZVJhZGl1cyhkaXN0YW5jZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yYWRpdXMgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGxvb2tBdCgpOiBNYXRyaXgge1xuICAgIGNvbnN0IGluaXRpYWxNYXRyaXggPSBUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbihcbiAgICAgIHRoaXMuY2VudGVyLngsXG4gICAgICB0aGlzLmNlbnRlci55LFxuICAgICAgdGhpcy5jZW50ZXIuelxuICAgIClcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblkodGhpcy5hbmdsZSkpXG4gICAgICAubXVsdGlwbHlNYXRyaXgoVHJhbnNmb3JtYXRpb24udHJhbnNsYXRpb24oMCwgMCwgdGhpcy5yYWRpdXMpKVxuICAgICAgLm11bHRpcGx5TWF0cml4KFxuICAgICAgICBUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbihcbiAgICAgICAgICAtdGhpcy5jZW50ZXIueCxcbiAgICAgICAgICAtdGhpcy5jZW50ZXIueSxcbiAgICAgICAgICAtdGhpcy5jZW50ZXIuelxuICAgICAgICApXG4gICAgICApO1xuICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gaW5pdGlhbE1hdHJpeC5hNDtcblxuICAgIGNvbnN0IGV5ZVZlY3RvciA9IG5ldyBWZWN0b3IoXG4gICAgICBjYW1lcmFQb3NpdGlvbi54LFxuICAgICAgY2FtZXJhUG9zaXRpb24ueSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uLnpcbiAgICApO1xuXG4gICAgY29uc3QgY2VudGVyVmVjdG9yID0gbmV3IFZlY3RvcihcbiAgICAgIHRoaXMuY2VudGVyLngsXG4gICAgICB0aGlzLmNlbnRlci55LFxuICAgICAgdGhpcy5jZW50ZXIuelxuICAgICk7XG4gICAgY29uc3QgdXBWZWN0b3IgPSBuZXcgVmVjdG9yKDAsIDEsIDApO1xuXG4gICAgY29uc3QgekF4aXMgPSBleWVWZWN0b3Iuc3VidHJhY3QoY2VudGVyVmVjdG9yKS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCB4QXhpcyA9IHVwVmVjdG9yLmNyb3NzKHpBeGlzKS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCB5QXhpcyA9IHpBeGlzLmNyb3NzKHhBeGlzKS5ub3JtYWxpemUoKTtcblxuICAgIGNvbnN0IGNhbWVyYU1hdHJpeCA9IG5ldyBNYXRyaXgoXG4gICAgICBuZXcgQ29vcmRpbmF0ZSh4QXhpcy54LCB4QXhpcy55LCB4QXhpcy56LCAwKSxcbiAgICAgIG5ldyBDb29yZGluYXRlKHlBeGlzLngsIHlBeGlzLnksIHlBeGlzLnosIDApLFxuICAgICAgbmV3IENvb3JkaW5hdGUoekF4aXMueCwgekF4aXMueSwgekF4aXMueiwgMCksXG4gICAgICBuZXcgQ29vcmRpbmF0ZShleWVWZWN0b3IueCwgZXllVmVjdG9yLnksIGV5ZVZlY3Rvci56LCAxKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2FtZXJhTWF0cml4LmludmVyc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmE7XG4iLCJpbXBvcnQgQ29sb3JJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvY29sb3ItaW50ZXJmYWNlXCI7XG5cbmNsYXNzIENvbG9yIGltcGxlbWVudHMgQ29sb3JJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgcjogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlclxuICApIHt9XG5cbiAgcHVibGljIGdldFRyaXBsZXQoKTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmJdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xuIiwiaW1wb3J0IENvb3JkaW5hdGVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvY29vcmRpbmF0ZS1pbnRlcmZhY2VcIjtcblxuY2xhc3MgQ29vcmRpbmF0ZSBpbXBsZW1lbnRzIENvb3JkaW5hdGVJbnRlcmZhY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHg6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgeTogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB6OiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHc6IG51bWJlclxuICApIHt9XG5cbiAgcHVibGljIGdldFF1YWRydXBsZXQoKTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcbiAgfVxuXG4gIHB1YmxpYyBkb3Qob3RoZXI6IENvb3JkaW5hdGUpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggKiBvdGhlci54ICsgdGhpcy55ICogb3RoZXIueSArIHRoaXMueiAqIG90aGVyLnogKyB0aGlzLncgKiBvdGhlci53XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlO1xuIiwiaW1wb3J0IERyYXdJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvZHJhdy1pbnRlcmZhY2VcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xuaW1wb3J0IFRleHR1cmUgZnJvbSBcIk9iamVjdHMvdGV4dHVyZVwiO1xuXG5jbGFzcyBEcmF3IGltcGxlbWVudHMgRHJhd0ludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBwb2ludDogUG9pbnQsIHB1YmxpYyByZWFkb25seSB0ZXh0dXJlOiBUZXh0dXJlKSB7fVxuXG4gIHB1YmxpYyBnZXRQb2ludCgpOiBQb2ludCB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGV4dHVyZSgpOiBUZXh0dXJlIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXc7XG4iLCJpbXBvcnQgRmFjZUludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9mYWNlLWludGVyZmFjZVwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiT2JqZWN0cy92ZWN0b3JcIjtcbmltcG9ydCBEcmF3IGZyb20gXCJPYmplY3RzL2RyYXdcIjtcblxuY2xhc3MgRmFjZSBpbXBsZW1lbnRzIEZhY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgYXJyYXlPZkRyYXc6IERyYXdbXSkge31cblxuICBwdWJsaWMgZmluZE5vcm1hbCgpOiBWZWN0b3Ige1xuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzBdLmdldFBvaW50KCk7XG4gICAgY29uc3QgcSA9IG5ldyBWZWN0b3IoZmlyc3RQb2ludC54LCBmaXJzdFBvaW50LnksIGZpcnN0UG9pbnQueik7XG5cbiAgICBjb25zdCBzZWNvbmRQb2ludCA9IHRoaXMuYXJyYXlPZkRyYXdbMV0uZ2V0UG9pbnQoKTtcbiAgICBjb25zdCByID0gbmV3IFZlY3RvcihzZWNvbmRQb2ludC54LCBzZWNvbmRQb2ludC55LCBzZWNvbmRQb2ludC56KTtcblxuICAgIGNvbnN0IHRoaXJkUG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzJdLmdldFBvaW50KCk7XG4gICAgY29uc3QgcyA9IG5ldyBWZWN0b3IodGhpcmRQb2ludC54LCB0aGlyZFBvaW50LnksIHRoaXJkUG9pbnQueik7XG5cbiAgICBjb25zdCBxciA9IHIuc3VidHJhY3QocSk7XG4gICAgY29uc3QgcXMgPSBzLnN1YnRyYWN0KHEpO1xuXG4gICAgcmV0dXJuIHFzLmNyb3NzKHFyKS5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVGFuZ2VudHMoKTogVmVjdG9yW10ge1xuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzBdLmdldFBvaW50KCk7XG4gICAgY29uc3QgcSA9IG5ldyBWZWN0b3IoZmlyc3RQb2ludC54LCBmaXJzdFBvaW50LnksIGZpcnN0UG9pbnQueik7XG5cbiAgICBjb25zdCBzZWNvbmRQb2ludCA9IHRoaXMuYXJyYXlPZkRyYXdbMV0uZ2V0UG9pbnQoKTtcbiAgICBjb25zdCByID0gbmV3IFZlY3RvcihzZWNvbmRQb2ludC54LCBzZWNvbmRQb2ludC55LCBzZWNvbmRQb2ludC56KTtcblxuICAgIGNvbnN0IHRoaXJkUG9pbnQgPSB0aGlzLmFycmF5T2ZEcmF3WzJdLmdldFBvaW50KCk7XG4gICAgY29uc3QgcyA9IG5ldyBWZWN0b3IodGhpcmRQb2ludC54LCB0aGlyZFBvaW50LnksIHRoaXJkUG9pbnQueik7XG5cbiAgICBjb25zdCBxciA9IHIuc3VidHJhY3QocSk7XG4gICAgY29uc3QgcXMgPSBzLnN1YnRyYWN0KHEpO1xuXG4gICAgcmV0dXJuIFtxci5ub3JtYWxpemUoKSwgcXMubm9ybWFsaXplKCldO1xuICB9XG5cbiAgcHVibGljIGdldFJhd1Bvc2l0aW9uKCk6IHJlYWRvbmx5IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheU9mRHJhdy5mbGF0TWFwKChkcmF3KSA9PiBkcmF3LmdldFBvaW50KCkuZ2V0VHJpcGxldCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYXdUZXh0dXJlKCk6IHJlYWRvbmx5IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheU9mRHJhdy5mbGF0TWFwKChkcmF3KSA9PiBkcmF3LmdldFRleHR1cmUoKS5nZXRQYWlyKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCJpbXBvcnQgTGFtYmRhSW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL2xhbWJkYS1pbnRlcmZhY2VcIjtcblxuY2xhc3MgTGFtYmRhIGltcGxlbWVudHMgTGFtYmRhSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJhd0Z1bmN0aW9uOiBzdHJpbmcpIHt9XG5cbiAgcHVibGljIGNhbGwoYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZXZhbChgKCR7dGhpcy5yYXdGdW5jdGlvbn0pKCR7Y30pYCkgYXMgbnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbWJkYTtcbiIsImltcG9ydCBMaWdodEludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9saWdodC1pbnRlcmZhY2VcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIk9iamVjdHMvdmVjdG9yXCI7XG5cbmNsYXNzIExpZ2h0IGV4dGVuZHMgVmVjdG9yIGltcGxlbWVudHMgTGlnaHRJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB5OiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHo6IG51bWJlclxuICApIHtcbiAgICBzdXBlcih4LCB5LCB6KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYXdEaXJlY3Rpb24oKTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICBjb25zdCB1bml0VmVjdG9yID0gdGhpcy5ub3JtYWxpemUoKTtcblxuICAgIHJldHVybiB1bml0VmVjdG9yLmdldFRyaXBsZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXZlcnNlKCk6IExpZ2h0IHtcbiAgICByZXR1cm4gbmV3IExpZ2h0KC10aGlzLngsIC10aGlzLnksIC10aGlzLnopO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZ2h0O1xuIiwiaW1wb3J0IE1hdHJpeEludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9tYXRyaXgtaW50ZXJmYWNlXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XG5cbmNsYXNzIE1hdHJpeCBpbXBsZW1lbnRzIE1hdHJpeEludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBhMTogQ29vcmRpbmF0ZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgYTI6IENvb3JkaW5hdGUsXG4gICAgcHVibGljIHJlYWRvbmx5IGEzOiBDb29yZGluYXRlLFxuICAgIHB1YmxpYyByZWFkb25seSBhNDogQ29vcmRpbmF0ZVxuICApIHt9XG5cbiAgcHVibGljIGZsYXR0ZW4oKTogcmVhZG9ubHkgbnVtYmVyW10ge1xuICAgIHJldHVybiBbXG4gICAgICAuLi50aGlzLmExLmdldFF1YWRydXBsZXQoKSxcbiAgICAgIC4uLnRoaXMuYTIuZ2V0UXVhZHJ1cGxldCgpLFxuICAgICAgLi4udGhpcy5hMy5nZXRRdWFkcnVwbGV0KCksXG4gICAgICAuLi50aGlzLmE0LmdldFF1YWRydXBsZXQoKSxcbiAgICBdO1xuICB9XG5cbiAgcHVibGljIG11bHRpcGx5TWF0cml4KG90aGVyOiBNYXRyaXgpOiBNYXRyaXgge1xuICAgIC8qIFVucGFjayBcInRoaXNcIiBtYXRyaXggKi9cbiAgICBjb25zdCBbYTExLCBhMjEsIGEzMSwgYTQxXSA9IHRoaXMuYTEuZ2V0UXVhZHJ1cGxldCgpO1xuICAgIGNvbnN0IFthMTIsIGEyMiwgYTMyLCBhNDJdID0gdGhpcy5hMi5nZXRRdWFkcnVwbGV0KCk7XG4gICAgY29uc3QgW2ExMywgYTIzLCBhMzMsIGE0M10gPSB0aGlzLmEzLmdldFF1YWRydXBsZXQoKTtcbiAgICBjb25zdCBbYTE0LCBhMjQsIGEzNCwgYTQ0XSA9IHRoaXMuYTQuZ2V0UXVhZHJ1cGxldCgpO1xuXG4gICAgLyogQ3JlYXRlIHRyYW5zcG9zZSBjb29yZGluYXRlICovXG4gICAgY29uc3QgYTEgPSBuZXcgQ29vcmRpbmF0ZShhMTEsIGExMiwgYTEzLCBhMTQpO1xuICAgIGNvbnN0IGEyID0gbmV3IENvb3JkaW5hdGUoYTIxLCBhMjIsIGEyMywgYTI0KTtcbiAgICBjb25zdCBhMyA9IG5ldyBDb29yZGluYXRlKGEzMSwgYTMyLCBhMzMsIGEzNCk7XG4gICAgY29uc3QgYTQgPSBuZXcgQ29vcmRpbmF0ZShhNDEsIGE0MiwgYTQzLCBhNDQpO1xuXG4gICAgLyogTWF0cml4IG11bHRpcGxpY2F0aW9uICovXG4gICAgY29uc3QgYjExID0gYTEuZG90KG90aGVyLmExKTtcbiAgICBjb25zdCBiMTIgPSBhMS5kb3Qob3RoZXIuYTIpO1xuICAgIGNvbnN0IGIxMyA9IGExLmRvdChvdGhlci5hMyk7XG4gICAgY29uc3QgYjE0ID0gYTEuZG90KG90aGVyLmE0KTtcbiAgICBjb25zdCBiMjEgPSBhMi5kb3Qob3RoZXIuYTEpO1xuICAgIGNvbnN0IGIyMiA9IGEyLmRvdChvdGhlci5hMik7XG4gICAgY29uc3QgYjIzID0gYTIuZG90KG90aGVyLmEzKTtcbiAgICBjb25zdCBiMjQgPSBhMi5kb3Qob3RoZXIuYTQpO1xuICAgIGNvbnN0IGIzMSA9IGEzLmRvdChvdGhlci5hMSk7XG4gICAgY29uc3QgYjMyID0gYTMuZG90KG90aGVyLmEyKTtcbiAgICBjb25zdCBiMzMgPSBhMy5kb3Qob3RoZXIuYTMpO1xuICAgIGNvbnN0IGIzNCA9IGEzLmRvdChvdGhlci5hNCk7XG4gICAgY29uc3QgYjQxID0gYTQuZG90KG90aGVyLmExKTtcbiAgICBjb25zdCBiNDIgPSBhNC5kb3Qob3RoZXIuYTIpO1xuICAgIGNvbnN0IGI0MyA9IGE0LmRvdChvdGhlci5hMyk7XG4gICAgY29uc3QgYjQ0ID0gYTQuZG90KG90aGVyLmE0KTtcblxuICAgIC8qIENyZWF0ZSByZXN1bHQgY29vcmRpbmF0ZSAqL1xuICAgIGNvbnN0IGIxID0gbmV3IENvb3JkaW5hdGUoYjExLCBiMjEsIGIzMSwgYjQxKTtcbiAgICBjb25zdCBiMiA9IG5ldyBDb29yZGluYXRlKGIxMiwgYjIyLCBiMzIsIGI0Mik7XG4gICAgY29uc3QgYjMgPSBuZXcgQ29vcmRpbmF0ZShiMTMsIGIyMywgYjMzLCBiNDMpO1xuICAgIGNvbnN0IGI0ID0gbmV3IENvb3JkaW5hdGUoYjE0LCBiMjQsIGIzNCwgYjQ0KTtcblxuICAgIC8qIENyZWF0ZSBuZXcgbWF0cml4ICovXG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChiMSwgYjIsIGIzLCBiNCk7XG5cbiAgICByZXR1cm4gbmV3TWF0cml4O1xuICB9XG5cbiAgcHVibGljIG11bHRpcGx5Q29vcmRpbmF0ZShjb29yZGluYXRlOiBDb29yZGluYXRlKTogQ29vcmRpbmF0ZSB7XG4gICAgLyogVW5wYWNrIFwidGhpc1wiIG1hdHJpeCAqL1xuICAgIGNvbnN0IFthMTEsIGEyMSwgYTMxLCBhNDFdID0gdGhpcy5hMS5nZXRRdWFkcnVwbGV0KCk7XG4gICAgY29uc3QgW2ExMiwgYTIyLCBhMzIsIGE0Ml0gPSB0aGlzLmEyLmdldFF1YWRydXBsZXQoKTtcbiAgICBjb25zdCBbYTEzLCBhMjMsIGEzMywgYTQzXSA9IHRoaXMuYTMuZ2V0UXVhZHJ1cGxldCgpO1xuICAgIGNvbnN0IFthMTQsIGEyNCwgYTM0LCBhNDRdID0gdGhpcy5hNC5nZXRRdWFkcnVwbGV0KCk7XG5cbiAgICAvKiBDcmVhdGUgdHJhbnNwb3NlIGNvb3JkaW5hdGUgKi9cbiAgICBjb25zdCBhMSA9IG5ldyBDb29yZGluYXRlKGExMSwgYTEyLCBhMTMsIGExNCk7XG4gICAgY29uc3QgYTIgPSBuZXcgQ29vcmRpbmF0ZShhMjEsIGEyMiwgYTIzLCBhMjQpO1xuICAgIGNvbnN0IGEzID0gbmV3IENvb3JkaW5hdGUoYTMxLCBhMzIsIGEzMywgYTM0KTtcbiAgICBjb25zdCBhNCA9IG5ldyBDb29yZGluYXRlKGE0MSwgYTQyLCBhNDMsIGE0NCk7XG5cbiAgICAvKiBDcmVhdGUgcmVzdWx0IHZhbHVlICovXG4gICAgY29uc3QgeCA9IGExLmRvdChjb29yZGluYXRlKTtcbiAgICBjb25zdCB5ID0gYTIuZG90KGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHogPSBhMy5kb3QoY29vcmRpbmF0ZSk7XG4gICAgY29uc3QgdyA9IGE0LmRvdChjb29yZGluYXRlKTtcblxuICAgIC8qIENyZWF0ZSBuZXcgY29vcmRpbmF0ZSAqL1xuICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSBuZXcgQ29vcmRpbmF0ZSh4LCB5LCB6LCB3KTtcblxuICAgIHJldHVybiBuZXdDb29yZGluYXRlO1xuICB9XG5cbiAgcHVibGljIGludmVyc2UoKTogTWF0cml4IHtcbiAgICBjb25zdCBtMTEgPSB0aGlzLmExLng7XG4gICAgY29uc3QgbTEyID0gdGhpcy5hMS55O1xuICAgIGNvbnN0IG0xMyA9IHRoaXMuYTEuejtcbiAgICBjb25zdCBtMTQgPSB0aGlzLmExLnc7XG4gICAgY29uc3QgbTIxID0gdGhpcy5hMi54O1xuICAgIGNvbnN0IG0yMiA9IHRoaXMuYTIueTtcbiAgICBjb25zdCBtMjMgPSB0aGlzLmEyLno7XG4gICAgY29uc3QgbTI0ID0gdGhpcy5hMi53O1xuICAgIGNvbnN0IG0zMSA9IHRoaXMuYTMueDtcbiAgICBjb25zdCBtMzIgPSB0aGlzLmEzLnk7XG4gICAgY29uc3QgbTMzID0gdGhpcy5hMy56O1xuICAgIGNvbnN0IG0zNCA9IHRoaXMuYTMudztcbiAgICBjb25zdCBtNDEgPSB0aGlzLmE0Lng7XG4gICAgY29uc3QgbTQyID0gdGhpcy5hNC55O1xuICAgIGNvbnN0IG00MyA9IHRoaXMuYTQuejtcbiAgICBjb25zdCBtNDQgPSB0aGlzLmE0Lnc7XG5cbiAgICAvKiBGaW5kIDN4MyBkZXRlcm1pbmFudCBvZiBlYWNoIHRlcm0gKi9cbiAgICBjb25zdCBkZXRtMTEgPVxuICAgICAgbTIyICogbTMzICogbTQ0ICtcbiAgICAgIG0yMyAqIG0zNCAqIG00MiArXG4gICAgICBtMjQgKiBtMzIgKiBtNDMgLVxuICAgICAgbTI0ICogbTMzICogbTQyIC1cbiAgICAgIG0yMyAqIG0zMiAqIG00NCAtXG4gICAgICBtMjIgKiBtMzQgKiBtNDM7XG4gICAgY29uc3QgZGV0bTEyID1cbiAgICAgIG0yMSAqIG0zMyAqIG00NCArXG4gICAgICBtMjMgKiBtMzQgKiBtNDEgK1xuICAgICAgbTI0ICogbTMxICogbTQzIC1cbiAgICAgIG0yNCAqIG0zMyAqIG00MSAtXG4gICAgICBtMjMgKiBtMzEgKiBtNDQgLVxuICAgICAgbTIxICogbTM0ICogbTQzO1xuICAgIGNvbnN0IGRldG0xMyA9XG4gICAgICBtMjEgKiBtMzIgKiBtNDQgK1xuICAgICAgbTIyICogbTM0ICogbTQxICtcbiAgICAgIG0yNCAqIG0zMSAqIG00MiAtXG4gICAgICBtMjQgKiBtMzIgKiBtNDEgLVxuICAgICAgbTIyICogbTMxICogbTQ0IC1cbiAgICAgIG0yMSAqIG0zNCAqIG00MjtcbiAgICBjb25zdCBkZXRtMTQgPVxuICAgICAgbTIxICogbTMyICogbTQzICtcbiAgICAgIG0yMiAqIG0zMyAqIG00MSArXG4gICAgICBtMjMgKiBtMzEgKiBtNDIgLVxuICAgICAgbTIzICogbTMyICogbTQxIC1cbiAgICAgIG0yMiAqIG0zMSAqIG00MyAtXG4gICAgICBtMjEgKiBtMzMgKiBtNDI7XG4gICAgY29uc3QgZGV0bTIxID1cbiAgICAgIG0xMiAqIG0zMyAqIG00NCArXG4gICAgICBtMTMgKiBtMzQgKiBtNDIgK1xuICAgICAgbTE0ICogbTMyICogbTQzIC1cbiAgICAgIG0xNCAqIG0zMyAqIG00MiAtXG4gICAgICBtMTMgKiBtMzIgKiBtNDQgLVxuICAgICAgbTEyICogbTM0ICogbTQzO1xuICAgIGNvbnN0IGRldG0yMiA9XG4gICAgICBtMTEgKiBtMzMgKiBtNDQgK1xuICAgICAgbTEzICogbTM0ICogbTQxICtcbiAgICAgIG0xNCAqIG0zMSAqIG00MyAtXG4gICAgICBtMTQgKiBtMzMgKiBtNDEgLVxuICAgICAgbTEzICogbTMxICogbTQ0IC1cbiAgICAgIG0xMSAqIG0zNCAqIG00MztcbiAgICBjb25zdCBkZXRtMjMgPVxuICAgICAgbTExICogbTMyICogbTQ0ICtcbiAgICAgIG0xMiAqIG0zNCAqIG00MSArXG4gICAgICBtMTQgKiBtMzEgKiBtNDIgLVxuICAgICAgbTE0ICogbTMyICogbTQxIC1cbiAgICAgIG0xMiAqIG0zMSAqIG00NCAtXG4gICAgICBtMTEgKiBtMzQgKiBtNDI7XG4gICAgY29uc3QgZGV0bTI0ID1cbiAgICAgIG0xMSAqIG0zMiAqIG00MyArXG4gICAgICBtMTIgKiBtMzMgKiBtNDEgK1xuICAgICAgbTEzICogbTMxICogbTQyIC1cbiAgICAgIG0xMyAqIG0zMiAqIG00MSAtXG4gICAgICBtMTIgKiBtMzEgKiBtNDMgLVxuICAgICAgbTExICogbTMzICogbTQyO1xuICAgIGNvbnN0IGRldG0zMSA9XG4gICAgICBtMTIgKiBtMjMgKiBtNDQgK1xuICAgICAgbTEzICogbTI0ICogbTQyICtcbiAgICAgIG0xNCAqIG0yMiAqIG00MyAtXG4gICAgICBtMTQgKiBtMjMgKiBtNDIgLVxuICAgICAgbTEzICogbTIyICogbTQ0IC1cbiAgICAgIG0xMiAqIG0yNCAqIG00MztcbiAgICBjb25zdCBkZXRtMzIgPVxuICAgICAgbTExICogbTIzICogbTQ0ICtcbiAgICAgIG0xMyAqIG0yNCAqIG00MSArXG4gICAgICBtMTQgKiBtMjEgKiBtNDMgLVxuICAgICAgbTE0ICogbTIzICogbTQxIC1cbiAgICAgIG0xMyAqIG0yMSAqIG00NCAtXG4gICAgICBtMTEgKiBtMjQgKiBtNDI7XG4gICAgY29uc3QgZGV0bTMzID1cbiAgICAgIG0xMSAqIG0yMiAqIG00NCArXG4gICAgICBtMTIgKiBtMjQgKiBtNDEgK1xuICAgICAgbTE0ICogbTIxICogbTQyIC1cbiAgICAgIG0xNCAqIG0yMiAqIG00MSAtXG4gICAgICBtMTIgKiBtMjEgKiBtNDQgLVxuICAgICAgbTExICogbTI0ICogbTQyO1xuICAgIGNvbnN0IGRldG0zNCA9XG4gICAgICBtMTEgKiBtMjIgKiBtNDMgK1xuICAgICAgbTEyICogbTIzICogbTQxICtcbiAgICAgIG0xMyAqIG0yMSAqIG00MiAtXG4gICAgICBtMTMgKiBtMjIgKiBtNDEgLVxuICAgICAgbTEyICogbTIxICogbTQzIC1cbiAgICAgIG0xMSAqIG0yMyAqIG00MjtcbiAgICBjb25zdCBkZXRtNDEgPVxuICAgICAgbTEyICogbTIzICogbTM0ICtcbiAgICAgIG0xMyAqIG0yNCAqIG0zMiArXG4gICAgICBtMTQgKiBtMjIgKiBtMzMgLVxuICAgICAgbTE0ICogbTIzICogbTMyIC1cbiAgICAgIG0xMyAqIG0yMiAqIG0zNCAtXG4gICAgICBtMTIgKiBtMjQgKiBtMzM7XG4gICAgY29uc3QgZGV0bTQyID1cbiAgICAgIG0xMSAqIG0yMyAqIG0zNCArXG4gICAgICBtMTMgKiBtMjQgKiBtMzEgK1xuICAgICAgbTE0ICogbTIxICogbTMzIC1cbiAgICAgIG0xNCAqIG0yMyAqIG0zMSAtXG4gICAgICBtMTMgKiBtMjEgKiBtMzQgLVxuICAgICAgbTExICogbTI0ICogbTMzO1xuICAgIGNvbnN0IGRldG00MyA9XG4gICAgICBtMTEgKiBtMjIgKiBtMzQgK1xuICAgICAgbTEyICogbTI0ICogbTMxICtcbiAgICAgIG0xNCAqIG0yMSAqIG0zMiAtXG4gICAgICBtMTQgKiBtMjIgKiBtMzEgLVxuICAgICAgbTEyICogbTIxICogbTM0IC1cbiAgICAgIG0xMSAqIG0yNCAqIG0zMjtcbiAgICBjb25zdCBkZXRtNDQgPVxuICAgICAgbTExICogbTIyICogbTMzICtcbiAgICAgIG0xMiAqIG0yMyAqIG0zMSArXG4gICAgICBtMTMgKiBtMjEgKiBtMzIgLVxuICAgICAgbTEzICogbTIyICogbTMxIC1cbiAgICAgIG0xMiAqIG0yMSAqIG0zMyAtXG4gICAgICBtMTEgKiBtMjMgKiBtMzI7XG5cbiAgICBjb25zdCBkZXRBID0gbTExICogZGV0bTExIC0gbTIxICogZGV0bTIxICsgbTMxICogZGV0bTMxIC0gbTQxICogZGV0bTQxO1xuXG4gICAgcmV0dXJuIG5ldyBNYXRyaXgoXG4gICAgICBuZXcgQ29vcmRpbmF0ZShcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCAyKSAqIGRldG0xMSxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCAzKSAqIGRldG0yMSxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA0KSAqIGRldG0zMSxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG00MVxuICAgICAgKSxcbiAgICAgIG5ldyBDb29yZGluYXRlKFxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDMpICogZGV0bTEyLFxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDQpICogZGV0bTIyLFxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDUpICogZGV0bTMyLFxuICAgICAgICAoMSAvIGRldEEpICogTWF0aC5wb3coLTEsIDYpICogZGV0bTQyXG4gICAgICApLFxuICAgICAgbmV3IENvb3JkaW5hdGUoXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNCkgKiBkZXRtMTMsXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNSkgKiBkZXRtMjMsXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNikgKiBkZXRtMzMsXG4gICAgICAgICgxIC8gZGV0QSkgKiBNYXRoLnBvdygtMSwgNykgKiBkZXRtNDNcbiAgICAgICksXG4gICAgICBuZXcgQ29vcmRpbmF0ZShcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA1KSAqIGRldG0xNCxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA2KSAqIGRldG0yNCxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA3KSAqIGRldG0zNCxcbiAgICAgICAgKDEgLyBkZXRBKSAqIE1hdGgucG93KC0xLCA4KSAqIGRldG00NFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdHJhbnNwb3NlKCk6IE1hdHJpeCB7XG4gICAgLyogVW5wYWNrIFwidGhpc1wiIG1hdHJpeCAqL1xuICAgIGNvbnN0IFthMTEsIGEyMSwgYTMxLCBhNDFdID0gdGhpcy5hMS5nZXRRdWFkcnVwbGV0KCk7XG4gICAgY29uc3QgW2ExMiwgYTIyLCBhMzIsIGE0Ml0gPSB0aGlzLmEyLmdldFF1YWRydXBsZXQoKTtcbiAgICBjb25zdCBbYTEzLCBhMjMsIGEzMywgYTQzXSA9IHRoaXMuYTMuZ2V0UXVhZHJ1cGxldCgpO1xuICAgIGNvbnN0IFthMTQsIGEyNCwgYTM0LCBhNDRdID0gdGhpcy5hNC5nZXRRdWFkcnVwbGV0KCk7XG5cbiAgICAvKiBDcmVhdGUgdHJhbnNwb3NlIGNvb3JkaW5hdGUgKi9cbiAgICBjb25zdCBhMSA9IG5ldyBDb29yZGluYXRlKGExMSwgYTEyLCBhMTMsIGExNCk7XG4gICAgY29uc3QgYTIgPSBuZXcgQ29vcmRpbmF0ZShhMjEsIGEyMiwgYTIzLCBhMjQpO1xuICAgIGNvbnN0IGEzID0gbmV3IENvb3JkaW5hdGUoYTMxLCBhMzIsIGEzMywgYTM0KTtcbiAgICBjb25zdCBhNCA9IG5ldyBDb29yZGluYXRlKGE0MSwgYTQyLCBhNDMsIGE0NCk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChhMSwgYTIsIGEzLCBhNCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4O1xuIiwiaW1wb3J0IE5vZGVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvbm9kZS1pbnRlcmZhY2VcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiT2JqZWN0cy9jb2xvclwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiT2JqZWN0cy9jYW1lcmFcIjtcbmltcG9ydCBMaWdodCBmcm9tIFwiT2JqZWN0cy9saWdodFwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCJPYmplY3RzL3NoYXBlXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCJPYmplY3RzL21hdHJpeFwiO1xuaW1wb3J0IEZhY2UgZnJvbSBcIk9iamVjdHMvZmFjZVwiO1xuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tIFwiT3BlcmF0aW9ucy9wcm9qZWN0aW9uXCI7XG5pbXBvcnQgUHJvamVjdGlvblBhcmFtcyBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi1wYXJhbXNcIjtcbmltcG9ydCBQcm9qZWN0aW9uVHlwZSBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi10eXBlXCI7XG5pbXBvcnQgU2hhZGVyU3RhdHVzIGZyb20gXCJUeXBlcy9zaGFkZXItc3RhdHVzXCI7XG5pbXBvcnQgUHJvZ3JhbVBhcmFtIGZyb20gXCJUeXBlcy9wcm9ncmFtLXBhcmFtXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIlV0aWxzL3JlbmRlcmVyXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBTaGFwZSBpbXBsZW1lbnRzIE5vZGVJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXJyYXlPZkZhY2U6IEZhY2VbXSxcbiAgICBwdWJsaWMgdHg6IG51bWJlcixcbiAgICBwdWJsaWMgdHk6IG51bWJlcixcbiAgICBwdWJsaWMgdHo6IG51bWJlcixcbiAgICBwdWJsaWMgYW5nbGVYOiBudW1iZXIsXG4gICAgcHVibGljIGFuZ2xlWTogbnVtYmVyLFxuICAgIHB1YmxpYyBhbmdsZVo6IG51bWJlcixcbiAgICBwdWJsaWMgc3g6IG51bWJlcixcbiAgICBwdWJsaWMgc3k6IG51bWJlcixcbiAgICBwdWJsaWMgc3o6IG51bWJlclxuICApIHtcbiAgICBzdXBlcihhcnJheU9mRmFjZSwgdHgsIHR5LCB0eiwgYW5nbGVYLCBhbmdsZVksIGFuZ2xlWiwgc3gsIHN5LCBzeik7XG4gIH1cblxuICBwdWJsaWMgZmluZE5vZGUoaW5kZXg6IHN0cmluZyk6IE5vZGUge1xuICAgIGlmICh0aGlzLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQ6IE5vZGU7XG5cbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBmb3VuZE5vZGUgPSBjaGlsZC5maW5kTm9kZShpbmRleCk7XG5cbiAgICAgICAgaWYgKGZvdW5kTm9kZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZvdW5kTm9kZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJOb2RlPFQgZXh0ZW5kcyBQcm9qZWN0aW9uVHlwZT4oXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByb2plY3Rpb25UeXBlOiBULFxuICAgIHBhcmFtczogUHJvamVjdGlvblBhcmFtc1tUXSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBvZmZzZXRUcmFuc2xhdGVYOiBudW1iZXIsXG4gICAgb2Zmc2V0VHJhbnNsYXRlWTogbnVtYmVyLFxuICAgIGFtYmllbnRDb2xvcjogQ29sb3IsXG4gICAgZGlyZWN0aW9uYWxMaWdodDogTGlnaHQsXG4gICAgc2hhZGVyU3RhdHVzOiBTaGFkZXJTdGF0dXMsXG4gICAgbWFwcGluZ01vZGU6IHN0cmluZyxcbiAgICBjdXJyZW50V29ybGRNYXRyaXg6IE1hdHJpeFxuICApOiB2b2lkIHtcbiAgICAvKiBHZXQgTWF0cml4ICovXG4gICAgY29uc3QgbG9jYWxNYXRyaXggPSB0aGlzLmdldExvY2FsTWF0cml4KCk7XG5cbiAgICAvKiBJbml0aWFsaXplIHdpdGggV29ybGQgTWF0cml4ICovXG4gICAgbGV0IG1hdHJpeCA9IGN1cnJlbnRXb3JsZE1hdHJpeC5tdWx0aXBseU1hdHJpeChsb2NhbE1hdHJpeCk7XG5cbiAgICAvKiBHZXQgSW52ZXJzZSBUcmFuc3Bvc2UgTWF0cml4ICovXG4gICAgY29uc3QgaW52ZXJzZVRyYW5zcG9zZU1hdHJpeCA9IG1hdHJpeC5pbnZlcnNlKCkudHJhbnNwb3NlKCk7XG5cbiAgICAvKiBBZGQgTG9va2F0IHRvIE1hdHJpeCAqL1xuICAgIG1hdHJpeCA9IGNhbWVyYS5sb29rQXQoKS5tdWx0aXBseU1hdHJpeChtYXRyaXgpO1xuXG4gICAgLyogT2Zmc2V0IFBvc2l0aW9uIHRvIENlbnRlciBvZiBPYmplY3QgKi9cbiAgICBtYXRyaXggPSBUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbihcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVgsXG4gICAgICBvZmZzZXRUcmFuc2xhdGVZLFxuICAgICAgMFxuICAgICkubXVsdGlwbHlNYXRyaXgobWF0cml4KTtcblxuICAgIC8qIEFkZCBQcm9qZWN0aW9uIHRvIE1hdHJpeCAqL1xuICAgIHN3aXRjaCAocHJvamVjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgXCJvcnRob2dyYXBoaWNcIjpcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgYm90dG9tLFxuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBuZWFyOiBuZWFyT3J0aG9ncmFwaWMsXG4gICAgICAgICAgZmFyOiBmYXJPcnRob2dyYXBoaWMsXG4gICAgICAgIH0gPSBwYXJhbXMgYXMgUHJvamVjdGlvblBhcmFtc1tcIm9ydGhvZ3JhcGhpY1wiXTtcblxuICAgICAgICBtYXRyaXggPSBQcm9qZWN0aW9uLm9ydGhvZ3JhcGhpYyhcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgbmVhck9ydGhvZ3JhcGljLFxuICAgICAgICAgIGZhck9ydGhvZ3JhcGhpY1xuICAgICAgICApLm11bHRpcGx5TWF0cml4KG1hdHJpeCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBlcnNwZWN0aXZlXCI6XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBmaWVsZE9mVmlldyxcbiAgICAgICAgICBhc3BlY3QsXG4gICAgICAgICAgbmVhcjogbmVhclBlcnNwZWN0aXZlLFxuICAgICAgICAgIGZhcjogZmFyUGVyc3BlY3RpdmUsXG4gICAgICAgIH0gPSBwYXJhbXMgYXMgUHJvamVjdGlvblBhcmFtc1tcInBlcnNwZWN0aXZlXCJdO1xuXG4gICAgICAgIG1hdHJpeCA9IFByb2plY3Rpb24ucGVyc3BlY3RpdmUoXG4gICAgICAgICAgZmllbGRPZlZpZXcsXG4gICAgICAgICAgYXNwZWN0LFxuICAgICAgICAgIG5lYXJQZXJzcGVjdGl2ZSxcbiAgICAgICAgICBmYXJQZXJzcGVjdGl2ZVxuICAgICAgICApLm11bHRpcGx5TWF0cml4KG1hdHJpeCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm9ibGlxdWVcIjpcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGZhY3RvcixcbiAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICBvcnRob19sZWZ0LFxuICAgICAgICAgIG9ydGhvX3JpZ2h0LFxuICAgICAgICAgIG9ydGhvX2JvdHRvbSxcbiAgICAgICAgICBvcnRob190b3AsXG4gICAgICAgICAgb3J0aG9fbmVhcixcbiAgICAgICAgICBvcnRob19mYXIsXG4gICAgICAgIH0gPSBwYXJhbXMgYXMgUHJvamVjdGlvblBhcmFtc1tcIm9ibGlxdWVcIl07XG5cbiAgICAgICAgbWF0cml4ID0gUHJvamVjdGlvbi5vYmxpcXVlKFxuICAgICAgICAgIGZhY3RvcixcbiAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICBvcnRob19sZWZ0LFxuICAgICAgICAgIG9ydGhvX3JpZ2h0LFxuICAgICAgICAgIG9ydGhvX2JvdHRvbSxcbiAgICAgICAgICBvcnRob190b3AsXG4gICAgICAgICAgb3J0aG9fbmVhcixcbiAgICAgICAgICBvcnRob19mYXJcbiAgICAgICAgKS5tdWx0aXBseU1hdHJpeChtYXRyaXgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByYXdNYXRyaXggPSBtYXRyaXguZmxhdHRlbigpO1xuICAgIGNvbnN0IHJhd0ludmVyc2VUcmFuc3Bvc2VNYXRyaXggPSBpbnZlcnNlVHJhbnNwb3NlTWF0cml4LmZsYXR0ZW4oKTtcblxuICAgIC8qIEdldCBBbWJpZW50IENvbG9yICovXG4gICAgY29uc3QgcmF3QW1iaWVudENvbG9yID0gYW1iaWVudENvbG9yLmdldFRyaXBsZXQoKTtcblxuICAgIC8qIEdldCBEaXJlY3Rpb25hbCBMaWdodCAqL1xuICAgIGNvbnN0IHJhd0RpcmVjdGlvbmFsTGlnaHQgPSBkaXJlY3Rpb25hbExpZ2h0LmdldFJhd0RpcmVjdGlvbigpO1xuXG4gICAgLyogQ3JlYXRlIFByb2dyYW0gUGFyYW1ldGVyICovXG4gICAgY29uc3QgcHJvZ3JhbVBhcmFtOiBQcm9ncmFtUGFyYW0gPSB7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHJhd1Bvc2l0aW9uOiB0aGlzLmdldFJhd1Bvc2l0aW9uKCksXG4gICAgICAgIHJhd05vcm1hbDogdGhpcy5nZXRSYXdOb3JtYWwoKSxcbiAgICAgICAgcmF3VGV4dHVyZTogdGhpcy5nZXRSYXdUZXh0dXJlKCksXG4gICAgICAgIHJhd1RhbmdlbnQ6IHRoaXMuZ2V0UmF3VGFuZ2VudCgpLFxuICAgICAgICByYXdCaXRhbmdlbnQ6IHRoaXMuZ2V0UmF3Qml0YW5nZW50KCksXG4gICAgICB9LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgcmF3TWF0cml4LFxuICAgICAgICByYXdJbnZlcnNlVHJhbnNwb3NlTWF0cml4LFxuICAgICAgICByYXdBbWJpZW50Q29sb3IsXG4gICAgICAgIHJhd0RpcmVjdGlvbmFsTGlnaHQsXG4gICAgICAgIHNoYWRlclN0YXR1cyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8qIENvdW50IFZlcnRleCAqL1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFZlcnRleCgpO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmVuZGVyZXIucmVuZGVyKHByb2dyYW1QYXJhbSwgY291bnQsIG1hcHBpbmdNb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJUcmVlPFQgZXh0ZW5kcyBQcm9qZWN0aW9uVHlwZT4oXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByb2plY3Rpb25UeXBlOiBULFxuICAgIHBhcmFtczogUHJvamVjdGlvblBhcmFtc1tUXSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBvZmZzZXRUcmFuc2xhdGVYOiBudW1iZXIsXG4gICAgb2Zmc2V0VHJhbnNsYXRlWTogbnVtYmVyLFxuICAgIGFtYmllbnRDb2xvcjogQ29sb3IsXG4gICAgZGlyZWN0aW9uYWxMaWdodDogTGlnaHQsXG4gICAgc2hhZGVyU3RhdHVzOiBTaGFkZXJTdGF0dXMsXG4gICAgbWFwcGluZ01vZGU6IHN0cmluZyxcbiAgICBjdXJyZW50V29ybGRNYXRyaXg6IE1hdHJpeFxuICApOiB2b2lkIHtcbiAgICAvKiBSZW5kZXIgQ3VycmVudCBOb2RlICovXG4gICAgdGhpcy5yZW5kZXJOb2RlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICBwcm9qZWN0aW9uVHlwZSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNhbWVyYSxcbiAgICAgIG9mZnNldFRyYW5zbGF0ZVgsXG4gICAgICBvZmZzZXRUcmFuc2xhdGVZLFxuICAgICAgYW1iaWVudENvbG9yLFxuICAgICAgZGlyZWN0aW9uYWxMaWdodCxcbiAgICAgIHNoYWRlclN0YXR1cyxcbiAgICAgIG1hcHBpbmdNb2RlLFxuICAgICAgY3VycmVudFdvcmxkTWF0cml4XG4gICAgKTtcblxuICAgIC8qIENoYW5nZSBXb3JsZCBNYXRyaXggZm9yIENoaWxkcmVuICovXG4gICAgY29uc3QgY2hpbGRyZW5Xb3JsZE1hdHJpeCA9IGN1cnJlbnRXb3JsZE1hdHJpeC5tdWx0aXBseU1hdHJpeChcbiAgICAgIHRoaXMuZ2V0TG9jYWxNYXRyaXgoKVxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgQ2hpbGRyZW4gKi9cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnJlbmRlclRyZWUoXG4gICAgICAgIHJlbmRlcmVyLFxuICAgICAgICBwcm9qZWN0aW9uVHlwZSxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBjYW1lcmEsXG4gICAgICAgIG9mZnNldFRyYW5zbGF0ZVgsXG4gICAgICAgIG9mZnNldFRyYW5zbGF0ZVksXG4gICAgICAgIGFtYmllbnRDb2xvcixcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodCxcbiAgICAgICAgc2hhZGVyU3RhdHVzLFxuICAgICAgICBtYXBwaW5nTW9kZSxcbiAgICAgICAgY2hpbGRyZW5Xb3JsZE1hdHJpeFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImltcG9ydCBQb2ludEludGVyZmFjZSBmcm9tIFwiSW50ZXJmYWNlcy9wb2ludC1pbnRlcmZhY2VcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCJPYmplY3RzL2Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgUG9pbnQgZXh0ZW5kcyBDb29yZGluYXRlIGltcGxlbWVudHMgUG9pbnRJbnRlcmZhY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHg6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgeTogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB6OiBudW1iZXJcbiAgKSB7XG4gICAgc3VwZXIoeCwgeSwgeiwgMSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJpcGxldCgpOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgU2hhcGVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvc2hhcGUtaW50ZXJmYWNlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIk9iamVjdHMvcG9pbnRcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIk9iamVjdHMvbWF0cml4XCI7XG5pbXBvcnQgRmFjZSBmcm9tIFwiT2JqZWN0cy9mYWNlXCI7XG5pbXBvcnQgVHJhbnNmb3JtYXRpb24gZnJvbSBcIk9wZXJhdGlvbnMvdHJhbnNmb3JtYXRpb25cIjtcblxuY2xhc3MgU2hhcGUgaW1wbGVtZW50cyBTaGFwZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBhcnJheU9mRmFjZTogRmFjZVtdLFxuICAgIHB1YmxpYyB0eDogbnVtYmVyLFxuICAgIHB1YmxpYyB0eTogbnVtYmVyLFxuICAgIHB1YmxpYyB0ejogbnVtYmVyLFxuICAgIHB1YmxpYyBhbmdsZVg6IG51bWJlcixcbiAgICBwdWJsaWMgYW5nbGVZOiBudW1iZXIsXG4gICAgcHVibGljIGFuZ2xlWjogbnVtYmVyLFxuICAgIHB1YmxpYyBzeDogbnVtYmVyLFxuICAgIHB1YmxpYyBzeTogbnVtYmVyLFxuICAgIHB1YmxpYyBzejogbnVtYmVyXG4gICkge31cblxuICBwdWJsaWMgbW92ZVgoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudHggPSBkZWx0YTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlWShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50eSA9IGRlbHRhO1xuICB9XG5cbiAgcHVibGljIG1vdmVaKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnR6ID0gZGVsdGE7XG4gIH1cblxuICBwdWJsaWMgcm90YXRlWChhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmdsZVggPSBhbmdsZTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGVZKGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ2xlWSA9IGFuZ2xlO1xuICB9XG5cbiAgcHVibGljIHJvdGF0ZVooYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYW5nbGVaID0gYW5nbGU7XG4gIH1cblxuICBwdWJsaWMgc2NhbGVYKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN4ID0gZGVsdGE7XG4gIH1cblxuICBwdWJsaWMgc2NhbGVZKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN5ID0gZGVsdGE7XG4gIH1cblxuICBwdWJsaWMgc2NhbGVaKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN6ID0gZGVsdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3UG9zaXRpb24oKTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBwb3NpdGlvbkFycmF5ID0gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PiBmLmdldFJhd1Bvc2l0aW9uKCkpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25BcnJheSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VGV4dHVyZSgpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IHRleHR1cmVBcnJheSA9IHRoaXMuYXJyYXlPZkZhY2UuZmxhdE1hcCgoZikgPT4gZi5nZXRSYXdUZXh0dXJlKCkpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGV4dHVyZUFycmF5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYXdOb3JtYWwoKTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBub3JtYWxBcnJheSA9IHRoaXMuYXJyYXlPZkZhY2UuZmxhdE1hcCgoZikgPT5cbiAgICAgIEFycmF5PHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXT4oZi5hcnJheU9mRHJhdy5sZW5ndGgpXG4gICAgICAgIC5maWxsKGYuZmluZE5vcm1hbCgpLmdldFRyaXBsZXQoKSlcbiAgICAgICAgLmZsYXQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShub3JtYWxBcnJheSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VGFuZ2VudCgpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IHRhbmdlbnRBcnJheSA9IHRoaXMuYXJyYXlPZkZhY2UuZmxhdE1hcCgoZikgPT5cbiAgICAgIEFycmF5PHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXT4oZi5hcnJheU9mRHJhdy5sZW5ndGgpXG4gICAgICAgIC5maWxsKGYuZmluZFRhbmdlbnRzKClbMF0uZ2V0VHJpcGxldCgpKVxuICAgICAgICAuZmxhdCgpXG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRhbmdlbnRBcnJheSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3Qml0YW5nZW50KCk6IEZsb2F0MzJBcnJheSB7XG4gICAgY29uc3QgYml0YW5nZW50QXJyYXkgPSB0aGlzLmFycmF5T2ZGYWNlLmZsYXRNYXAoKGYpID0+XG4gICAgICBBcnJheTxyZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+KGYuYXJyYXlPZkRyYXcubGVuZ3RoKVxuICAgICAgICAuZmlsbChmLmZpbmRUYW5nZW50cygpWzFdLmdldFRyaXBsZXQoKSlcbiAgICAgICAgLmZsYXQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShiaXRhbmdlbnRBcnJheSk7XG4gIH1cblxuICBwdWJsaWMgY291bnRWZXJ0ZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheU9mRmFjZS5mbGF0TWFwKChmKSA9PiBmLmFycmF5T2ZEcmF3KS5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxNYXRyaXgoKTogTWF0cml4IHtcbiAgICBjb25zdCBwaXZvdCA9IG5ldyBQb2ludCgwLCAwLCAwKTtcblxuICAgIHJldHVybiBUcmFuc2Zvcm1hdGlvbi5nZW5lcmFsKFxuICAgICAgdGhpcy50eCxcbiAgICAgIHRoaXMudHksXG4gICAgICB0aGlzLnR6LFxuICAgICAgdGhpcy5hbmdsZVgsXG4gICAgICB0aGlzLmFuZ2xlWSxcbiAgICAgIHRoaXMuYW5nbGVaLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMuc3ksXG4gICAgICB0aGlzLnN6LFxuICAgICAgcGl2b3RcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFRleHR1cmVJbnRlcmZhY2UgZnJvbSBcIkludGVyZmFjZXMvdGV4dHVyZS1pbnRlcmZhY2VcIjtcblxuY2xhc3MgVGV4dHVyZSBpbXBsZW1lbnRzIFRleHR1cmVJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyLCBwdWJsaWMgcmVhZG9ubHkgeTogbnVtYmVyKSB7fVxuXG4gIHB1YmxpYyBnZXRQYWlyKCk6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHR1cmU7XG4iLCJpbXBvcnQgVmVjdG9ySW50ZXJmYWNlIGZyb20gXCJJbnRlcmZhY2VzL3ZlY3Rvci1pbnRlcmZhY2VcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCJPYmplY3RzL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBDTE9TRVNUX1RPX1pFUk8gZnJvbSBcIkNvbnN0YW50cy9jbG9zZXN0LXRvLXplcm9cIjtcblxuY2xhc3MgVmVjdG9yIGV4dGVuZHMgQ29vcmRpbmF0ZSBpbXBsZW1lbnRzIFZlY3RvckludGVyZmFjZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB5OiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHo6IG51bWJlclxuICApIHtcbiAgICBzdXBlcih4LCB5LCB6LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmlwbGV0KCk6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcbiAgfVxuXG4gIHB1YmxpYyBub3JtYWxpemUoKTogVmVjdG9yIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnpcbiAgICApO1xuXG4gICAgcmV0dXJuIGxlbmd0aCA8IENMT1NFU1RfVE9fWkVST1xuICAgICAgPyBuZXcgVmVjdG9yKDAsIDAsIDApXG4gICAgICA6IG5ldyBWZWN0b3IodGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XG4gIH1cblxuICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54IC0gb3RoZXIueCwgdGhpcy55IC0gb3RoZXIueSwgdGhpcy56IC0gb3RoZXIueik7XG4gIH1cblxuICBwdWJsaWMgY3Jvc3Mob3RoZXI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICB0aGlzLnkgKiBvdGhlci56IC0gdGhpcy56ICogb3RoZXIueSxcbiAgICAgIHRoaXMueiAqIG90aGVyLnggLSB0aGlzLnggKiBvdGhlci56LFxuICAgICAgdGhpcy54ICogb3RoZXIueSAtIHRoaXMueSAqIG90aGVyLnhcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBNYXRyaXggZnJvbSBcIk9iamVjdHMvbWF0cml4XCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XG5cbmNsYXNzIFByb2plY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhcbiAgICBsZWZ0OiBudW1iZXIsXG4gICAgcmlnaHQ6IG51bWJlcixcbiAgICBib3R0b206IG51bWJlcixcbiAgICB0b3A6IG51bWJlcixcbiAgICBuZWFyOiBudW1iZXIsXG4gICAgZmFyOiBudW1iZXJcbiAgKTogTWF0cml4IHtcbiAgICBjb25zdCBwMSA9IG5ldyBDb29yZGluYXRlKDIgLyAocmlnaHQgLSBsZWZ0KSwgMCwgMCwgMCk7XG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAyIC8gKHRvcCAtIGJvdHRvbSksIDAsIDApO1xuICAgIGNvbnN0IHAzID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMiAvIChuZWFyIC0gZmFyKSwgMCk7XG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZShcbiAgICAgIC0ocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpLFxuICAgICAgLSh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAtKGZhciArIG5lYXIpIC8gKGZhciAtIG5lYXIpLFxuICAgICAgMVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBlcnNwZWN0aXZlKFxuICAgIGZpZWxkT2ZWaWV3OiBudW1iZXIsXG4gICAgYXNwZWN0OiBudW1iZXIsXG4gICAgbmVhcjogbnVtYmVyLFxuICAgIGZhcjogbnVtYmVyXG4gICk6IE1hdHJpeCB7XG4gICAgY29uc3QgZiA9IE1hdGgudGFuKDAuNSAqIChNYXRoLlBJIC0gZmllbGRPZlZpZXcpKTtcbiAgICBjb25zdCB3MSA9IC0oZmFyICsgbmVhcikgLyAoZmFyIC0gbmVhcik7XG4gICAgY29uc3QgdzIgPSAoLTIgKiBuZWFyICogZmFyKSAvIChmYXIgLSBuZWFyKTtcblxuICAgIGNvbnN0IHAxID0gbmV3IENvb3JkaW5hdGUoZiAvIGFzcGVjdCwgMCwgMCwgMCk7XG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCBmLCAwLCAwKTtcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIHcxLCAtMSk7XG4gICAgY29uc3QgcDQgPSBuZXcgQ29vcmRpbmF0ZSgwLCAwLCB3MiwgMCk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG9ibGlxdWUoXG4gICAgZmFjdG9yOiBudW1iZXIsXG4gICAgYW5nbGU6IG51bWJlcixcbiAgICBvcnRob19sZWZ0OiBudW1iZXIsXG4gICAgb3J0aG9fcmlnaHQ6IG51bWJlcixcbiAgICBvcnRob19ib3R0b206IG51bWJlcixcbiAgICBvcnRob190b3A6IG51bWJlcixcbiAgICBvcnRob19uZWFyOiBudW1iZXIsXG4gICAgb3J0aG9fZmFyOiBudW1iZXJcbiAgKTogTWF0cml4IHtcbiAgICAvKiBDYWxjdWxhdGUgb3J0aG9ncmFwaGljIHByb2plY3Rpb24gbWF0cml4ICovXG4gICAgY29uc3QgcE9ydGhvID0gUHJvamVjdGlvbi5vcnRob2dyYXBoaWMoXG4gICAgICBvcnRob19sZWZ0LFxuICAgICAgb3J0aG9fcmlnaHQsXG4gICAgICBvcnRob19ib3R0b20sXG4gICAgICBvcnRob190b3AsXG4gICAgICBvcnRob19uZWFyLFxuICAgICAgb3J0aG9fZmFyXG4gICAgKTtcblxuICAgIC8qIENhbGN1bGF0ZSB0cmFuc3Bvc2VkIHNoZWFyIHByb2plY3Rpb24gbWF0cml4ICovXG4gICAgY29uc3QgY290X2FuZ2xlID0gMSAvIE1hdGgudGFuKGFuZ2xlKTtcbiAgICBjb25zdCBzaGVhclggPSBmYWN0b3IgKiBjb3RfYW5nbGU7XG4gICAgY29uc3Qgc2hlYXJZID0gZmFjdG9yICogLWNvdF9hbmdsZTtcbiAgICBjb25zdCBwVHJTaGVhcjEgPSBuZXcgQ29vcmRpbmF0ZSgxLCAwLCAwLCAwKTtcbiAgICBjb25zdCBwVHJTaGVhcjIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAxLCAwLCAwKTtcbiAgICBjb25zdCBwVHJTaGVhcjMgPSBuZXcgQ29vcmRpbmF0ZShzaGVhclgsIHNoZWFyWSwgMSwgMCk7XG4gICAgY29uc3QgcFRyU2hlYXI0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG4gICAgY29uc3QgcFRyU2hlYXIgPSBuZXcgTWF0cml4KHBUclNoZWFyMSwgcFRyU2hlYXIyLCBwVHJTaGVhcjMsIHBUclNoZWFyNCk7XG5cbiAgICAvKiBDYWxjdWxhdGUgb2JsaXF1ZSBwcm9qZWN0aW9uIG1hdHJpeCAqL1xuICAgIGNvbnN0IG9ibGlxdWVNYXRyaXggPSBwT3J0aG8ubXVsdGlwbHlNYXRyaXgocFRyU2hlYXIpO1xuXG4gICAgcmV0dXJuIG9ibGlxdWVNYXRyaXg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdGlvbjtcbiIsImltcG9ydCBNYXRyaXggZnJvbSBcIk9iamVjdHMvbWF0cml4XCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiT2JqZWN0cy9jb29yZGluYXRlXCI7XG5cbmNsYXNzIFRyYW5zZm9ybWF0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXgge1xuICAgIGNvbnN0IHAxID0gbmV3IENvb3JkaW5hdGUoMSwgMCwgMCwgMCk7XG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAxLCAwLCAwKTtcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0aW9uKHR4OiBudW1iZXIsIHR5OiBudW1iZXIsIHR6OiBudW1iZXIpOiBNYXRyaXgge1xuICAgIGNvbnN0IHAxID0gbmV3IENvb3JkaW5hdGUoMSwgMCwgMCwgMCk7XG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAxLCAwLCAwKTtcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUodHgsIHR5LCB0eiwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZVg6IG51bWJlcik6IE1hdHJpeCB7XG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZSgxLCAwLCAwLCAwKTtcbiAgICBjb25zdCBwMiA9IG5ldyBDb29yZGluYXRlKDAsIE1hdGguY29zKGFuZ2xlWCksIE1hdGguc2luKGFuZ2xlWCksIDApO1xuICAgIGNvbnN0IHAzID0gbmV3IENvb3JkaW5hdGUoMCwgLU1hdGguc2luKGFuZ2xlWCksIE1hdGguY29zKGFuZ2xlWCksIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWShhbmdsZVk6IG51bWJlcik6IE1hdHJpeCB7XG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZShNYXRoLmNvcyhhbmdsZVkpLCAwLCAtTWF0aC5zaW4oYW5nbGVZKSwgMCk7XG4gICAgY29uc3QgcDIgPSBuZXcgQ29vcmRpbmF0ZSgwLCAxLCAwLCAwKTtcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKE1hdGguc2luKGFuZ2xlWSksIDAsIE1hdGguY29zKGFuZ2xlWSksIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWihhbmdsZVo6IG51bWJlcik6IE1hdHJpeCB7XG4gICAgY29uc3QgcDEgPSBuZXcgQ29vcmRpbmF0ZShNYXRoLmNvcyhhbmdsZVopLCBNYXRoLnNpbihhbmdsZVopLCAwLCAwKTtcbiAgICBjb25zdCBwMiA9IG5ldyBDb29yZGluYXRlKC1NYXRoLnNpbihhbmdsZVopLCBNYXRoLmNvcyhhbmdsZVopLCAwLCAwKTtcbiAgICBjb25zdCBwMyA9IG5ldyBDb29yZGluYXRlKDAsIDAsIDEsIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIHN6OiBudW1iZXIpOiBNYXRyaXgge1xuICAgIGNvbnN0IHAxID0gbmV3IENvb3JkaW5hdGUoc3gsIDAsIDAsIDApO1xuICAgIGNvbnN0IHAyID0gbmV3IENvb3JkaW5hdGUoMCwgc3ksIDAsIDApO1xuICAgIGNvbnN0IHAzID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgc3osIDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IENvb3JkaW5hdGUoMCwgMCwgMCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IE1hdHJpeChwMSwgcDIsIHAzLCBwNCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdlbmVyYWwoXG4gICAgdHg6IG51bWJlcixcbiAgICB0eTogbnVtYmVyLFxuICAgIHR6OiBudW1iZXIsXG4gICAgYW5nbGVYOiBudW1iZXIsXG4gICAgYW5nbGVZOiBudW1iZXIsXG4gICAgYW5nbGVaOiBudW1iZXIsXG4gICAgc3g6IG51bWJlcixcbiAgICBzeTogbnVtYmVyLFxuICAgIHN6OiBudW1iZXIsXG4gICAgcGl2b3Q6IENvb3JkaW5hdGVcbiAgKTogTWF0cml4IHtcbiAgICByZXR1cm4gVHJhbnNmb3JtYXRpb24udHJhbnNsYXRpb24odHgsIHR5LCB0eilcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbihwaXZvdC54LCBwaXZvdC55LCBwaXZvdC56KSlcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblgoYW5nbGVYKSlcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblkoYW5nbGVZKSlcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5yb3RhdGlvblooYW5nbGVaKSlcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi5zY2FsZShzeCwgc3ksIHN6KSlcbiAgICAgIC5tdWx0aXBseU1hdHJpeChUcmFuc2Zvcm1hdGlvbi50cmFuc2xhdGlvbigtcGl2b3QueCwgLXBpdm90LnksIC1waXZvdC56KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtYXRpb247XG4iLCJlbnVtIEFuaW1hdGlvblR5cGUge1xuICBNT1ZFX1ggPSBcIm1vdmVYXCIsXG4gIE1PVkVfWSA9IFwibW92ZVlcIixcbiAgTU9WRV9aID0gXCJtb3ZlWlwiLFxuICBST1RBVEVfWCA9IFwicm90YXRlWFwiLFxuICBST1RBVEVfWSA9IFwicm90YXRlWVwiLFxuICBST1RBVEVfWiA9IFwicm90YXRlWlwiLFxuICBTQ0FMRV9YID0gXCJzY2FsZVhcIixcbiAgU0NBTEVfWSA9IFwic2NhbGVZXCIsXG4gIFNDQUxFX1ogPSBcInNjYWxlWlwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25UeXBlO1xuIiwiZW51bSBNYXBwaW5nTW9kZSB7XG4gIFRFWFRVUkUgPSBcInRleHR1cmVcIixcbiAgRU5WSVJPTk1FTlQgPSBcImVudmlyb25tZW50XCIsXG4gIEJVTVAgPSBcImJ1bXBcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwcGluZ01vZGU7XG4iLCJlbnVtIFNoYWRlclN0YXR1cyB7XG4gIE9GRiA9IDAsXG4gIE9OID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhZGVyU3RhdHVzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGQ6IG51bWJlcikge1xuICByZXR1cm4gKGQgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHI6IG51bWJlcikge1xuICByZXR1cm4gKHIgKiAxODApIC8gTWF0aC5QSTtcbn1cbiIsImZ1bmN0aW9uIGlzUG93ZXJPZlR3byh2YWx1ZTogbnVtYmVyKSB7XG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUG93ZXJPZlR3bztcbiIsImZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXG4gIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsXG4gIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlclxuKTogV2ViR0xQcm9ncmFtIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcblxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpIGFzIGJvb2xlYW47XG4gIGlmICghc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBDb3VsZCBub3QgaW5pdGlhbGl6ZSBzaGFkZXJzOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2dyYW07XG4iLCJpbXBvcnQgUHJvZ3JhbVBhcmFtIGZyb20gXCJUeXBlcy9wcm9ncmFtLXBhcmFtXCI7XG5pbXBvcnQgUHJvZ3JhbUluZm8gZnJvbSBcIlR5cGVzL3Byb2dyYW0taW5mb1wiO1xuaW1wb3J0IFByb2dyYW1CdWZmZXIgZnJvbSBcIlR5cGVzL3Byb2dyYW0tYnVmZmVyXCI7XG5pbXBvcnQgRW52aXJvbm1lbnRJbmZvIGZyb20gXCJUeXBlcy9lbnZpcm9ubWVudC1pbmZvXCI7XG5pbXBvcnQgTWFwcGluZ01vZGUgZnJvbSBcIlR5cGVzL21hcHBpbmctbW9kZVwiO1xuaW1wb3J0IGlzUG93ZXJPZlR3byBmcm9tIFwiVXRpbHMvcG93ZXJcIjtcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICBwdWJsaWMgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICAgIHB1YmxpYyBwcm9ncmFtSW5mbzogUHJvZ3JhbUluZm8sXG4gICAgcHVibGljIHByb2dyYW1CdWZmZXI6IFByb2dyYW1CdWZmZXJcbiAgKSB7fVxuXG4gIHB1YmxpYyB0ZXh0dXJlKHNvdXJjZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIC8qIENyZWF0ZSBhIFRleHR1cmUgKi9cbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgY29uc3QgdGV4SW1hZ2VMZXZlbCA9IDA7XG4gICAgY29uc3QgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcbiAgICBjb25zdCB0ZXhJbWFnZVdpZHRoID0gd2lkdGg7XG4gICAgY29uc3QgdGV4SW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XG4gICAgY29uc3QgdGV4SW1hZ2VCb3JkZXIgPSAwO1xuICAgIGNvbnN0IHRleEltYWdlRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgIGNvbnN0IHRleEltYWdlVHlwZSA9IHRoaXMuZ2wuVU5TSUdORURfQllURTtcblxuICAgIC8vIExvYWQgdGV4dHVyZSB3aXRoIG9wYXF1ZSBibHVlIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBpbWFnZSB0byBsb2FkXG4gICAgdGhpcy5nbC50ZXhJbWFnZTJEKFxuICAgICAgdGhpcy5nbC5URVhUVVJFXzJELFxuICAgICAgdGV4SW1hZ2VMZXZlbCxcbiAgICAgIHRleEltYWdlSW50ZXJuYWxGb3JtYXQsXG4gICAgICB0ZXhJbWFnZVdpZHRoLFxuICAgICAgdGV4SW1hZ2VIZWlnaHQsXG4gICAgICB0ZXhJbWFnZUJvcmRlcixcbiAgICAgIHRleEltYWdlRm9ybWF0LFxuICAgICAgdGV4SW1hZ2VUeXBlLFxuICAgICAgbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDI1NSwgMjU1XSlcbiAgICApO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKFxuICAgICAgICB0aGlzLmdsLlRFWFRVUkVfMkQsXG4gICAgICAgIHRleEltYWdlTGV2ZWwsXG4gICAgICAgIHRleEltYWdlSW50ZXJuYWxGb3JtYXQsXG4gICAgICAgIHRleEltYWdlRm9ybWF0LFxuICAgICAgICB0ZXhJbWFnZVR5cGUsXG4gICAgICAgIGltYWdlXG4gICAgICApO1xuXG4gICAgICBpZiAoaXNQb3dlck9mVHdvKGltYWdlLndpZHRoKSAmJiBpc1Bvd2VyT2ZUd28oaW1hZ2UuaGVpZ2h0KSkge1xuICAgICAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuZ2wuVEVYVFVSRV8yRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFXzJELFxuICAgICAgICAgIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsXG4gICAgICAgICAgdGhpcy5nbC5DTEFNUF9UT19FREdFXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaShcbiAgICAgICAgICB0aGlzLmdsLlRFWFRVUkVfMkQsXG4gICAgICAgICAgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCxcbiAgICAgICAgICB0aGlzLmdsLkNMQU1QX1RPX0VER0VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKFxuICAgICAgICAgIHRoaXMuZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgICB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcbiAgICAgICAgICB0aGlzLmdsLkxJTkVBUlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZW52aXJvbm1lbnQoZW52aXJvbm1lbnRJbmZvOiBFbnZpcm9ubWVudEluZm8pOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gW1xuICAgICAgdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLFxuICAgICAgdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcbiAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLFxuICAgIF07XG5cbiAgICBlbnZpcm9ubWVudEluZm8uZm9yRWFjaCgoaW5mbywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleEltYWdlTGV2ZWwgPSAwO1xuICAgICAgY29uc3QgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCA9IHRoaXMuZ2wuUkdCQTtcbiAgICAgIGNvbnN0IHRleEltYWdlV2lkdGggPSBpbmZvLndpZHRoO1xuICAgICAgY29uc3QgdGV4SW1hZ2VIZWlnaHQgPSBpbmZvLmhlaWdodDtcbiAgICAgIGNvbnN0IHRleEltYWdlQm9yZGVyID0gMDtcbiAgICAgIGNvbnN0IHRleEltYWdlRm9ybWF0ID0gdGhpcy5nbC5SR0JBO1xuICAgICAgY29uc3QgdGV4SW1hZ2VUeXBlID0gdGhpcy5nbC5VTlNJR05FRF9CWVRFO1xuXG4gICAgICB0aGlzLmdsLnRleEltYWdlMkQoXG4gICAgICAgIHRhcmdldFtpbmRleF0sXG4gICAgICAgIHRleEltYWdlTGV2ZWwsXG4gICAgICAgIHRleEltYWdlSW50ZXJuYWxGb3JtYXQsXG4gICAgICAgIHRleEltYWdlV2lkdGgsXG4gICAgICAgIHRleEltYWdlSGVpZ2h0LFxuICAgICAgICB0ZXhJbWFnZUJvcmRlcixcbiAgICAgICAgdGV4SW1hZ2VGb3JtYXQsXG4gICAgICAgIHRleEltYWdlVHlwZSxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcblxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLnNyYyA9IGluZm8uc291cmNlO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgICB0YXJnZXRbaW5kZXhdLFxuICAgICAgICAgIHRleEltYWdlTGV2ZWwsXG4gICAgICAgICAgdGV4SW1hZ2VJbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICB0ZXhJbWFnZUZvcm1hdCxcbiAgICAgICAgICB0ZXhJbWFnZVR5cGUsXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVApO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQKTtcbiAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVAsXG4gICAgICB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcbiAgICAgIHRoaXMuZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcihcbiAgICBwcm9ncmFtUGFyYW06IFByb2dyYW1QYXJhbSxcbiAgICBjb3VudDogbnVtYmVyLFxuICAgIG1hcHBpbmdNb2RlOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgLyogVXNlIFByb2dyYW0gKi9cbiAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcblxuICAgIC8qIFVucGFjayBQcm9ncmFtIEluZm8gKi9cbiAgICBjb25zdCB7IGF0dHJpYkxvY2F0aW9ucywgdW5pZm9ybUxvY2F0aW9ucyB9ID0gdGhpcy5wcm9ncmFtSW5mbztcbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbkxvY2F0aW9uLFxuICAgICAgbm9ybWFsTG9jYXRpb24sXG4gICAgICB0ZXhjb29yZExvY2F0aW9uLFxuICAgICAgdGFuZ2VudExvY2F0aW9uLFxuICAgICAgYml0YW5nZW50TG9jYXRpb24sXG4gICAgfSA9IGF0dHJpYkxvY2F0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTG9jYXRpb24sXG4gICAgICB3b3JsZEludmVyc2VUcmFuc3Bvc2VMb2NhdGlvbixcbiAgICAgIGFtYmllbnRMaWdodENvbG9yTG9jYXRpb24sXG4gICAgICByZXZlcnNlTGlnaHREaXJlY3Rpb25Mb2NhdGlvbixcbiAgICAgIHNoYWRpbmdMb2NhdGlvbixcbiAgICAgIHRleHR1cmVMb2NhdGlvbixcbiAgICAgIHRleHR1cmVFbnZMb2NhdGlvbixcbiAgICAgIHRleHR1cmVNb2RlTG9jYXRpb24sXG4gICAgfSA9IHVuaWZvcm1Mb2NhdGlvbnM7XG5cbiAgICAvKiBVbnBhY2sgUHJvZ3JhbSBCdWZmZXIgKi9cbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbkJ1ZmZlcixcbiAgICAgIG5vcm1hbEJ1ZmZlcixcbiAgICAgIHRleHR1cmVCdWZmZXIsXG4gICAgICB0YW5nZW50QnVmZmVyLFxuICAgICAgYml0YW5nZW50QnVmZmVyLFxuICAgIH0gPSB0aGlzLnByb2dyYW1CdWZmZXI7XG5cbiAgICAvKiBVbnBhY2sgUHJvZ3JhbSBQYXJhbWV0ZXIgKi9cbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHVuaWZvcm1zIH0gPSBwcm9ncmFtUGFyYW07XG4gICAgY29uc3QgeyByYXdQb3NpdGlvbiwgcmF3Tm9ybWFsLCByYXdUZXh0dXJlLCByYXdUYW5nZW50LCByYXdCaXRhbmdlbnQgfSA9XG4gICAgICBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHtcbiAgICAgIHJhd01hdHJpeCxcbiAgICAgIHJhd0ludmVyc2VUcmFuc3Bvc2VNYXRyaXgsXG4gICAgICByYXdBbWJpZW50Q29sb3IsXG4gICAgICByYXdEaXJlY3Rpb25hbExpZ2h0LFxuICAgICAgc2hhZGVyU3RhdHVzLFxuICAgIH0gPSB1bmlmb3JtcztcblxuICAgIC8qIFNldHVwIFBvc2l0aW9uIEF0dHJpYnV0ZSAqL1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7XG4gICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCByYXdQb3NpdGlvbiwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBjb25zdCBwb3NpdGlvblNpemUgPSAzOyAvKiAzIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAqL1xuICAgIGNvbnN0IHBvc2l0aW9uVHlwZSA9IHRoaXMuZ2wuRkxPQVQ7IC8qIFRoZSBkYXRhIGlzIDMyIGJpdCBmbG9hdCAqL1xuICAgIGNvbnN0IHBvc2l0aW9uTm9ybWFsaXplZCA9IGZhbHNlOyAvKiBEb24ndCBub3JtYWxpemUgdGhlIGRhdGEgKi9cbiAgICBjb25zdCBwb3NpdGlvblN0cmlkZSA9IDA7IC8qIDA6IE1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvbiAqL1xuICAgIGNvbnN0IHBvc2l0aW9uT2Zmc2V0ID0gMDsgLyogU3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyICovXG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgcG9zaXRpb25Mb2NhdGlvbixcbiAgICAgIHBvc2l0aW9uU2l6ZSxcbiAgICAgIHBvc2l0aW9uVHlwZSxcbiAgICAgIHBvc2l0aW9uTm9ybWFsaXplZCxcbiAgICAgIHBvc2l0aW9uU3RyaWRlLFxuICAgICAgcG9zaXRpb25PZmZzZXRcbiAgICApO1xuXG4gICAgLyogU2V0dXAgTm9ybWFsIEF0dHJpYnV0ZSAqL1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobm9ybWFsTG9jYXRpb24pO1xuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbm9ybWFsQnVmZmVyKTtcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHJhd05vcm1hbCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBjb25zdCBub3JtYWxTaXplID0gMzsgLyogMyBjb21wb25lbnRzIHBlciBpdGVyYXRpb24gKi9cbiAgICBjb25zdCBub3JtYWxUeXBlID0gdGhpcy5nbC5GTE9BVDsgLyogVGhlIGRhdGEgaXMgMzIgYml0IGZsb2F0ICovXG4gICAgY29uc3Qgbm9ybWFsTm9ybWFsaXplZCA9IGZhbHNlOyAvKiBEb24ndCBub3JtYWxpemUgdGhlIGRhdGEgKi9cbiAgICBjb25zdCBub3JtYWxTdHJpZGUgPSAwOyAvKiAwOiBNb3ZlIGZvcndhcmQgc2l6ZSAqIHNpemVvZih0eXBlKSBlYWNoIGl0ZXJhdGlvbiB0byBnZXQgdGhlIG5leHQgcG9zaXRpb24gKi9cbiAgICBjb25zdCBub3JtYWxPZmZzZXQgPSAwOyAvKiBTdGFydCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIgKi9cbiAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICBub3JtYWxMb2NhdGlvbixcbiAgICAgIG5vcm1hbFNpemUsXG4gICAgICBub3JtYWxUeXBlLFxuICAgICAgbm9ybWFsTm9ybWFsaXplZCxcbiAgICAgIG5vcm1hbFN0cmlkZSxcbiAgICAgIG5vcm1hbE9mZnNldFxuICAgICk7XG5cbiAgICAvKiBTZXR1cCBUZXh0dXJlIEF0dHJpYnV0ZSAqL1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4Y29vcmRMb2NhdGlvbik7XG4gICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlQnVmZmVyKTtcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHJhd1RleHR1cmUsIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgY29uc3QgdGV4dHVyZVNpemUgPSAyOyAvKiAyIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAqL1xuICAgIGNvbnN0IHRleHR1cmVUeXBlID0gdGhpcy5nbC5GTE9BVDsgLyogVGhlIGRhdGEgaXMgMzIgYml0IGZsb2F0ICovXG4gICAgY29uc3QgdGV4dHVyZU5vcm1hbGl6ZWQgPSBmYWxzZTsgLyogRG9uJ3Qgbm9ybWFsaXplIHRoZSBkYXRhICovXG4gICAgY29uc3QgdGV4dHVyZVN0cmlkZSA9IDA7IC8qIDA6IE1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvbiAqL1xuICAgIGNvbnN0IHRleHR1cmVPZmZzZXQgPSAwOyAvKiBTdGFydCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIgKi9cbiAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICB0ZXhjb29yZExvY2F0aW9uLFxuICAgICAgdGV4dHVyZVNpemUsXG4gICAgICB0ZXh0dXJlVHlwZSxcbiAgICAgIHRleHR1cmVOb3JtYWxpemVkLFxuICAgICAgdGV4dHVyZVN0cmlkZSxcbiAgICAgIHRleHR1cmVPZmZzZXRcbiAgICApO1xuXG4gICAgLyogU2V0dXAgVGFuZ2VudCBBdHRyaWJ1dGUgKi9cbiAgICBjb25zdCB0YW5nZW50U2l6ZSA9IDM7IC8qIDMgY29tcG9uZW50cyBwZXIgaXRlcmF0aW9uICovXG4gICAgY29uc3QgdGFuZ2VudFR5cGUgPSB0aGlzLmdsLkZMT0FUOyAvKiBUaGUgZGF0YSBpcyAzMiBiaXQgZmxvYXQgKi9cbiAgICBjb25zdCB0YW5nZW50Tm9ybWFsaXplZCA9IGZhbHNlOyAvKiBEb24ndCBub3JtYWxpemUgdGhlIGRhdGEgKi9cbiAgICBjb25zdCB0YW5nZW50U3RyaWRlID0gMDsgLyogMDogTW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uICovXG4gICAgY29uc3QgdGFuZ2VudE9mZnNldCA9IDA7IC8qIFN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlciAqL1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGFuZ2VudExvY2F0aW9uKTtcbiAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRhbmdlbnRCdWZmZXIpO1xuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcmF3VGFuZ2VudCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgdGFuZ2VudExvY2F0aW9uLFxuICAgICAgdGFuZ2VudFNpemUsXG4gICAgICB0YW5nZW50VHlwZSxcbiAgICAgIHRhbmdlbnROb3JtYWxpemVkLFxuICAgICAgdGFuZ2VudFN0cmlkZSxcbiAgICAgIHRhbmdlbnRPZmZzZXRcbiAgICApO1xuXG4gICAgLyogU2V0dXAgQml0YW5nZW50IEF0dHJpYnV0ZSAqL1xuICAgIGNvbnN0IGJpdGFuZ2VudFNpemUgPSAzOyAvKiAzIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAqL1xuICAgIGNvbnN0IGJpdGFuZ2VudFR5cGUgPSB0aGlzLmdsLkZMT0FUOyAvKiBUaGUgZGF0YSBpcyAzMiBiaXQgZmxvYXQgKi9cbiAgICBjb25zdCBiaXRhbmdlbnROb3JtYWxpemVkID0gZmFsc2U7IC8qIERvbid0IG5vcm1hbGl6ZSB0aGUgZGF0YSAqL1xuICAgIGNvbnN0IGJpdGFuZ2VudFN0cmlkZSA9IDA7IC8qIDA6IE1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvbiAqL1xuICAgIGNvbnN0IGJpdGFuZ2VudE9mZnNldCA9IDA7IC8qIFN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlciAqL1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYml0YW5nZW50TG9jYXRpb24pO1xuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYml0YW5nZW50QnVmZmVyKTtcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHJhd0JpdGFuZ2VudCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgYml0YW5nZW50TG9jYXRpb24sXG4gICAgICBiaXRhbmdlbnRTaXplLFxuICAgICAgYml0YW5nZW50VHlwZSxcbiAgICAgIGJpdGFuZ2VudE5vcm1hbGl6ZWQsXG4gICAgICBiaXRhbmdlbnRTdHJpZGUsXG4gICAgICBiaXRhbmdlbnRPZmZzZXRcbiAgICApO1xuXG4gICAgLyogU2V0IFdvcmxkIFZpZXcgUHJvamVjdGlvbiBVbmlmb3JtICovXG4gICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHdvcmxkVmlld1Byb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHJhd01hdHJpeCk7XG5cbiAgICAvKiBTZXQgV29ybGQgSW52ZXJzZSBQcm9qZWN0aW9uIFVuaWZvcm0gKi9cbiAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICB3b3JsZEludmVyc2VUcmFuc3Bvc2VMb2NhdGlvbixcbiAgICAgIGZhbHNlLFxuICAgICAgcmF3SW52ZXJzZVRyYW5zcG9zZU1hdHJpeFxuICAgICk7XG5cbiAgICAvKiBTZXQgQW1iaWVudCBDb2xvciBVbmlmb3JtICovXG4gICAgdGhpcy5nbC51bmlmb3JtM2Z2KGFtYmllbnRMaWdodENvbG9yTG9jYXRpb24sIHJhd0FtYmllbnRDb2xvcik7XG5cbiAgICAvKiBTZXQgRGlyZWN0aW9uYWwgTGlnaHQgVW5pZm9ybSAqL1xuICAgIHRoaXMuZ2wudW5pZm9ybTNmdihyZXZlcnNlTGlnaHREaXJlY3Rpb25Mb2NhdGlvbiwgcmF3RGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvKiBTZXQgU2hhZGVyIFN0YXR1cyBVbmlmb3JtICovXG4gICAgdGhpcy5nbC51bmlmb3JtMWkoc2hhZGluZ0xvY2F0aW9uLCBzaGFkZXJTdGF0dXMpO1xuXG4gICAgc3dpdGNoIChtYXBwaW5nTW9kZSkge1xuICAgICAgY2FzZSBNYXBwaW5nTW9kZS5URVhUVVJFOlxuICAgICAgICAvKiBTZXQgVGV4dHVyZSBVbmlmb3JtICovXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVMb2NhdGlvbiwgMCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVFbnZMb2NhdGlvbiwgMSk7XG5cbiAgICAgICAgLyogU2V0IFRleHR1cmUgTW9kZSBVbmlmb3JtICovXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVNb2RlTG9jYXRpb24sIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWFwcGluZ01vZGUuRU5WSVJPTk1FTlQ6XG4gICAgICAgIC8qIFNldCBUZXh0dXJlIFVuaWZvcm0gKi9cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZUxvY2F0aW9uLCAxKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZUVudkxvY2F0aW9uLCAwKTtcblxuICAgICAgICAvKiBTZXQgVGV4dHVyZSBNb2RlIFVuaWZvcm0gKi9cbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGV4dHVyZU1vZGVMb2NhdGlvbiwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNYXBwaW5nTW9kZS5CVU1QOlxuICAgICAgICAvKiBTZXQgVGV4dHVyZSBVbmlmb3JtICovXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVMb2NhdGlvbiwgMCk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVFbnZMb2NhdGlvbiwgMSk7XG5cbiAgICAgICAgLyogU2V0IFRleHR1cmUgTW9kZSBVbmlmb3JtICovXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHRleHR1cmVNb2RlTG9jYXRpb24sIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBEcmF3IFNoYXBlICovXG4gICAgY29uc3QgcHJpbWl0aXZlVHlwZSA9IHRoaXMuZ2wuVFJJQU5HTEVTO1xuICAgIGNvbnN0IG9mZnNldCA9IDA7XG5cbiAgICB0aGlzLmdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCJmdW5jdGlvbiByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgY29uc3Qgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemU7XG4iLCJmdW5jdGlvbiBjcmVhdGVTaGFkZXIoXG4gIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gIHR5cGU6IG51bWJlcixcbiAgc291cmNlOiBzdHJpbmdcbik6IFdlYkdMU2hhZGVyIHtcbiAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSBhcyBib29sZWFuO1xuICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBjb21waWxlIHNoYWRlcjogJHtnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcil9YCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGFkZXI7XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIk9iamVjdHMvY29sb3JcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yKCk6IENvbG9yIHtcbiAgcmV0dXJuIG5ldyBDb2xvcigwLjUsIDAuNSwgMC41KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yO1xuIiwiaW1wb3J0IEZhY2UgZnJvbSBcIk9iamVjdHMvZmFjZVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJPYmplY3RzL3BvaW50XCI7XG5pbXBvcnQgVGV4dHVyZSBmcm9tIFwiT2JqZWN0cy90ZXh0dXJlXCI7XG5pbXBvcnQgRHJhdyBmcm9tIFwiT2JqZWN0cy9kcmF3XCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCk6IEZhY2VbXSB7XG4gIHJldHVybiBbXG4gICAgLy8gRnJvbnQgRmFjZVxuICAgIG5ldyBGYWNlKFtcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgwLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDEpKSxcbiAgICBdKSxcbiAgICAvLyBCYWNrIEZhY2VcbiAgICBuZXcgRmFjZShbXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgMjUsIC0yNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXG4gICAgXSksXG4gICAgLy8gVG9wIEZhY2VcbiAgICBuZXcgRmFjZShbXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KC0yNSwgMjUsIDI1KSwgbmV3IFRleHR1cmUoMSwgMCkpLFxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgLTI1KSwgbmV3IFRleHR1cmUoMCwgMCkpLFxuICAgICAgbmV3IERyYXcobmV3IFBvaW50KDI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXG4gICAgXSksXG4gICAgLy8gQm90dG9tIGZhY2VcbiAgICBuZXcgRmFjZShbXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXG4gICAgXSksXG4gICAgLy8gUmlnaHQgZmFjZVxuICAgIG5ldyBGYWNlKFtcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgxLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgyNSwgLTI1LCAyNSksIG5ldyBUZXh0dXJlKDAsIDEpKSxcbiAgICBdKSxcbiAgICAvLyBMZWZ0IGZhY2VcbiAgICBuZXcgRmFjZShbXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIC0yNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAwKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAyNSwgMjUpLCBuZXcgVGV4dHVyZSgxLCAxKSksXG4gICAgICBuZXcgRHJhdyhuZXcgUG9pbnQoLTI1LCAtMjUsIC0yNSksIG5ldyBUZXh0dXJlKDAsIDApKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAyNSksIG5ldyBUZXh0dXJlKDEsIDEpKSxcbiAgICAgIG5ldyBEcmF3KG5ldyBQb2ludCgtMjUsIDI1LCAtMjUpLCBuZXcgVGV4dHVyZSgwLCAxKSksXG4gICAgXSksXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlO1xuIiwiaW1wb3J0IEFydGljdWxhdGVkIGZyb20gXCJPYmplY3RzL2FydGljdWxhdGVkXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiT2JqZWN0cy9ub2RlXCI7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJPYmplY3RzL2FuaW1hdGlvblwiO1xuaW1wb3J0IExhbWJkYSBmcm9tIFwiT2JqZWN0cy9sYW1iZGFcIjtcbmltcG9ydCBBbmltYXRpb25UeXBlIGZyb20gXCJUeXBlcy9hbmltYXRpb24tdHlwZVwiO1xuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlIGZyb20gXCJNYWluL2RlZmF1bHQtYXJyYXktb2YtZmFjZVwiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZURlZmF1bHRBcnRpY3VsYXRlZCgpOiBBcnRpY3VsYXRlZCB7XG4gIHJldHVybiBuZXcgQXJ0aWN1bGF0ZWQoXG4gICAgbmV3IE5vZGUoXG4gICAgICBcInJvb3RcIixcbiAgICAgIFtcbiAgICAgICAgbmV3IE5vZGUoXG4gICAgICAgICAgXCJwb2ludC1iZXR3ZWVuLWZlZXRcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBuZXcgTm9kZShcbiAgICAgICAgICAgICAgXCJ3YWlzdFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgbmV3IE5vZGUoXG4gICAgICAgICAgICAgICAgICBcInRvcnNvXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgIFwibmVja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC01MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAtNTAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZnQtYXJtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1mb3JlYXJtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdC1oYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC01MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgLTUwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWFybVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWZvcmVhcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1oYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgLTEwMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgXCJsZWZ0LWxlZ1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBuZXcgTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZnQtY2FsZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQtZm9vdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICAtNTAsXG4gICAgICAgICAgICAgICAgICA1MCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG5ldyBOb2RlKFxuICAgICAgICAgICAgICAgICAgXCJyaWdodC1sZWdcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1jYWxmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtZm9vdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZWZhdWx0QXJyYXlPZkZhY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlZmF1bHRBcnJheU9mRmFjZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgICAgICA1MCxcbiAgICAgICAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGdlbmVyYXRlRGVmYXVsdEFycmF5T2ZGYWNlKCksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIC0xNTAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSxcbiAgICAgIFtdLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICAgIDEsXG4gICAgICAxXG4gICAgKSxcbiAgICBbXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcInBvaW50LWJldHdlZW4tZmVldFwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLk1PVkVfWSxcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiAtNTAgKiBNYXRoLmFicyhNYXRoLnNpbihjKSlcIilcbiAgICAgICksXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcImxlZnQtbGVnXCIsXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYylcIilcbiAgICAgICksXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcInJpZ2h0LWxlZ1wiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9YLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IC1NYXRoLnNpbihjKVwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwibGVmdC1jYWxmXCIsXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gLU1hdGguc2luKGMgKyAwLjEpICogMC40XCIpXG4gICAgICApLFxuICAgICAgbmV3IEFuaW1hdGlvbihcbiAgICAgICAgXCJyaWdodC1jYWxmXCIsXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1gsXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyArIDAuMSkgKiAwLjRcIilcbiAgICAgICksXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcImxlZnQtZm9vdFwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9YLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IC1NYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwicmlnaHQtZm9vdFwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9YLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjEpICogMC40XCIpXG4gICAgICApLFxuICAgICAgbmV3IEFuaW1hdGlvbihcbiAgICAgICAgXCJsZWZ0LWFybVwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9aLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMpICogMC40XCIpXG4gICAgICApLFxuICAgICAgbmV3IEFuaW1hdGlvbihcbiAgICAgICAgXCJyaWdodC1hcm1cIixcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWixcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwibGVmdC1mb3JlYXJtXCIsXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1osXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyArIDAuMSkgKiAwLjRcIilcbiAgICAgICksXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcInJpZ2h0LWZvcmVhcm1cIixcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWixcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjICsgMC4xKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwibGVmdC1oYW5kXCIsXG4gICAgICAgIEFuaW1hdGlvblR5cGUuUk9UQVRFX1osXG4gICAgICAgIG5ldyBMYW1iZGEoXCIoYykgPT4gTWF0aC5zaW4oYyAtIDAuMSkgKiAwLjRcIilcbiAgICAgICksXG4gICAgICBuZXcgQW5pbWF0aW9uKFxuICAgICAgICBcInJpZ2h0LWhhbmRcIixcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWixcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjIC0gMC4xKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwid2Fpc3RcIixcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWSxcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwidG9yc29cIixcbiAgICAgICAgQW5pbWF0aW9uVHlwZS5ST1RBVEVfWSxcbiAgICAgICAgbmV3IExhbWJkYShcIihjKSA9PiBNYXRoLnNpbihjKSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwibmVja1wiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9ZLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjI1KSAqIDAuNFwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwiaGVhZFwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9YLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKiAyKSAqIDAuMlwiKVxuICAgICAgKSxcbiAgICAgIG5ldyBBbmltYXRpb24oXG4gICAgICAgIFwiaGVhZFwiLFxuICAgICAgICBBbmltYXRpb25UeXBlLlJPVEFURV9ZLFxuICAgICAgICBuZXcgTGFtYmRhKFwiKGMpID0+IE1hdGguc2luKGMgKyAwLjUpICogMC40XCIpXG4gICAgICApLFxuICAgIF1cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0QXJ0aWN1bGF0ZWQ7XG4iLCJpbXBvcnQgQ2FtZXJhIGZyb20gXCJPYmplY3RzL2NhbWVyYVwiO1xuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiVXRpbHMvYW5nbGVcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiT2JqZWN0cy9wb2ludFwiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKTogQ2FtZXJhIHtcbiAgcmV0dXJuIG5ldyBDYW1lcmEoNTAwLCBkZWdUb1JhZCgwKSwgbmV3IFBvaW50KDAsIDAsIDApKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEZWZhdWx0Q2FtZXJhO1xuIiwiaW1wb3J0IExpZ2h0IGZyb20gXCJPYmplY3RzL2xpZ2h0XCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVmYXVsdERpcmVjdGlvbmFsTGlnaHQoKTogTGlnaHQge1xuICByZXR1cm4gbmV3IExpZ2h0KDAsIDAsIDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZURlZmF1bHREaXJlY3Rpb25hbExpZ2h0O1xuIiwiaW1wb3J0IGNyZWF0ZVNoYWRlciBmcm9tIFwiVXRpbHMvc2hhZGVyXCI7XG5pbXBvcnQgY3JlYXRlUHJvZ3JhbSBmcm9tIFwiVXRpbHMvcHJvZ3JhbVwiO1xuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIlV0aWxzL2FuZ2xlXCI7XG5pbXBvcnQgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSBmcm9tIFwiVXRpbHMvcmVzaXplLWNhbnZhc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJVdGlscy9yZW5kZXJlclwiO1xuaW1wb3J0IEFydGljdWxhdGVkIGZyb20gXCJPYmplY3RzL2FydGljdWxhdGVkXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiT2JqZWN0cy9ub2RlXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJPYmplY3RzL2NhbWVyYVwiO1xuaW1wb3J0IExpZ2h0IGZyb20gXCJPYmplY3RzL2xpZ2h0XCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIk9iamVjdHMvY29sb3JcIjtcbmltcG9ydCBQcm9qZWN0aW9uVHlwZSBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi10eXBlXCI7XG5pbXBvcnQgUHJvamVjdGlvblBhcmFtcyBmcm9tIFwiVHlwZXMvcHJvamVjdGlvbi1wYXJhbXNcIjtcbmltcG9ydCBTaGFkZXJTdGF0dXMgZnJvbSBcIlR5cGVzL3NoYWRlci1zdGF0dXNcIjtcbmltcG9ydCBQcm9ncmFtSW5mbyBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1pbmZvXCI7XG5pbXBvcnQgUHJvZ3JhbUJ1ZmZlciBmcm9tIFwiVHlwZXMvcHJvZ3JhbS1idWZmZXJcIjtcbmltcG9ydCBNYXBwaW5nTW9kZSBmcm9tIFwiVHlwZXMvbWFwcGluZy1tb2RlXCI7XG5pbXBvcnQgRmlsZUhhbmRsaW5nIGZyb20gXCJGaWxlcy9maWxlLWhhbmRsaW5nXCI7XG5pbXBvcnQgRmlsZVN5c3RlbSBmcm9tIFwiRmlsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHRDYW1lcmEgZnJvbSBcIk1haW4vZGVmYXVsdC1jYW1lcmFcIjtcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHRBbWJpZW50Q29sb3IgZnJvbSBcIk1haW4vZGVmYXVsdC1hbWJpZW50LWNvbG9yXCI7XG5pbXBvcnQgZ2VuZXJhdGVEZWZhdWx0RGlyZWN0aW9uYWxMaWdodCBmcm9tIFwiTWFpbi9kZWZhdWx0LWRpcmVjdGlvbmFsLWxpZ2h0XCI7XG5pbXBvcnQgZ2VuZXJhdGVEZWZhdWx0QXJ0aWN1bGF0ZWQgZnJvbSBcIk1haW4vZGVmYXVsdC1hcnRpY3VsYXRlZFwiO1xuaW1wb3J0IFRyYW5zZm9ybWF0aW9uIGZyb20gXCJPcGVyYXRpb25zL3RyYW5zZm9ybWF0aW9uXCI7XG5cbi8qIEdldCBWZXJ0ZXggZGFuIEZyYWdtZW50IFNvdXJjZSAqL1xuY29uc3QgdmVydGV4U2hhZGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlclwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyXCIpO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSB2ZXJ0ZXhTaGFkZXJFbGVtZW50LnRleHRDb250ZW50O1xuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBmcmFnbWVudFNoYWRlckVsZW1lbnQudGV4dENvbnRlbnQ7XG5cbi8qIE1haW4gQ2FudmFzICovXG5jb25zdCBtYWluQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IG1haW5HTCA9IG1haW5DYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4vKiBTZXR1cCBNYWluIENhbnZhcyBWaWV3cG9ydCAqL1xucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShtYWluR0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KTtcbm1haW5HTC52aWV3cG9ydCgwLCAwLCBtYWluR0wuY2FudmFzLndpZHRoLCBtYWluR0wuY2FudmFzLmhlaWdodCk7XG5cbi8qIENsZWFyIE1haW4gQ2FudmFzIENvbG9yIGFuZCBCdWZmZXIgKi9cbm1haW5HTC5jbGVhcihtYWluR0wuQ09MT1JfQlVGRkVSX0JJVCB8IG1haW5HTC5ERVBUSF9CVUZGRVJfQklUKTtcblxuLyogVHVybiBPbiBNYWluIENhbnZhcyBDdWxsaW5nICovXG5tYWluR0wuZW5hYmxlKG1haW5HTC5DVUxMX0ZBQ0UpO1xuXG4vKiBFbmFibGUgdGhlIERlcHRoIEJ1ZmZlciBpbiBNYWluIENhbnZhcyAqL1xubWFpbkdMLmVuYWJsZShtYWluR0wuREVQVEhfVEVTVCk7XG5cbi8qIEFkZCBWZXJ0ZXggYW5kIEZyYWdtZW50IFNoYWRlciBpbiBNYWluIENhbnZhcyAqL1xuY29uc3QgbWFpblZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcbiAgbWFpbkdMLFxuICBtYWluR0wuVkVSVEVYX1NIQURFUixcbiAgdmVydGV4U2hhZGVyU291cmNlXG4pO1xuY29uc3QgbWFpbkZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKFxuICBtYWluR0wsXG4gIG1haW5HTC5GUkFHTUVOVF9TSEFERVIsXG4gIGZyYWdtZW50U2hhZGVyU291cmNlXG4pO1xuXG4vKiBTZXR1cCBNYWluIFByb2dyYW0gKi9cbmNvbnN0IG1haW5Qcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShtYWluR0wsIG1haW5WZXJ0ZXhTaGFkZXIsIG1haW5GcmFnbWVudFNoYWRlcik7XG5cbi8qIFNldHVwIE1haW4gUHJvZ3JhbSBJbmZvICovXG5jb25zdCBtYWluUHJvZ3JhbUluZm86IFByb2dyYW1JbmZvID0ge1xuICBhdHRyaWJMb2NhdGlvbnM6IHtcbiAgICBwb3NpdGlvbkxvY2F0aW9uOiBtYWluR0wuZ2V0QXR0cmliTG9jYXRpb24obWFpblByb2dyYW0sIFwiYV9wb3NpdGlvblwiKSxcbiAgICBub3JtYWxMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcImFfbm9ybWFsXCIpLFxuICAgIHRleGNvb3JkTG9jYXRpb246IG1haW5HTC5nZXRBdHRyaWJMb2NhdGlvbihtYWluUHJvZ3JhbSwgXCJhX3RleGNvb3JkXCIpLFxuICAgIHRhbmdlbnRMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcImFfdmVydGV4dGFuZ2VudFwiKSxcbiAgICBiaXRhbmdlbnRMb2NhdGlvbjogbWFpbkdMLmdldEF0dHJpYkxvY2F0aW9uKFxuICAgICAgbWFpblByb2dyYW0sXG4gICAgICBcImFfdmVydGV4Yml0YW5nZW50XCJcbiAgICApLFxuICB9LFxuICB1bmlmb3JtTG9jYXRpb25zOiB7XG4gICAgd29ybGRWaWV3UHJvamVjdGlvbkxvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgbWFpblByb2dyYW0sXG4gICAgICBcInVfd29ybGRWaWV3UHJvamVjdGlvblwiXG4gICAgKSxcbiAgICB3b3JsZEludmVyc2VUcmFuc3Bvc2VMb2NhdGlvbjogbWFpbkdMLmdldFVuaWZvcm1Mb2NhdGlvbihcbiAgICAgIG1haW5Qcm9ncmFtLFxuICAgICAgXCJ1X3dvcmxkSW52ZXJzZVRyYW5zcG9zZVwiXG4gICAgKSxcbiAgICBhbWJpZW50TGlnaHRDb2xvckxvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgbWFpblByb2dyYW0sXG4gICAgICBcInVfYW1iaWVudExpZ2h0Q29sb3JcIlxuICAgICksXG4gICAgcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uTG9jYXRpb246IG1haW5HTC5nZXRVbmlmb3JtTG9jYXRpb24oXG4gICAgICBtYWluUHJvZ3JhbSxcbiAgICAgIFwidV9yZXZlcnNlTGlnaHREaXJlY3Rpb25cIlxuICAgICksXG4gICAgc2hhZGluZ0xvY2F0aW9uOiBtYWluR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKG1haW5Qcm9ncmFtLCBcInVfc2hhZGluZ1wiKSxcbiAgICB0ZXh0dXJlTG9jYXRpb246IG1haW5HTC5nZXRVbmlmb3JtTG9jYXRpb24obWFpblByb2dyYW0sIFwidV90ZXh0dXJlXCIpLFxuICAgIHRleHR1cmVFbnZMb2NhdGlvbjogbWFpbkdMLmdldFVuaWZvcm1Mb2NhdGlvbihtYWluUHJvZ3JhbSwgXCJ1X3RleHR1cmVfZW52XCIpLFxuICAgIHRleHR1cmVNb2RlTG9jYXRpb246IG1haW5HTC5nZXRVbmlmb3JtTG9jYXRpb24oXG4gICAgICBtYWluUHJvZ3JhbSxcbiAgICAgIFwidV90ZXh0dXJlX21vZGVcIlxuICAgICksXG4gIH0sXG59O1xuXG4vKiBTZXR1cCBNYWluIFByb2dyYW0gQnVmZmVyICovXG5jb25zdCBtYWluUHJvZ3JhbUJ1ZmZlcjogUHJvZ3JhbUJ1ZmZlciA9IHtcbiAgcG9zaXRpb25CdWZmZXI6IG1haW5HTC5jcmVhdGVCdWZmZXIoKSxcbiAgbm9ybWFsQnVmZmVyOiBtYWluR0wuY3JlYXRlQnVmZmVyKCksXG4gIHRleHR1cmVCdWZmZXI6IG1haW5HTC5jcmVhdGVCdWZmZXIoKSxcbiAgdGFuZ2VudEJ1ZmZlcjogbWFpbkdMLmNyZWF0ZUJ1ZmZlcigpLFxuICBiaXRhbmdlbnRCdWZmZXI6IG1haW5HTC5jcmVhdGVCdWZmZXIoKSxcbn07XG5cbi8qIFNldHVwIE1haW4gUmVuZGVyZXIgKi9cbmNvbnN0IG1haW5SZW5kZXJlciA9IG5ldyBSZW5kZXJlcihcbiAgbWFpbkdMLFxuICBtYWluUHJvZ3JhbSxcbiAgbWFpblByb2dyYW1JbmZvLFxuICBtYWluUHJvZ3JhbUJ1ZmZlclxuKTtcblxuLyogU2Vjb25kYXJ5IENhbnZhcyAqL1xuY29uc3Qgc2Vjb25kYXJ5Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2Vjb25kYXJ5LWNhbnZhc1wiXG4pIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuY29uc3Qgc2Vjb25kYXJ5R0wgPSBzZWNvbmRhcnlDYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4vKiBTZXR1cCBTZWNvbmRhcnkgQ2FudmFzIFZpZXdwb3J0ICovXG5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XG5zZWNvbmRhcnlHTC52aWV3cG9ydCgwLCAwLCBzZWNvbmRhcnlHTC5jYW52YXMud2lkdGgsIHNlY29uZGFyeUdMLmNhbnZhcy5oZWlnaHQpO1xuXG4vKiBDbGVhciBTZWNvbmRhcnkgQ2FudmFzIENvbG9yIGFuZCBCdWZmZXIgKi9cbnNlY29uZGFyeUdMLmNsZWFyKHNlY29uZGFyeUdMLkNPTE9SX0JVRkZFUl9CSVQgfCBzZWNvbmRhcnlHTC5ERVBUSF9CVUZGRVJfQklUKTtcblxuLyogVHVybiBPbiBTZWNvbmRhcnkgQ2FudmFzIEN1bGxpbmcgKi9cbnNlY29uZGFyeUdMLmVuYWJsZShzZWNvbmRhcnlHTC5DVUxMX0ZBQ0UpO1xuXG4vKiBFbmFibGUgdGhlIERlcHRoIEJ1ZmZlciBpbiBTZWNvbmRhcnkgQ2FudmFzICovXG5zZWNvbmRhcnlHTC5lbmFibGUoc2Vjb25kYXJ5R0wuREVQVEhfVEVTVCk7XG5cbi8qIEFkZCBWZXJ0ZXggYW5kIEZyYWdtZW50IFNoYWRlciBpbiBTZWNvbmRhcnkgQ2FudmFzICovXG5jb25zdCBzZWNvbmRhcnlWZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoXG4gIHNlY29uZGFyeUdMLFxuICBzZWNvbmRhcnlHTC5WRVJURVhfU0hBREVSLFxuICB2ZXJ0ZXhTaGFkZXJTb3VyY2Vcbik7XG5jb25zdCBzZWNvbmRhcnlGcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcbiAgc2Vjb25kYXJ5R0wsXG4gIHNlY29uZGFyeUdMLkZSQUdNRU5UX1NIQURFUixcbiAgZnJhZ21lbnRTaGFkZXJTb3VyY2Vcbik7XG5cbi8qIFNldHVwIFNlY29uZGFyeSBQcm9ncmFtICovXG5jb25zdCBzZWNvbmRhcnlQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcbiAgc2Vjb25kYXJ5R0wsXG4gIHNlY29uZGFyeVZlcnRleFNoYWRlcixcbiAgc2Vjb25kYXJ5RnJhZ21lbnRTaGFkZXJcbik7XG5cbi8qIFNldHVwIFNlY29uZGFyeSBQcm9ncmFtIEluZm8gKi9cbmNvbnN0IHNlY29uZGFyeVByb2dyYW1JbmZvOiBQcm9ncmFtSW5mbyA9IHtcbiAgYXR0cmliTG9jYXRpb25zOiB7XG4gICAgcG9zaXRpb25Mb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0QXR0cmliTG9jYXRpb24oXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxuICAgICAgXCJhX3Bvc2l0aW9uXCJcbiAgICApLFxuICAgIG5vcm1hbExvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRBdHRyaWJMb2NhdGlvbihzZWNvbmRhcnlQcm9ncmFtLCBcImFfbm9ybWFsXCIpLFxuICAgIHRleGNvb3JkTG9jYXRpb246IHNlY29uZGFyeUdMLmdldEF0dHJpYkxvY2F0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgICAgIFwiYV90ZXhjb29yZFwiXG4gICAgKSxcbiAgICB0YW5nZW50TG9jYXRpb246IHNlY29uZGFyeUdMLmdldEF0dHJpYkxvY2F0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgICAgIFwiYV92ZXJ0ZXh0YW5nZW50XCJcbiAgICApLFxuICAgIGJpdGFuZ2VudExvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRBdHRyaWJMb2NhdGlvbihcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXG4gICAgICBcImFfdmVydGV4Yml0YW5nZW50XCJcbiAgICApLFxuICB9LFxuICB1bmlmb3JtTG9jYXRpb25zOiB7XG4gICAgd29ybGRWaWV3UHJvamVjdGlvbkxvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRVbmlmb3JtTG9jYXRpb24oXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxuICAgICAgXCJ1X3dvcmxkVmlld1Byb2plY3Rpb25cIlxuICAgICksXG4gICAgd29ybGRJbnZlcnNlVHJhbnNwb3NlTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXG4gICAgICBcInVfd29ybGRJbnZlcnNlVHJhbnNwb3NlXCJcbiAgICApLFxuICAgIGFtYmllbnRMaWdodENvbG9yTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXG4gICAgICBcInVfYW1iaWVudExpZ2h0Q29sb3JcIlxuICAgICksXG4gICAgcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uTG9jYXRpb246IHNlY29uZGFyeUdMLmdldFVuaWZvcm1Mb2NhdGlvbihcbiAgICAgIHNlY29uZGFyeVByb2dyYW0sXG4gICAgICBcInVfcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uXCJcbiAgICApLFxuICAgIHNoYWRpbmdMb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgICAgIFwidV9zaGFkaW5nXCJcbiAgICApLFxuICAgIHRleHR1cmVMb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgICAgIFwidV90ZXh0dXJlXCJcbiAgICApLFxuICAgIHRleHR1cmVFbnZMb2NhdGlvbjogc2Vjb25kYXJ5R0wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgICAgIFwidV90ZXh0dXJlX2VudlwiXG4gICAgKSxcbiAgICB0ZXh0dXJlTW9kZUxvY2F0aW9uOiBzZWNvbmRhcnlHTC5nZXRVbmlmb3JtTG9jYXRpb24oXG4gICAgICBzZWNvbmRhcnlQcm9ncmFtLFxuICAgICAgXCJ1X3RleHR1cmVfbW9kZVwiXG4gICAgKSxcbiAgfSxcbn07XG5cbi8qIFNldHVwIFNlY29uZGFyeSBQcm9ncmFtIEJ1ZmZlciAqL1xuY29uc3Qgc2Vjb25kYXJ5UHJvZ3JhbUJ1ZmZlcjogUHJvZ3JhbUJ1ZmZlciA9IHtcbiAgcG9zaXRpb25CdWZmZXI6IHNlY29uZGFyeUdMLmNyZWF0ZUJ1ZmZlcigpLFxuICBub3JtYWxCdWZmZXI6IHNlY29uZGFyeUdMLmNyZWF0ZUJ1ZmZlcigpLFxuICB0ZXh0dXJlQnVmZmVyOiBzZWNvbmRhcnlHTC5jcmVhdGVCdWZmZXIoKSxcbiAgdGFuZ2VudEJ1ZmZlcjogc2Vjb25kYXJ5R0wuY3JlYXRlQnVmZmVyKCksXG4gIGJpdGFuZ2VudEJ1ZmZlcjogc2Vjb25kYXJ5R0wuY3JlYXRlQnVmZmVyKCksXG59O1xuXG4vKiBTZXR1cCBTZWNvbmRhcnkgUmVuZGVyZXIgKi9cbmNvbnN0IHNlY29uZGFyeVJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKFxuICBzZWNvbmRhcnlHTCxcbiAgc2Vjb25kYXJ5UHJvZ3JhbSxcbiAgc2Vjb25kYXJ5UHJvZ3JhbUluZm8sXG4gIHNlY29uZGFyeVByb2dyYW1CdWZmZXJcbik7XG5cbi8qIEdldCBIVE1MIEVsZW1lbnQgKi9cbi8qIE1haW4gQ2FudmFzIENvbnRyb2wgKi9cbmNvbnN0IHNsaWRlclRyYW5zbGF0ZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItdHJhbnNsYXRlLXhcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxUcmFuc2xhdGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC10cmFuc2xhdGUteFwiKTtcblxuY29uc3Qgc2xpZGVyVHJhbnNsYXRlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci10cmFuc2xhdGUteVwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbFRyYW5zbGF0ZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS15XCIpO1xuXG5jb25zdCBzbGlkZXJUcmFuc2xhdGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLXRyYW5zbGF0ZS16XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGxhYmVsVHJhbnNsYXRlWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtdHJhbnNsYXRlLXpcIik7XG5cbmNvbnN0IHNsaWRlckFuZ2xlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci1hbmdsZS14XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGxhYmVsQW5nbGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS14XCIpO1xuXG5jb25zdCBzbGlkZXJBbmdsZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItYW5nbGUteVwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbEFuZ2xlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtYW5nbGUteVwiKTtcblxuY29uc3Qgc2xpZGVyQW5nbGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLWFuZ2xlLXpcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxBbmdsZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWFuZ2xlLXpcIik7XG5cbmNvbnN0IHNsaWRlclNjYWxlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci1zY2FsZS14XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGxhYmVsU2NhbGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS14XCIpO1xuXG5jb25zdCBzbGlkZXJTY2FsZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItc2NhbGUteVwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbFNjYWxlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtc2NhbGUteVwiKTtcblxuY29uc3Qgc2xpZGVyU2NhbGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLXNjYWxlLXpcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxTY2FsZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXNjYWxlLXpcIik7XG5cbi8qIENhbWVyYSBDb250cm9sIEVsZW1lbnRzICovXG5jb25zdCBzbGlkZXJDYW1BbmdsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci1jYW0tYW5nbGVcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxDYW1BbmdsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtY2FtLWFuZ2xlXCIpO1xuXG5jb25zdCBzbGlkZXJDYW1SYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItY2FtLXJhZGl1c1wiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbENhbVJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtY2FtLXJhZGl1c1wiKTtcblxuLyogU2Vjb25kYXJ5IENhbnZhcyBDb250cm9sICovXG4vKiBHZXQgSFRNTCBFbGVtZW50ICovXG5jb25zdCBzbGlkZXJUcmFuc2xhdGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItdHJhbnNsYXRlLXNoYXBlLXhcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxUcmFuc2xhdGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS1zaGFwZS14XCIpO1xuXG5jb25zdCBzbGlkZXJUcmFuc2xhdGVTaGFwZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItdHJhbnNsYXRlLXNoYXBlLXlcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxUcmFuc2xhdGVTaGFwZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS1zaGFwZS15XCIpO1xuXG5jb25zdCBzbGlkZXJUcmFuc2xhdGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItdHJhbnNsYXRlLXNoYXBlLXpcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxUcmFuc2xhdGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRyYW5zbGF0ZS1zaGFwZS16XCIpO1xuXG5jb25zdCBzbGlkZXJBbmdsZVNoYXBlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci1hbmdsZS1zaGFwZS14XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGxhYmVsQW5nbGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWFuZ2xlLXNoYXBlLXhcIik7XG5cbmNvbnN0IHNsaWRlckFuZ2xlU2hhcGVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLWFuZ2xlLXNoYXBlLXlcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxBbmdsZVNoYXBlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtYW5nbGUtc2hhcGUteVwiKTtcblxuY29uc3Qgc2xpZGVyQW5nbGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItYW5nbGUtc2hhcGUtelwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbEFuZ2xlU2hhcGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1hbmdsZS1zaGFwZS16XCIpO1xuXG5jb25zdCBzbGlkZXJTY2FsZVNoYXBlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInNsaWRlci1zY2FsZS1zaGFwZS14XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGxhYmVsU2NhbGVTaGFwZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXNjYWxlLXNoYXBlLXhcIik7XG5cbmNvbnN0IHNsaWRlclNjYWxlU2hhcGVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLXNjYWxlLXNoYXBlLXlcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbGFiZWxTY2FsZVNoYXBlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtc2NhbGUtc2hhcGUteVwiKTtcblxuY29uc3Qgc2xpZGVyU2NhbGVTaGFwZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItc2NhbGUtc2hhcGUtelwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbFNjYWxlU2hhcGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1zY2FsZS1zaGFwZS16XCIpO1xuXG5jb25zdCBzbGlkZXJDYW1BbmdsZVNoYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwic2xpZGVyLWNhbS1hbmdsZS1zaGFwZVwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbENhbUFuZ2xlU2hhcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLWNhbS1hbmdsZS1zaGFwZVwiKTtcblxuY29uc3Qgc2xpZGVyQ2FtUmFkaXVzU2hhcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzbGlkZXItY2FtLXJhZGl1cy1zaGFwZVwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBsYWJlbENhbVJhZGl1c1NoYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC1jYW0tcmFkaXVzLXNoYXBlXCIpO1xuXG5jb25zdCBsaXN0T2ZQcm9qZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwibGlzdC1vZi1wcm9qZWN0aW9uXCJcbikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbmNvbnN0IGxpc3RPZk1hcHBpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJsaXN0LW9mLW1hcHBpbmdcIlxuKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuY29uc3QgbG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZC1idG5cIik7XG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ0blwiKTtcbmNvbnN0IHNoYWRpbmdNb2RlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGFkaW5nLW1vZGUtYnRuXCIpO1xuY29uc3QgYW5pbWF0aW9uTW9kZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uLW1vZGUtYnRuXCIpO1xuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ0blwiKTtcbmNvbnN0IGhlbHBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHAtYnRuXCIpO1xuY29uc3QgaGVscE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLXBhbmVsXCIpO1xuY29uc3QgY2xvc2VIZWxwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1oZWxwLWJ0blwiKTtcbmNvbnN0IGNvbXBvbmVudFRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBvbmVudC10cmVlXCIpO1xuXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXG5sZXQgYXJ0aWN1bGF0ZWQ6IEFydGljdWxhdGVkO1xubGV0IHNlbGVjdGVkTm9kZTogTm9kZTtcblxubGV0IGNhbWVyYTogQ2FtZXJhO1xubGV0IGNhbWVyYVNoYXBlOiBDYW1lcmE7XG5sZXQgYW1iaWVudENvbG9yOiBDb2xvcjtcbmxldCBkaXJlY3Rpb25hbExpZ2h0OiBMaWdodDtcblxubGV0IG9mZnNldFRyYW5zbGF0ZSA9IHtcbiAgb3J0aG9ncmFwaGljOiB7XG4gICAgeDogbWFpbkNhbnZhcy53aWR0aCAvIDIsXG4gICAgeTogbWFpbkNhbnZhcy5oZWlnaHQsXG4gIH0sXG4gIHBlcnNwZWN0aXZlOiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICB9LFxuICBvYmxpcXVlOiB7XG4gICAgeDogbWFpbkNhbnZhcy53aWR0aCAvIDEuNSxcbiAgICB5OiAwLFxuICB9LFxufTtcblxubGV0IG9mZnNldFRyYW5zbGF0ZVNlY29uZGFyeUNhbnZhcyA9IHtcbiAgb3J0aG9ncmFwaGljOiB7XG4gICAgeDogc2Vjb25kYXJ5Q2FudmFzLndpZHRoIC8gMixcbiAgICB5OiBzZWNvbmRhcnlDYW52YXMuaGVpZ2h0LFxuICB9LFxuICBwZXJzcGVjdGl2ZToge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgfSxcbiAgb2JsaXF1ZToge1xuICAgIHg6IHNlY29uZGFyeUNhbnZhcy53aWR0aCAvIDEuNSxcbiAgICB5OiAwLFxuICB9LFxufTtcblxubGV0IHByb2plY3Rpb25UeXBlOiBQcm9qZWN0aW9uVHlwZSA9IFwib3J0aG9ncmFwaGljXCI7XG5sZXQgcHJvamVjdGlvblBhcmFtczogUHJvamVjdGlvblBhcmFtcyA9IHtcbiAgb3J0aG9ncmFwaGljOiB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogKG1haW5HTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudFdpZHRoLFxuICAgIGJvdHRvbTogKG1haW5HTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudEhlaWdodCxcbiAgICB0b3A6IDAsXG4gICAgbmVhcjogMjAwMCxcbiAgICBmYXI6IC0yMDAwLFxuICB9LFxuICBwZXJzcGVjdGl2ZToge1xuICAgIGZpZWxkT2ZWaWV3OiBkZWdUb1JhZCg2MCksXG4gICAgYXNwZWN0OlxuICAgICAgKG1haW5HTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudFdpZHRoIC9cbiAgICAgIChtYWluR0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRIZWlnaHQsXG4gICAgbmVhcjogMSxcbiAgICBmYXI6IDIwMDAsXG4gIH0sXG4gIG9ibGlxdWU6IHtcbiAgICBmYWN0b3I6IDAuMSxcbiAgICBhbmdsZTogZGVnVG9SYWQoMTUpLFxuICAgIG9ydGhvX2xlZnQ6IDAsXG4gICAgb3J0aG9fcmlnaHQ6IChtYWluR0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRXaWR0aCxcbiAgICBvcnRob19ib3R0b206IChtYWluR0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRIZWlnaHQsXG4gICAgb3J0aG9fdG9wOiAwLFxuICAgIG9ydGhvX25lYXI6IDIwMDAsXG4gICAgb3J0aG9fZmFyOiAtMjAwMCxcbiAgfSxcbn07XG5cbmxldCBwcm9qZWN0aW9uUGFyYW1zU2Vjb25kYXJ5OiBQcm9qZWN0aW9uUGFyYW1zID0ge1xuICBvcnRob2dyYXBoaWM6IHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAoc2Vjb25kYXJ5R0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRXaWR0aCxcbiAgICBib3R0b206IChzZWNvbmRhcnlHTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudEhlaWdodCxcbiAgICB0b3A6IDAsXG4gICAgbmVhcjogMjAwMCxcbiAgICBmYXI6IC0yMDAwLFxuICB9LFxuICBwZXJzcGVjdGl2ZToge1xuICAgIGZpZWxkT2ZWaWV3OiBkZWdUb1JhZCg2MCksXG4gICAgYXNwZWN0OlxuICAgICAgKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50V2lkdGggL1xuICAgICAgKHNlY29uZGFyeUdMLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudCkuY2xpZW50SGVpZ2h0LFxuICAgIG5lYXI6IDEsXG4gICAgZmFyOiAyMDAwLFxuICB9LFxuICBvYmxpcXVlOiB7XG4gICAgZmFjdG9yOiAwLjEsXG4gICAgYW5nbGU6IGRlZ1RvUmFkKDE1KSxcbiAgICBvcnRob19sZWZ0OiAwLFxuICAgIG9ydGhvX3JpZ2h0OiAoc2Vjb25kYXJ5R0wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50KS5jbGllbnRXaWR0aCxcbiAgICBvcnRob19ib3R0b206IChzZWNvbmRhcnlHTC5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmNsaWVudEhlaWdodCxcbiAgICBvcnRob190b3A6IDAsXG4gICAgb3J0aG9fbmVhcjogMjAwMCxcbiAgICBvcnRob19mYXI6IC0yMDAwLFxuICB9LFxufTtcbmxldCBzaGFkZXJTdGF0dXM6IFNoYWRlclN0YXR1cyA9IFNoYWRlclN0YXR1cy5PRkY7XG5sZXQgYW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5sZXQgbWFwcGluZ01vZGU6IE1hcHBpbmdNb2RlID0gTWFwcGluZ01vZGUuVEVYVFVSRTtcblxuLyogR2xvYmFsIENvbnN0YW50ICovXG5jb25zdCBhbmltYXRpb25TcGVlZCA9IDEuMjtcblxuLyogUmVuZGVyIE1haW4gQ2FudmFzICovXG5jb25zdCByZW5kZXJNYWluQ2FudmFzID0gKG5vdzogRE9NSGlnaFJlc1RpbWVTdGFtcCkgPT4ge1xuICAvKiBDb252ZW50IHRvIFNlY29uZCAqL1xuICBub3cgKj0gMC4wMDU7XG5cbiAgLyogQW5pbWF0ZSAqL1xuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgY29uc3QgYyA9IGFuaW1hdGlvblNwZWVkICogbm93O1xuXG4gICAgYXJ0aWN1bGF0ZWQuYXBwbHlBbmltYXRpb24oYyk7XG4gIH1cblxuICAvKiBHZXQgQ3VycmVudCBMaWdodCAqL1xuICBjb25zdCBjdXJyZW50TGlnaHQgPVxuICAgIHByb2plY3Rpb25UeXBlID09PSBcInBlcnNwZWN0aXZlXCJcbiAgICAgID8gZGlyZWN0aW9uYWxMaWdodC5yZXZlcnNlKClcbiAgICAgIDogZGlyZWN0aW9uYWxMaWdodDtcblxuICAvKiBSZW5kZXIgQXJ0aWN1bGF0ZWQgKi9cbiAgYXJ0aWN1bGF0ZWQucmVuZGVyVHJlZShcbiAgICBtYWluUmVuZGVyZXIsXG4gICAgcHJvamVjdGlvblR5cGUsXG4gICAgcHJvamVjdGlvblBhcmFtc1twcm9qZWN0aW9uVHlwZV0sXG4gICAgY2FtZXJhLFxuICAgIG9mZnNldFRyYW5zbGF0ZVtwcm9qZWN0aW9uVHlwZV0ueCxcbiAgICBvZmZzZXRUcmFuc2xhdGVbcHJvamVjdGlvblR5cGVdLnksXG4gICAgYW1iaWVudENvbG9yLFxuICAgIGN1cnJlbnRMaWdodCxcbiAgICBzaGFkZXJTdGF0dXMsXG4gICAgbWFwcGluZ01vZGVcbiAgKTtcblxuICBpZiAoc2VsZWN0ZWROb2RlICE9IG51bGwpIHtcbiAgICBzZWxlY3RlZE5vZGUucmVuZGVyVHJlZShcbiAgICAgIHNlY29uZGFyeVJlbmRlcmVyLFxuICAgICAgcHJvamVjdGlvblR5cGUsXG4gICAgICBwcm9qZWN0aW9uUGFyYW1zU2Vjb25kYXJ5W3Byb2plY3Rpb25UeXBlXSxcbiAgICAgIGNhbWVyYVNoYXBlLFxuICAgICAgb2Zmc2V0VHJhbnNsYXRlU2Vjb25kYXJ5Q2FudmFzW3Byb2plY3Rpb25UeXBlXS54LFxuICAgICAgb2Zmc2V0VHJhbnNsYXRlU2Vjb25kYXJ5Q2FudmFzW3Byb2plY3Rpb25UeXBlXS55LFxuICAgICAgYW1iaWVudENvbG9yLFxuICAgICAgY3VycmVudExpZ2h0LFxuICAgICAgc2hhZGVyU3RhdHVzLFxuICAgICAgbWFwcGluZ01vZGUsXG4gICAgICBUcmFuc2Zvcm1hdGlvbi5pZGVudGl0eSgpXG4gICAgKTtcbiAgfVxuXG4gIC8qIFJlbmRlciBSZWN1cnNpdmVseSAqL1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck1haW5DYW52YXMpO1xufTtcblxuLyogSW5pdGlhbGl6ZSBEZWZhdWx0IFZhbHVlICovXG5jb25zdCBpbml0aWFsaXplRGVmYXVsdFZhbHVlID0gKFxuICBuZXdBcnRpY3VsYXRlZDogQXJ0aWN1bGF0ZWQsXG4gIG5ld0NhbWVyYTogQ2FtZXJhLFxuICBuZXdDYW1lcmFTaGFwZTogQ2FtZXJhLFxuICBuZXdBbWJpZW50Q29sb3I6IENvbG9yLFxuICBuZXdEaXJlY3Rpb25hbExpZ2h0OiBMaWdodFxuKSA9PiB7XG4gIGFydGljdWxhdGVkID0gbmV3QXJ0aWN1bGF0ZWQ7XG4gIGNhbWVyYSA9IG5ld0NhbWVyYTtcbiAgY2FtZXJhU2hhcGUgPSBuZXdDYW1lcmFTaGFwZTtcbiAgYW1iaWVudENvbG9yID0gbmV3QW1iaWVudENvbG9yO1xuICBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3RGlyZWN0aW9uYWxMaWdodDtcblxuICBzbGlkZXJUcmFuc2xhdGVYLnZhbHVlQXNOdW1iZXIgPSBhcnRpY3VsYXRlZC5yb290LnR4O1xuICBsYWJlbFRyYW5zbGF0ZVgudGV4dENvbnRlbnQgPSBhcnRpY3VsYXRlZC5yb290LnR4LnRvU3RyaW5nKCk7XG5cbiAgc2xpZGVyVHJhbnNsYXRlWS52YWx1ZUFzTnVtYmVyID0gYXJ0aWN1bGF0ZWQucm9vdC50eTtcbiAgbGFiZWxUcmFuc2xhdGVZLnRleHRDb250ZW50ID0gYXJ0aWN1bGF0ZWQucm9vdC50eS50b1N0cmluZygpO1xuXG4gIHNsaWRlclRyYW5zbGF0ZVoudmFsdWVBc051bWJlciA9IGFydGljdWxhdGVkLnJvb3QudHo7XG4gIGxhYmVsVHJhbnNsYXRlWi50ZXh0Q29udGVudCA9IGFydGljdWxhdGVkLnJvb3QudHoudG9TdHJpbmcoKTtcblxuICBzbGlkZXJBbmdsZVgudmFsdWVBc051bWJlciA9IE1hdGgucm91bmQocmFkVG9EZWcoYXJ0aWN1bGF0ZWQucm9vdC5hbmdsZVgpKTtcbiAgbGFiZWxBbmdsZVgudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgIHJhZFRvRGVnKGFydGljdWxhdGVkLnJvb3QuYW5nbGVYKVxuICApLnRvU3RyaW5nKCk7XG5cbiAgc2xpZGVyQW5nbGVZLnZhbHVlQXNOdW1iZXIgPSBNYXRoLnJvdW5kKHJhZFRvRGVnKGFydGljdWxhdGVkLnJvb3QuYW5nbGVZKSk7XG4gIGxhYmVsQW5nbGVZLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcbiAgICByYWRUb0RlZyhhcnRpY3VsYXRlZC5yb290LmFuZ2xlWSlcbiAgKS50b1N0cmluZygpO1xuXG4gIHNsaWRlckFuZ2xlWi52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhhcnRpY3VsYXRlZC5yb290LmFuZ2xlWikpO1xuICBsYWJlbEFuZ2xlWi50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoXG4gICAgcmFkVG9EZWcoYXJ0aWN1bGF0ZWQucm9vdC5hbmdsZVopXG4gICkudG9TdHJpbmcoKTtcblxuICBzbGlkZXJTY2FsZVgudmFsdWVBc051bWJlciA9IGFydGljdWxhdGVkLnJvb3Quc3g7XG4gIGxhYmVsU2NhbGVYLnRleHRDb250ZW50ID0gYXJ0aWN1bGF0ZWQucm9vdC5zeC50b1N0cmluZygpO1xuXG4gIHNsaWRlclNjYWxlWS52YWx1ZUFzTnVtYmVyID0gYXJ0aWN1bGF0ZWQucm9vdC5zeTtcbiAgbGFiZWxTY2FsZVkudGV4dENvbnRlbnQgPSBhcnRpY3VsYXRlZC5yb290LnN5LnRvU3RyaW5nKCk7XG5cbiAgc2xpZGVyU2NhbGVaLnZhbHVlQXNOdW1iZXIgPSBhcnRpY3VsYXRlZC5yb290LnN6O1xuICBsYWJlbFNjYWxlWi50ZXh0Q29udGVudCA9IGFydGljdWxhdGVkLnJvb3Quc3oudG9TdHJpbmcoKTtcblxuICBzbGlkZXJDYW1BbmdsZS52YWx1ZUFzTnVtYmVyID0gcmFkVG9EZWcoY2FtZXJhLmFuZ2xlKTtcbiAgbGFiZWxDYW1BbmdsZS50ZXh0Q29udGVudCA9IHJhZFRvRGVnKGNhbWVyYS5hbmdsZSkudG9TdHJpbmcoKTtcblxuICBzbGlkZXJDYW1SYWRpdXMudmFsdWVBc051bWJlciA9IGNhbWVyYS5yYWRpdXM7XG4gIGxhYmVsQ2FtUmFkaXVzLnRleHRDb250ZW50ID0gY2FtZXJhLnJhZGl1cy50b1N0cmluZygpO1xuXG4gIHNsaWRlckNhbUFuZ2xlU2hhcGUudmFsdWVBc051bWJlciA9IHJhZFRvRGVnKGNhbWVyYVNoYXBlLmFuZ2xlKTtcbiAgbGFiZWxDYW1BbmdsZVNoYXBlLnRleHRDb250ZW50ID0gcmFkVG9EZWcoY2FtZXJhU2hhcGUuYW5nbGUpLnRvU3RyaW5nKCk7XG5cbiAgc2xpZGVyQ2FtUmFkaXVzU2hhcGUudmFsdWVBc051bWJlciA9IGNhbWVyYVNoYXBlLnJhZGl1cztcbiAgbGFiZWxDYW1SYWRpdXNTaGFwZS50ZXh0Q29udGVudCA9IGNhbWVyYVNoYXBlLnJhZGl1cy50b1N0cmluZygpO1xuXG4gIHNoYWRpbmdNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJPTlwiO1xuICBzaGFkaW5nTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBzaGFkZXJTdGF0dXMgPSBTaGFkZXJTdGF0dXMuT047XG5cbiAgYW5pbWF0aW9uTW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT05cIjtcbiAgYW5pbWF0aW9uTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBhbmltYXRpb24gPSB0cnVlO1xuXG4gIG1haW5SZW5kZXJlci50ZXh0dXJlKFwiaW1hZ2VzL3dvb2QucG5nXCIsIDEsIDEpO1xuICBzZWNvbmRhcnlSZW5kZXJlci50ZXh0dXJlKFwiaW1hZ2VzL3dvb2QucG5nXCIsIDEsIDEpO1xufTtcblxuLyogQ29tcG9uZW50IFRyZWUgKi9cbmNvbnN0IGFkZENvbXBvbmVudFRyZWUgPSAoXG4gIGNvbXBvbmVudFRyZWU6IEhUTUxFbGVtZW50LFxuICByb290OiBOb2RlLFxuICBtYXJnaW5fbGVmdCA9IDBcbikgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHJvb3QuaW5kZXg7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS50ZXh0Q29udGVudDtcblxuICAgIHNlbGVjdGVkTm9kZSA9IGFydGljdWxhdGVkLmZpbmROb2RlKHRleHRDb250ZW50KTtcbiAgICBzbGlkZXJUcmFuc2xhdGVTaGFwZVgudmFsdWVBc051bWJlciA9IHNlbGVjdGVkTm9kZS50eDtcbiAgICBsYWJlbFRyYW5zbGF0ZVNoYXBlWC50ZXh0Q29udGVudCA9IHNlbGVjdGVkTm9kZS50eC50b1N0cmluZygpO1xuXG4gICAgc2xpZGVyVHJhbnNsYXRlU2hhcGVZLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZE5vZGUudHk7XG4gICAgbGFiZWxUcmFuc2xhdGVTaGFwZVkudGV4dENvbnRlbnQgPSBzZWxlY3RlZE5vZGUudHkudG9TdHJpbmcoKTtcblxuICAgIHNsaWRlclRyYW5zbGF0ZVNoYXBlWi52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWROb2RlLnR6O1xuICAgIGxhYmVsVHJhbnNsYXRlU2hhcGVaLnRleHRDb250ZW50ID0gc2VsZWN0ZWROb2RlLnR6LnRvU3RyaW5nKCk7XG5cbiAgICBzbGlkZXJBbmdsZVNoYXBlWC52YWx1ZUFzTnVtYmVyID0gTWF0aC5yb3VuZChyYWRUb0RlZyhzZWxlY3RlZE5vZGUuYW5nbGVYKSk7XG4gICAgbGFiZWxBbmdsZVNoYXBlWC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoXG4gICAgICByYWRUb0RlZyhzZWxlY3RlZE5vZGUuYW5nbGVYKVxuICAgICkudG9TdHJpbmcoKTtcblxuICAgIHNsaWRlckFuZ2xlU2hhcGVZLnZhbHVlQXNOdW1iZXIgPSBNYXRoLnJvdW5kKHJhZFRvRGVnKHNlbGVjdGVkTm9kZS5hbmdsZVkpKTtcbiAgICBsYWJlbEFuZ2xlU2hhcGVZLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcbiAgICAgIHJhZFRvRGVnKHNlbGVjdGVkTm9kZS5hbmdsZVkpXG4gICAgKS50b1N0cmluZygpO1xuXG4gICAgc2xpZGVyQW5nbGVTaGFwZVoudmFsdWVBc051bWJlciA9IE1hdGgucm91bmQocmFkVG9EZWcoc2VsZWN0ZWROb2RlLmFuZ2xlWikpO1xuICAgIGxhYmVsQW5nbGVTaGFwZVoudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgICAgcmFkVG9EZWcoc2VsZWN0ZWROb2RlLmFuZ2xlWilcbiAgICApLnRvU3RyaW5nKCk7XG5cbiAgICBzbGlkZXJTY2FsZVNoYXBlWC52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWROb2RlLnN4O1xuICAgIGxhYmVsU2NhbGVTaGFwZVgudGV4dENvbnRlbnQgPSBzZWxlY3RlZE5vZGUuc3gudG9TdHJpbmcoKTtcblxuICAgIHNsaWRlclNjYWxlU2hhcGVZLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZE5vZGUuc3k7XG4gICAgbGFiZWxTY2FsZVNoYXBlWS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTm9kZS5zeS50b1N0cmluZygpO1xuXG4gICAgc2xpZGVyU2NhbGVTaGFwZVoudmFsdWVBc051bWJlciA9IHNlbGVjdGVkTm9kZS5zejtcbiAgICBsYWJlbFNjYWxlU2hhcGVaLnRleHRDb250ZW50ID0gc2VsZWN0ZWROb2RlLnN6LnRvU3RyaW5nKCk7XG4gIH0pO1xuXG4gIGJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7bWFyZ2luX2xlZnR9JWA7XG5cbiAgY29tcG9uZW50VHJlZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICBjb21wb25lbnRUcmVlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiByb290LmNoaWxkcmVuKSB7XG4gICAgYWRkQ29tcG9uZW50VHJlZShjb21wb25lbnRUcmVlLCBjaGlsZCwgbWFyZ2luX2xlZnQgKyA1KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJDb21wb25lbnRUcmVlID0gKGNvbXBvbmVudFRyZWUgOiBIVE1MRWxlbWVudCkgPT4ge1xuICB3aGlsZSAoY29tcG9uZW50VHJlZS5maXJzdENoaWxkKSB7XG4gICAgY29tcG9uZW50VHJlZS5yZW1vdmVDaGlsZChjb21wb25lbnRUcmVlLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbi8qIEV2ZW50IExpc3RlbmVyICovXG5zbGlkZXJUcmFuc2xhdGVYLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG5cbiAgbGFiZWxUcmFuc2xhdGVYLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgYXJ0aWN1bGF0ZWQucm9vdC5tb3ZlWChkZWx0YSk7XG59KTtcblxuc2xpZGVyVHJhbnNsYXRlWS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsVHJhbnNsYXRlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGFydGljdWxhdGVkLnJvb3QubW92ZVkoZGVsdGEpO1xufSk7XG5cbnNsaWRlclRyYW5zbGF0ZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFRyYW5zbGF0ZVoudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBhcnRpY3VsYXRlZC5yb290Lm1vdmVaKGRlbHRhKTtcbn0pO1xuXG5zbGlkZXJBbmdsZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbEFuZ2xlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGFydGljdWxhdGVkLnJvb3Qucm90YXRlWChkZWdUb1JhZChkZWx0YSkpO1xufSk7XG5cbnNsaWRlckFuZ2xlWS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsQW5nbGVZLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgYXJ0aWN1bGF0ZWQucm9vdC5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhKSk7XG59KTtcblxuc2xpZGVyQW5nbGVaLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG5cbiAgbGFiZWxBbmdsZVoudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBhcnRpY3VsYXRlZC5yb290LnJvdGF0ZVooZGVnVG9SYWQoZGVsdGEpKTtcbn0pO1xuXG5zbGlkZXJTY2FsZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFNjYWxlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGFydGljdWxhdGVkLnJvb3Quc2NhbGVYKGRlbHRhKTtcbn0pO1xuXG5zbGlkZXJTY2FsZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFNjYWxlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGFydGljdWxhdGVkLnJvb3Quc2NhbGVZKGRlbHRhKTtcbn0pO1xuXG5zbGlkZXJTY2FsZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFNjYWxlWi50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGFydGljdWxhdGVkLnJvb3Quc2NhbGVaKGRlbHRhKTtcbn0pO1xuXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWC50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xuICAgIHNlbGVjdGVkTm9kZS5tb3ZlWChkZWx0YSk7XG4gIH1cbn0pO1xuXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xuICAgIHNlbGVjdGVkTm9kZS5tb3ZlWShkZWx0YSk7XG4gIH1cbn0pO1xuXG5zbGlkZXJUcmFuc2xhdGVTaGFwZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFRyYW5zbGF0ZVNoYXBlWi50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xuICAgIHNlbGVjdGVkTm9kZS5tb3ZlWihkZWx0YSk7XG4gIH1cbn0pO1xuXG5zbGlkZXJBbmdsZVNoYXBlWC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsQW5nbGVTaGFwZVgudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBpZiAoc2VsZWN0ZWROb2RlICE9IG51bGwpIHtcbiAgICBzZWxlY3RlZE5vZGUucm90YXRlWChkZWdUb1JhZChkZWx0YSkpO1xuICB9XG59KTtcblxuc2xpZGVyQW5nbGVTaGFwZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbEFuZ2xlU2hhcGVZLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XG4gICAgc2VsZWN0ZWROb2RlLnJvdGF0ZVkoZGVnVG9SYWQoZGVsdGEpKTtcbiAgfVxufSk7XG5cbnNsaWRlckFuZ2xlU2hhcGVaLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG5cbiAgbGFiZWxBbmdsZVNoYXBlWi50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xuICAgIHNlbGVjdGVkTm9kZS5yb3RhdGVaKGRlZ1RvUmFkKGRlbHRhKSk7XG4gIH1cbn0pO1xuXG5zbGlkZXJTY2FsZVNoYXBlWC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsU2NhbGVTaGFwZVgudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBpZiAoc2VsZWN0ZWROb2RlICE9IG51bGwpIHtcbiAgICBzZWxlY3RlZE5vZGUuc2NhbGVYKGRlbHRhKTtcbiAgfVxufSk7XG5cbnNsaWRlclNjYWxlU2hhcGVZLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZGVsdGEgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG5cbiAgbGFiZWxTY2FsZVNoYXBlWS50ZXh0Q29udGVudCA9IGRlbHRhLnRvU3RyaW5nKCk7XG4gIGlmIChzZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xuICAgIHNlbGVjdGVkTm9kZS5zY2FsZVkoZGVsdGEpO1xuICB9XG59KTtcblxuc2xpZGVyU2NhbGVTaGFwZVouYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbFNjYWxlU2hhcGVaLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgaWYgKHNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XG4gICAgc2VsZWN0ZWROb2RlLnNjYWxlWihkZWx0YSk7XG4gIH1cbn0pO1xuXG5saXN0T2ZQcm9qZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0aW9uVHlwZSA9IGxpc3RPZlByb2plY3Rpb24uc2VsZWN0ZWRPcHRpb25zWzBdXG4gICAgLnZhbHVlIGFzIFByb2plY3Rpb25UeXBlO1xuXG4gIHByb2plY3Rpb25UeXBlID0gbmV3UHJvamVjdGlvblR5cGU7XG59KTtcblxubGlzdE9mTWFwcGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgbmV3TWFwcGluZyA9IGxpc3RPZk1hcHBpbmcuc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlIGFzIE1hcHBpbmdNb2RlO1xuICBtYXBwaW5nTW9kZSA9IG5ld01hcHBpbmc7XG5cbiAgc3dpdGNoIChtYXBwaW5nTW9kZSkge1xuICAgIGNhc2UgTWFwcGluZ01vZGUuVEVYVFVSRTpcbiAgICAgIG1haW5SZW5kZXJlci50ZXh0dXJlKFwiaW1hZ2VzL3dvb2QucG5nXCIsIDEsIDEpO1xuICAgICAgc2Vjb25kYXJ5UmVuZGVyZXIudGV4dHVyZShcImltYWdlcy93b29kLnBuZ1wiLCAxLCAxKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNYXBwaW5nTW9kZS5FTlZJUk9OTUVOVDpcbiAgICAgIG1haW5SZW5kZXJlci5lbnZpcm9ubWVudChbXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL3Bvcy14LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL25lZy14LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL3Bvcy15LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL25lZy15LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL3Bvcy16LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IFwiaW1hZ2VzL25lZy16LmpwZ1wiLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIHNlY29uZGFyeVJlbmRlcmVyLmVudmlyb25tZW50KFtcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvcG9zLXguanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvbmVnLXguanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvcG9zLXkuanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvbmVnLXkuanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvcG9zLXouanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNvdXJjZTogXCJpbWFnZXMvbmVnLXouanBnXCIsXG4gICAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1hcHBpbmdNb2RlLkJVTVA6XG4gICAgICBtYWluUmVuZGVyZXIudGV4dHVyZShcImltYWdlcy9idW1wZWQucG5nXCIsIDEsIDEpO1xuICAgICAgc2Vjb25kYXJ5UmVuZGVyZXIudGV4dHVyZShcImltYWdlcy9idW1wZWQucG5nXCIsIDEsIDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG4vKiBDYW1lcmEgQ29udHJvbCBMaXN0ZW5lciAqL1xuc2xpZGVyQ2FtQW5nbGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbENhbUFuZ2xlLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgY2FtZXJhLnJvdGF0ZShkZWdUb1JhZChkZWx0YSkpO1xufSk7XG5cbnNsaWRlckNhbVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsQ2FtUmFkaXVzLnRleHRDb250ZW50ID0gZGVsdGEudG9TdHJpbmcoKTtcbiAgY2FtZXJhLnJhZGl1cyA9IGRlbHRhO1xufSk7XG5cbnNsaWRlckNhbUFuZ2xlU2hhcGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBjb25zdCBkZWx0YSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcblxuICBsYWJlbENhbUFuZ2xlU2hhcGUudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBjYW1lcmFTaGFwZS5yb3RhdGUoZGVnVG9SYWQoZGVsdGEpKTtcbn0pO1xuXG5zbGlkZXJDYW1SYWRpdXNTaGFwZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuXG4gIGxhYmVsQ2FtUmFkaXVzU2hhcGUudGV4dENvbnRlbnQgPSBkZWx0YS50b1N0cmluZygpO1xuICBjYW1lcmFTaGFwZS5yYWRpdXMgPSBkZWx0YTtcbn0pO1xuXG5sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIEZpbGVIYW5kbGluZy51cGxvYWQoKHRleHQpID0+IHtcbiAgICBpbml0aWFsaXplRGVmYXVsdFZhbHVlKFxuICAgICAgRmlsZVN5c3RlbS5sb2FkQXJ0aWN1bGF0ZWQodGV4dCksXG4gICAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcbiAgICAgIGdlbmVyYXRlRGVmYXVsdENhbWVyYSgpLFxuICAgICAgZ2VuZXJhdGVEZWZhdWx0QW1iaWVudENvbG9yKCksXG4gICAgICBnZW5lcmF0ZURlZmF1bHREaXJlY3Rpb25hbExpZ2h0KClcbiAgICApO1xuICAgIGNsZWFyQ29tcG9uZW50VHJlZShjb21wb25lbnRUcmVlKTtcbiAgICBhZGRDb21wb25lbnRUcmVlKGNvbXBvbmVudFRyZWUsIGFydGljdWxhdGVkLnJvb3QpO1xuICB9KTtcbn0pO1xuXG5zYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIEZpbGVIYW5kbGluZy5kb3dubG9hZChGaWxlU3lzdGVtLnNlcmlhbGl6ZUFydGljdWxhdGVkKGFydGljdWxhdGVkKSk7XG59KTtcblxuLyogU2hhZGluZyBhbmQgQW5pbWF0aW9uICovXG5zaGFkaW5nTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoc2hhZGVyU3RhdHVzID09PSBTaGFkZXJTdGF0dXMuT0ZGKSB7XG4gICAgc2hhZGluZ01vZGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzaGFkaW5nTW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT05cIjtcblxuICAgIHNoYWRlclN0YXR1cyA9IFNoYWRlclN0YXR1cy5PTjtcbiAgfSBlbHNlIHtcbiAgICBzaGFkaW5nTW9kZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNoYWRpbmdNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJPRkZcIjtcblxuICAgIHNoYWRlclN0YXR1cyA9IFNoYWRlclN0YXR1cy5PRkY7XG4gIH1cbn0pO1xuXG5hbmltYXRpb25Nb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgYW5pbWF0aW9uTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGFuaW1hdGlvbk1vZGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk9OXCI7XG5cbiAgICBhbmltYXRpb24gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGlvbk1vZGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBhbmltYXRpb25Nb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJPRkZcIjtcblxuICAgIGFuaW1hdGlvbiA9IGZhbHNlO1xuICB9XG59KTtcblxuLyogUmVzZXQgU3RhdGUgKi9cbnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGluaXRpYWxpemVEZWZhdWx0VmFsdWUoXG4gICAgZ2VuZXJhdGVEZWZhdWx0QXJ0aWN1bGF0ZWQoKSxcbiAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcbiAgICBnZW5lcmF0ZURlZmF1bHRDYW1lcmEoKSxcbiAgICBnZW5lcmF0ZURlZmF1bHRBbWJpZW50Q29sb3IoKSxcbiAgICBnZW5lcmF0ZURlZmF1bHREaXJlY3Rpb25hbExpZ2h0KClcbiAgKTtcbiAgY2xlYXJDb21wb25lbnRUcmVlKGNvbXBvbmVudFRyZWUpO1xuICBhZGRDb21wb25lbnRUcmVlKGNvbXBvbmVudFRyZWUsIGFydGljdWxhdGVkLnJvb3QpO1xufSk7XG5cbi8qIEhlbHAgQnV0dG9uICovXG5oZWxwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGhlbHBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuY2xvc2VIZWxwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGhlbHBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaGVscE1vZGFsKSB7XG4gICAgaGVscE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufSk7XG5cbi8qIE1haW4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgaW5pdGlhbGl6ZURlZmF1bHRWYWx1ZShcbiAgICBnZW5lcmF0ZURlZmF1bHRBcnRpY3VsYXRlZCgpLFxuICAgIGdlbmVyYXRlRGVmYXVsdENhbWVyYSgpLFxuICAgIGdlbmVyYXRlRGVmYXVsdENhbWVyYSgpLFxuICAgIGdlbmVyYXRlRGVmYXVsdEFtYmllbnRDb2xvcigpLFxuICAgIGdlbmVyYXRlRGVmYXVsdERpcmVjdGlvbmFsTGlnaHQoKVxuICApO1xuICBjbGVhckNvbXBvbmVudFRyZWUoY29tcG9uZW50VHJlZSk7XG4gIGFkZENvbXBvbmVudFRyZWUoY29tcG9uZW50VHJlZSwgYXJ0aWN1bGF0ZWQucm9vdCk7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTWFpbkNhbnZhcyk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==