/**
 * @desc 对比两个数组并且返回其中不同的元素
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */

 export function arrayEqual<T>(arrA:T[], arrB:T[]):Array<T> {
  return arrA.filter(v => !arrB.includes(v))
}
