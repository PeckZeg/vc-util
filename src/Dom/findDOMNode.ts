import { ComponentPublicInstance } from 'vue';

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
export default function findDOMNode<T = Element | Text>(
  node: ComponentPublicInstance | HTMLElement
): T {
  if (node instanceof HTMLElement) {
    return (node as unknown) as T;
  }

  return node.$el;
}
