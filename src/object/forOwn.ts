/**
 *
 * @desc
 * 遍历对象的所有属性，并为每个属性运行回调。
 * 使用 Object.keys ()获取对象的所有属性。
 * 使用 Array.prototype.forEach ()为每个键值对运行提供的函数。
 * 回调接收三个参数——值、键和对象。
 * @param {Object} obj
 * @param {Function} fn
 */

 const forOwn = (obj, fn) =>
 Object.keys(obj).forEach(key => fn(obj[key], key, obj));

 export default forOwn;
  