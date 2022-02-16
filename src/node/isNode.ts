/**
 *
 * @desc
 * 确定当前的执行期函式库是否是 Node.js。
 * 使用提供当前 Node.js 进程信息的进程全局对象。
 * 检查是否定义了 process、 process.versions 和 process.versions.node。
 * @return {boolean}
 */

 const isNode = () =>
 typeof process !== 'undefined' &&
 !!process.versions &&
 !!process.versions.node;
  
  export default isNode;
  