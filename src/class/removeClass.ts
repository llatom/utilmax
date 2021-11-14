/**
 * 
 * @desc 为元素移除class
 * @param {HTMLElement} el - 需要移除class的元素
 * @param {string} className - 需要移除的class
 * @returns {void}
 */

const hasClass = require('./hasClass');

export function removeClass(ele:HTMLElement, cls:string) {
    if (hasClass(ele, cls)) {
        const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}