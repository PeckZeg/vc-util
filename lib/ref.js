'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.composeRef = composeRef;

var _vue = require('vue');

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (
    var _len = arguments.length, refs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    refs[_key] = arguments[_key];
  }

  return refs.reduce(function (acc, ref) {
    if (!ref) {
      return acc;
    }

    if (Array.isArray(ref)) {
      return acc.concat(composeRef(ref));
    }

    acc.push(
      (ref === null || ref === void 0 ? void 0 : ref.i) && ref.r
        ? ref
        : {
            i: (0, _vue.getCurrentInstance)(),
            r: ref
          }
    );
    return acc;
  }, []);
}
