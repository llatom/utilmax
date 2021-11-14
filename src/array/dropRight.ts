/**
 * @desc 从右删除n个元素
 * @param {Array} arr
 * @param {number} n
 * @returns {Array}
 */
export function dropRight(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
