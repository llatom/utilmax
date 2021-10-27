  /**
 * 
 * @desc   转换成 url search 
 * @param  {Object} url  paramsData
 * @return {String} 
 */
  export function toSearch<T = AnyObj>(obj: T) {
    const arr = Object.keys(obj).map((key) => {
      let val = obj[key]
  
      if (typeof val !== 'string') {
        try {
          val = JSON.stringify(val)
        } catch (err) {
          console.error(err)
        }
      }
  
      return `${key}=${encodeURIComponent(val)}`
    })
    return '?' + arr.join('&')
  }
  