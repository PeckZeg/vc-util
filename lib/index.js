"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnEmptyString = returnEmptyString;
exports.returnEmptyObject = returnEmptyObject;
exports.returnEmptyArray = returnEmptyArray;
exports.returnUndefined = returnUndefined;
exports.returnNull = returnNull;
exports.returnDocument = returnDocument;
exports.pascalCase = void 0;

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

var _flow2 = _interopRequireDefault(require("lodash/flow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pascalCase = (0, _flow2.default)([_camelCase2.default, _upperFirst2.default]);
exports.pascalCase = pascalCase;

function returnEmptyString() {
  return '';
}

function returnEmptyObject() {
  return {};
}

function returnEmptyArray() {
  return [];
}

function returnUndefined() {
  return undefined;
}

function returnNull() {
  return null;
}

function returnDocument() {
  return window.document;
}