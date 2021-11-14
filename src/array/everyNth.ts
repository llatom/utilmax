/**
 * @desc 返回数组中下标间隔nth的元素
 * @param {Array} arr
 * @param {number} nth
 * @returns {Array}
 */
export function everyNth(arr:[], nth:number) {
  return arr.filter((v, i) => i % nth === nth - 1)
}
