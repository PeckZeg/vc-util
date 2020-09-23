import { VNodeNormalizedRef, VNodeRef } from './types';

import { getCurrentInstance, watch, ref } from 'vue';

/**
 * Merge refs into one ref function to support ref passing.
 */
export function composeRef(
  ...refs: Array<VNodeNormalizedRef | VNodeRef>
): VNodeRef {
  return refs.reduce<any>((acc, ref) => {
    if (!ref) {
      return acc;
    }

    if (Array.isArray(ref)) {
      return acc.concat(composeRef(ref));
    }

    acc.push(
      (ref as any)?.i && (ref as any).r
        ? ref
        : { i: getCurrentInstance(), r: ref }
    );

    return acc;
  }, []);
}
