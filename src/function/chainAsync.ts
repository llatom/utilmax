/**
 *
 * @desc
 * 链异步函数。
 * 循环遍历包含异步事件的函数数组, 当每个异步事件完成时调用next。
 * @param {Array<Function>} fns
 * @return {Function}
 */

 const chainAsync = fns => { let curr = 0; const next = () => fns[curr++](next); next(); };
export default chainAsync
  