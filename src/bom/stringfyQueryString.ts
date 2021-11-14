/**
 * 
 * @desc   对象序列化
 * @param  {object} obj - 需要序列化的对象
 * @return {string} - 序列化后的字符串
 */
export function stringfyQueryString(obj) {
    if (!obj) return '';
    const pairs = [];
    for (let key in obj) {
        let value = obj[key];
        if (value instanceof Array) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
}