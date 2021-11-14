/**
 * 
 * @desc 数字千分位分割
 * @param {number} num
 * @returns {string}
 */
export function commafy(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
