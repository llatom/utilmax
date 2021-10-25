/**
 * 
 * @desc   为元素添加class
 * @param  {HTMLElement} ele 
 * @param  {String} cls 
 */

const hasClass = require('./hasClass');

export function addClass(ele:HTMLElement, cls:string) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}
