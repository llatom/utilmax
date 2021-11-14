/**
 * 
 * @desc 判断当前位置是否为浏览器底部，返回值为true/false
 * @returns {boolean}
 */
export function bottomVisible() {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}
