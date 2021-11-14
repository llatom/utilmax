/**
 * 
 * @desc  设置Cookie
 * @param {string} name - cookie名称
 * @param {string} value - cookie值
 * @param {number} expires - cookie过期时间，单位：天
 * @return {void}
 */
export function setCookie(name:string, value:string, days:number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}