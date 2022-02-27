/**
 *
 * @desc
 * 将字符串的第一个字母大写。
 * 使用 destructuring 和toUpperCase()可将第一个字母、...rest用于获取第一个字母之后的字符数组, 然后是Array.join('')以使其成为字符串。省略lowerRest参数以保持字符串的其余部分不变, 或将其设置为true以转换为小写。
 * @param {string} str
 * @param {boolean} lowerRest
 * @return {string}
 */

  
 const capitalize = ([first,...rest], lowerRest = false) =>
 first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

export default capitalize
  