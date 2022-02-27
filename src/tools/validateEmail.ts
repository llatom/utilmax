/**
 *
 * @desc
 * 如果给定的字符串是有效的电子邮件, 则返回true, 否则为false。
 * 使用正则表达式检查电子邮件是否有效。如果电子邮件有效, 则返回 true, 如果没有, 则返回false。
 * @param {string} str
 * @return {boolean}
 */

  
 const validateEmail = str =>
 /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);

export default validateEmail
  