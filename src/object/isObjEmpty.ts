/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */

export function isObjEmpty(obj: object) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}