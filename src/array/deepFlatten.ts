/**
 *
 * @desc
 * 深拼合数组。
 * 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (...) 来拼合数组。递归拼合作为数组的每个元素。
 * @param {Array} arr
 * @return {Array}
 */

  
 const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));

export default deepFlatten
  