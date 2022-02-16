/**
 *
 * @desc
 * 对返回两个数组中至少存在一次的每个元素。
 * 用 a 和 b 的所有值创建一个 Set，并将其转换为数组。
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 */

  
 const union = (a, b) => Array.from(new Set([...a, ...b]));

export default union
  