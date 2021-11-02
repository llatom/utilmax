/**
 * 格式化日期
 * @param datetimeStr 原始时间字符串
 * @param format 'YYYY-MM-DD HH:mm:ss'
 */
 export function formatDate(datetimeStr:string, format = 'YYYY-MM-DD HH:mm:ss') {
    const date = getDate(datetimeStr)
    const obj = {
      YYYY: date.getFullYear().toString().padStart(4, '0'),
      MM: (date.getMonth() + 1).toString().padStart(2, '0'),
      DD: date.getDate().toString().padStart(2, '0'),
      HH: date.getHours().toString().padStart(2, '0'),
      mm: date.getMinutes().toString().padStart(2, '0'),
      ss: date.getSeconds().toString().padStart(2, '0'),
      ms: date.getMilliseconds().toString().padStart(3, '0'),
    }
  
    return format.replace(/(YYYY|MM|DD|HH|mm|ss|ms)/g, (_, $1) => {
      return obj[$1]
    })
  }


// 解析时间 兼容ios微信小程序客户端
  function getDate(datetimeStr){
	if(!datetimeStr){
		return null;
	}
	if(typeof datetimeStr !== "string") {
		return datetimeStr
	}
	return new Date(datetimeStr.replace(/-/g, '/'));
}