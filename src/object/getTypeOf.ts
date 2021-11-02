/**
 *
 * @desc   获取变量的类型
 * @param  {Object} obj
 * @return {String}
 */

 export function getTypeOf(obj: object) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
  