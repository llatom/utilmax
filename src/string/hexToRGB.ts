/**
 *
 * @desc
 * 如果提供了 alpha 值，则将颜色代码转换为 rgb ()或 rgba ()字符串。
 * 使用按位右移运算符和带 & (和)运算符的掩码位将十六进制颜色代码(带或不带 # 前缀)转换为带 RGB 值的字符串。
 * 如果是3位数字的颜色代码，首先转换为6位数字的版本。
 * 如果在6位十六进制数字旁边提供了 alpha 值，则返回 rgba ()字符串。
 * @param {string} hex
 * @return {string}
 */

  
 const hexToRGB = hex => {
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
      'rgb' +
      (alpha ? 'a' : '') +
      '(' +
      (h >>> (alpha ? 24 : 16)) +
      ', ' +
      ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
      ', ' +
      ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
      (alpha ? `, ${h & 0x000000ff}` : '') +
      ')'
    );
  };

export default hexToRGB
  