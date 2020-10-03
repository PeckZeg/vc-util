import _ from 'lodash';

export const pascalCase: (string?: string) => string = _.flow([
  _.camelCase,
  _.upperFirst
]);

export function toComponentEmits(...names: string[]) {
  const set = names.reduce((acc, originalName) => {
    const name = originalName.replace(/^on/, '');

    acc.add(_.camelCase(name));
    acc.add(_.kebabCase(name));
    acc.add(_.camelCase(name).toLowerCase());

    return set;
  }, new Set<string>());

  return Array.from<string>(set);
}

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
