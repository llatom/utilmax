/**
 * 
 * @desc 获取元素css样式
 * @param {HTMLElement} el
 * @param {string} name
 * @returns {string}
 */
export function getStyle(el, ruleName) {
  return getComputedStyle(el, null).getPropertyValue(ruleName)
}
