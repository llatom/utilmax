/**
 *
 * @desc
 * 将 JSON 对象转换为日期。
 * 使用Date(), 将 JSON 格式的日期转换为可读格式 (dd/mm/yyyy日)).
 * @param {Date} d
 * @return {Date}
 */

  
 const JSONToDate = arr => {
    const dt = new Date(parseInt(arr.toString().substr(6)));
    return `${ dt.getDate() }/${ dt.getMonth() + 1 }/${ dt.getFullYear() }`
    };
 export default JSONToDate
   