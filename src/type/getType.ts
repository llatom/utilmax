/**
 *
 * @desc
 * 返回值的原始类型。
 * 如果值未定义或为空，则返回“ undefined”或“ null”。
 * 否则，使用 Object.prototype.constructor 和 function.prototype.name 获取构造函数的名称。
 * @param {any} v
 * @return {String}
 */


 const getType = v =>
 (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);

 export default getType
  