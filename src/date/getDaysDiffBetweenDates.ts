/**
 *
 * @desc
 * 返回两个日期之间的差异 (以天为值)。
 * 计算Date对象之间的差异 (以天为)。
 * @param {Date} dateInitial
 * @param {Date} dateFinal
 * @return {number}
 */

  
 const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
 export default getDaysDiffBetweenDates
   