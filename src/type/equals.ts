/**
 *
 * @desc
 * 对两个值进行深度比较，以确定它们是否等效。检查两个值是否相同。
 * 使用 Date.prototype.getTime ()检查两个值是否是同时存在的 Date 对象。
 * 检查两个值是否都是具有等效值的非对象值(严格比较)。
 * 检查是否只有一个值为空或未定义，或者它们的原型是否不同。
 * 如果没有满足上述条件，则使用 Object.keys ()检查两个值是否具有相同的键数。
 * 使用 Array.prototype.every ()通过递归调用 equals ()来检查 a 中的每个键是否存在于 b 中，以及它们是否等价。
 * @param {any} a
 * @param {any} b
 * @return {Boolean}
 */

  
const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date)
      return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
      return a === b;
    if (a.prototype !== b.prototype) return false;
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
  };

  export default equals
  