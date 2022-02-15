/**
 *
 * @desc
 * 检查所提供的值是否为指定类型。
 * 使用 Array.prototype.includes ()确保该值不是未定义的或 null。
 * 使用 Object.prototype.constructor 将值上的构造函数属性与 type 进行比较，以检查所提供的值是否为指定的类型。
 * @param {Function} type
 * @param {any} val
 * @returns {boolean}
 */

const is = (type, val) => ![, null].includes(val) && val.constructor === type;

export default is;
