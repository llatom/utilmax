/**
 * 
 * @desc   为元素添加class
 * @param  {HTMLElement} el - 要添加class的元素
 * @param  {string} className - 要添加的class名称
 * @return {void}
 */

const hasClass = require('./hasClass');

export function addClass(ele:HTMLElement, cls:string) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}
