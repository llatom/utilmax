
/**
 * @desc 检查数组中某元素出现的次数
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

export function countOccurrences(arr:[], value:any) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
