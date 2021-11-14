/**
 * @desc 数组去重
 * @param {Array} arr
 * @returns {Array}
 */

export function noRepeat(arr:[]) {
  return [...new Set(arr)]
}
