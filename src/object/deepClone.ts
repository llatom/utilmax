/**
 *
 * @desc
 * 创建对象的深层克隆。克隆原语、数组和对象，但不包括类实例。
 * 使用递归。
 * 检查传递的对象是否为 null，如果为 null，则返回 null。
 * 使用 Object.assign ()和空对象({})创建原始对象的浅克隆。
 * 使用 Object.keys ()和 Array.prototype.forEach ()来确定需要深度克隆哪些键值对。
 * 如果对象是 Array，则将克隆的长度设置为原始的长度，并使用 arry.from ()创建克隆。
 * @param {Object} obj
 * @return {Object}
 */

 const deepClone = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  };
  
  
  export default deepClone;
  