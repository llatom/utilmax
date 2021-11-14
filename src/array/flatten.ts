/**
 * @desc 扁平化数组，将多维数组转换为一维数组，默认depth全部展开
 * @param {Array} arr
 * @param {number} depth
 * @returns {Array}
 */
export function flatten(arr, depth = -1) {
  if (depth === -1) {
    return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
  }
  if (depth === 1) {
    return arr.reduce((a, v) => a.concat(v), []);
  }
  return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
}
