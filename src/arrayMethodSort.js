'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callBack = compareFunction;

    if (!callBack) {
      callBack = function (a, b) {
        return String(a) > String(b) ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callBack(this[i], this[j]) > 0) {
          const backup = this[i];

          this[i] = this[j];
          this[j] = backup;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
