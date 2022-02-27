/**
 *
 * @desc
 * 根据给定函数对数组元素进行分组。
 * 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象, 其中的键是从映射的结果生成的。
 * @param {Array} arr
 * @param {Function} func
 * @return {Object}
 */

  
 const groupBy = (arr, func) =>
 arr.map(typeof func === 'function' ? func : val => val[func])
 .reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {});

export default groupBy
  