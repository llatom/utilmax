/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {string} str
 * @return {boolean}
 */
export function isEmail(str:string) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}