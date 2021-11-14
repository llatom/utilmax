/**
 * @desc 打包入口文件
 * @example 自动引入子目录下所有js文件
 * 多入口会导致全局文件加载多次
 */

export * from "./array/arrayEqual";
export * from "./array/arrayMax";
export * from "./array/arrayMin";
export * from "./array/chunk";
export * from "./array/countOccurrences";
export * from "./array/arrayEqual";
export * from "./array/dropElements";
export * from "./array/dropRight";
export * from "./array/everyNth";
export * from "./array/flatten";
export * from "./array/intersection";
export * from "./array/noRepeat";
export * from "./array/nthElement";
export * from "./array/shuffle";

export * from "./bom/copyToClipboard";
export * from "./bom/getScrollPosition";
export * from "./bom/getURLParameters";
export * from "./bom/redirect";
export * from "./bom/scrollTo";
export * from "./bom/stringfyQueryString";
export * from "./bom/style";
export * from "./bom/toSearch";

export * from "./class/addClass";
export * from "./class/hasClass";
export * from "./class/removeClass";

export * from "./cookie/getCookie";
export * from "./cookie/removeCookie";
export * from "./cookie/setCookie";

export * from "./device/getExplore";
export * from "./device/inAndroid";
export * from "./device/inBrowser";
export * from "./device/inIOS";
export * from "./device/inNodeJS";
export * from "./device/inTaro";
export * from "./device/inWechatWebView";
export * from "./device/getEnvironment";

export * from "./dom/bottomVisible";
export * from "./dom/elementIsVisibleInViewport";
export * from "./dom/frozenScroll";
export * from "./dom/getStyle";

export * from "./function/debounce";
export * from "./function/throttle";

export * from "./moment/formatPassTime";
export * from "./moment/formatDate";
export * from "./moment/formatRemainTime";
export * from "./moment/isLeapYear";
export * from "./moment/isSameDay";
export * from "./moment/monthDays";
export * from "./moment/timeLeft";
export * from "./moment/timestampToTime";

export * from "./number/commafy"
export * from "./number/random"

export * from "./object/deepClone";
export * from "./object/isObjEmpty";
export * from './object/getTypeOf'

export * from "./regexp/isEmail";
export * from "./regexp/isIdCard";
export * from "./regexp/isPhoneNum";
export * from "./regexp/isUrl";

export * from "./string/digitUppercase";