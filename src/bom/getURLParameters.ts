/**
 * 
 * @desc 获取url中的参数
 * @param {string} url
 * @returns {object}
 */

export function getURLParameters(url) {
  return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  )
}
