/**
 * 告知浏览器支持的指定css属性情况
 * @param {string} propertyName - css属性名
 * @returns {boolean} - 是否支持
 */
export function validateCssKey(key) {
  const jsKey = toCamelCase(key); // 有些css属性是连字符号形成
  if (jsKey in document.documentElement.style) {
    return key;
  }
  let validKey = '';
  // 属性名为前缀在js中的形式，属性值是前缀在css中的形式
  // 经尝试，Webkit 也可是首字母小写 webkit
  const prefixMap = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-'
  };
  for (const jsPrefix in prefixMap) {
    const styleKey = toCamelCase(`${jsPrefix}-${jsKey}`);
    if (styleKey in document.documentElement.style) {
      validKey = prefixMap[jsPrefix] + key;
      break;
    }
  }
  return validKey;
}

/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 * @param {string} str - 字符串
 * @returns {string} - 驼峰命名法的字符串
 */
export function toCamelCase(value) {
  return value.replace(/-(\w)/g, (matched, letter) => {
    return letter.toUpperCase();
  });
}


/**
 * 检查浏览器是否支持某个css属性值
 * @param {string} propertyName - css属性名
 * @returns {boolean} - 是否支持
 */
export function valiateCssValue (key, value) {
  const prefix = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
  const prefixValue = prefix.map(item => {
    return item + value;
  });
  const element = document.createElement('div');
  const eleStyle = element.style;
  // 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况
  // 这就是最好在prefix里的最后一个元素是''
  prefixValue.forEach(item => {
    eleStyle[key] = item;
  });
  return eleStyle[key];
}

/**
 * 判读浏览器是否支持 CSS 属性
 * @param {string} propertyName - css属性名
 * @returns {boolean} - 是否支持
 */

export function validCss (key, value) {
  const validCss = validateCssKey(key);
  if (validCss) {
    return validCss;
  }
  return valiateCssValue(key, value);
}
