/**
 *
 * @desc
 * 返回两个数组之间的差异。
 * 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 */

  
 const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

export default difference
  