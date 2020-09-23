import _upperFirst from "lodash/upperFirst";
import _camelCase from "lodash/camelCase";
import _flow from "lodash/flow";
export var pascalCase = _flow([_camelCase, _upperFirst]);
export function returnEmptyString() {
  return '';
}
export function returnEmptyObject() {
  return {};
}
export function returnEmptyArray() {
  return [];
}
export function returnUndefined() {
  return undefined;
}
export function returnNull() {
  return null;
}
export function returnDocument() {
  return window.document;
}