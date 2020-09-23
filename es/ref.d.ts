import { VNodeNormalizedRef, VNodeRef } from './types';
/**
 * Merge refs into one ref function to support ref passing.
 */
export declare function composeRef(...refs: Array<VNodeNormalizedRef | VNodeRef>): VNodeRef;
