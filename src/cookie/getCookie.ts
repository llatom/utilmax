/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
export function getCookie(name:string) : string {
    const arr = document.cookie.replace(/\s/g, "").split(';');
    for (let i = 0; i < arr.length; i++) {
        const tempArr = arr[i].split('=');
        if (tempArr[0] === name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}