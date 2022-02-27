/**
 *
 * @desc
 * 延迟异步函数的执行。
 * 延迟执行async函数的一部分, 将其放入休眠状态, 返回Promise.
 * @param {Function} fn
 * @param {Number} ms
 */

 const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export default sleep
  