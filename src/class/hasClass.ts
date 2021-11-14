/**
 * 
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} el - 需要判断的元素
 * @param {string} className - 需要判断的class
 * @returns {boolean}
 */
export function hasClass(ele:HTMLElement, cls:string): boolean {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}