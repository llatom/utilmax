/**
 * @desc   获取滚动条位置
 * @param  {Document} [root=document] - 要获取滚动条位置的文档对象
 * @return {Object} - 返回滚动条位置
 */

export function getScrollPosition(el = window) {
  return {
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
  }
}
