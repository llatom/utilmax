/**
 * @desc 截取第一个符合条件的元素及其以后的元素
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
export function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}
