
/**
 * @desc 返回两个数组中相同的元素
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
export function intersection(arr1, arr2) {
  return arr2.filter(v => arr1.includes(v))
}
