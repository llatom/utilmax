/**
 *
 * @desc
 * 创建一个包含当前 URL 参数的对象。
 * 使用 String.prototype.match ()和适当的正则表达式来获取所有键值对。
 * 使用 Array.prototype.reduce ()将它们映射并组合成单个对象。
 * 将 location.search 作为参数应用于当前 url。
 * @param {string} url
 * @return {object}
 */

  
 const getURLParameters = url =>
 (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
   (a, v) => (
     (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
   ),
   {}
 );

export default getURLParameters
  