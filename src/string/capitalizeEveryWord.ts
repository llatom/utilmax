/**
 *
 * @desc
 * 将字符串中每个单词的首字母大写。
 * 使用replace()匹配每个单词和toUpperCase()的第一个字符以将其大写。
 * @param {string} str
 */

  
 const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export default capitalizeEveryWord
  