/**
 * @desc 返回已size为长度的数组分割的原数组
 * @param {Array} arr
 * @param {number} size
 * @returns {Array}
 */
export function chunk(arr:[], size = 1) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => arr.slice(i * size, i * size + size));
}
