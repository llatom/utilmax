/**
 *
 * @desc
 * 检查给定的日期是否为周末。
 * 使用 Date.prototype.getDay ()通过使用模运算符(%)检查周末。
 * 省略参数 d，以使用当前日期作为默认值。
 * @param {Date} d
 * @return {boolean}
 */

  
const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;
export default isWeekend
  