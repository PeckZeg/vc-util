import _ from 'lodash';

export const pascalCase: (string?: string) => string = _.flow([
  _.camelCase,
  _.upperFirst
]);

export function returnEmptyString() {
  return '';
}

export function returnEmptyObject<T extends object = object>(): T {
  return {} as T;
}

export function returnEmptyArray<T = any>(): T[] {
  return [];
}

export function returnUndefined(): undefined {
  return undefined;
}

export function returnNull(): null {
  return null;
}

export function returnDocument() {
  return window.document;
}
