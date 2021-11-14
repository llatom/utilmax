/**
 * @desc 页面跳转，是否记录在history中
 * @param {string} url
 * @param {boolean} [isPush]
 * @returns {void}
 */

export function redirect(url, asLink = true) {
  asLink ? window.location.href = url : window.location.replace(url)
}

