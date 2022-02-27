/**
 *
 * @desc
 * 拼合数组。
 * 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们。
 * @param {Array} arr
 * @return {Array}
 */

  
 const flatten = arr => arr.reduce((a, v) => a.concat(v), []);

export default flatten
  