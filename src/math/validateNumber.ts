/**
 *
 * @desc
 * 检查给定值是否是一个数字。
 * 使用 parseFloat ()尝试将 n 转换为一个数字。
 * 使用 Number.isNaN ()和 logicalnot (!)运算符检查 num 是否是一个数字。
 * 使用 Number.isFinite ()检查 num 是否是有限的。
 * 使用 Number ()和松散的相等运算符(= =)检查强制是否成立。
 * @param {any} n
 * @return {boolean}
 */

 const validateNumber = n => {
    const num = parseFloat(n);
    return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
  }
  
  export default validateNumber;
  