/**
 * @desc 打包入口文件  
 * @example 自动引入子目录下所有js文件
 */
/**
 * 多入口会导致全局文件加载多次
 */

 export * from './array/arrayEqual'

 export * from './class/addClass'
 export * from './class/hasClass'
 export * from './class/removeClass'

 export * from './cookie/getCookie'
 export * from './cookie/removeCookie'
 export * from './cookie/setCookie'

 export * from './device/getExplore'
 export * from './device/inAndroid'
 export * from './device/inBrowser'
 export * from './device/inIOS'
 export * from './device/inNodeJS'
 export * from './device/inTaro'
 export * from './device/inWechatWebView'
 export * from './device/getEnvironment'

 export * from './dom/getScrollTop'
 export * from './dom/offset'
 export * from './dom/scrollTo'
 export * from './dom/setScrollTop'
 export * from './dom/windowResize'

 export * from './function/debounce'
 export * from './function/throttle'

 export * from './keycode/getKeyName'

 export * from './object/deepClone'
 export * from './object/isEmptyObject'

 export * from './random/randomColor'
 export * from './random/generateRandomNumber'

 export * from './regexp/isColor'
 export * from './regexp/isEmail'
 export * from './regexp/isIdCard'
 export * from './regexp/isPhoneNum'
 export * from './regexp/isUrl'

 export * from './string/digitUppercase'

 export * from './support/isSupportWebP'

 export * from './time/formatPassTime'
 export * from './time/formatDate'
 export * from './time/formatRemainTime'
 export * from './time/isLeapYear'
 export * from './time/isSameDay'
 export * from './time/monthDays'
 export * from './time/timeLeft'

 export * from './url/toSearch'
 export * from './url/parseQueryString'
 export * from './url/stringfyQueryString'