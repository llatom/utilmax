/**
 * 
 * @desc 获取浏览器类型和版本
 * @return {String} 
 */
 export function getExplore() : string {
    const userAgent = navigator.userAgent;
    let version;
    if(/opera/i.test(userAgent) || /OPR/i.test(userAgent)){
        version = getVersion(userAgent, "OPR/(\\d+\\.+\\d+)");
        return 'Opera' + version;
    }else if(/compatible/i.test(userAgent) && /MSIE/i.test(userAgent)){
        version = getVersion(userAgent, "MSIE (\\d+\\.+\\d+)");
        return 'IE' + version;
    }else if(/Edge/i.test(userAgent)){
        version = getVersion(userAgent, "Edge/(\\d+\\.+\\d+)");
        return 'Edge' + version;
    }else if(/Firefox/i.test(userAgent)){
        version = getVersion(userAgent, "Firefox/(\\d+\\.+\\d+)");
        return 'Firefox' + version;
    }else if(/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)){
        version = getVersion(userAgent, "Safari/(\\d+\\.+\\d+)");
        return 'Safari' + version;
    }else if(/Chrome/i.test(userAgent) && /Safari/i.test(userAgent)){
        version = getVersion(userAgent, "Chrome/(\\d+\\.+\\d+)");
        return 'Chrome' + version;
    }else{
        return ''
    }
}

function getVersion(userAgent:string, reg:string) {
    const reBrowser = new RegExp(reg);
    reBrowser.test(userAgent);
    return parseFloat(RegExp['$1']);
}