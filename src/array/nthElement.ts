/**
 * @desc 返回数组中第n个元素
 * @param {Array} arr
 * @param {number} n
 * @returns {any}
 */
export function nthElement(arr, n = 0) {
  return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
}
