/**
 *
 * @desc
 * 实现 Luhn 算法，用于验证各种识别号码，如信用卡号码，IMEI 号码，国家提供商标识号码等。
 * 使用 String.prototype.split ()、 arry.prototype.reverse ()和 arry.prototype.map ()与 parseInt ()结合获得数字数组。
 * 使用 ary.prototype.shift ()获得最后一位数。
 * 使用 ary.prototype.reduce ()实现 Luhn 算法。
 * 如果和能被10整除，返回 true，否则返回 false。
 * @param  {String} num
 * @return {Boolean}
 */

const luhnCheck = (num) => {
  const arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  const lastDigit = arr.shift() as number;
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};

export default luhnCheck;
