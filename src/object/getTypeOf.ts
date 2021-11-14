/**
 *
 * @desc   获取变量的类型
 * @param  {any} obj
 * @return {string}
 */

 export function getTypeOf(obj: object) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
  