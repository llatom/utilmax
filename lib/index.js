var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/array/arrayEqual.ts
var require_arrayEqual = __commonJS({
  "src/array/arrayEqual.ts"(exports, module) {
    function arrayEqual(arr1, arr2) {
      if (arr1 === arr2)
        return true;
      if (arr1.length != arr2.length)
        return false;
      for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i])
          return false;
      }
      return true;
    }
    module.exports = arrayEqual;
  }
});

// src/class/hasClass.ts
var require_hasClass = __commonJS({
  "src/class/hasClass.ts"(exports, module) {
    function hasClass(ele, cls) {
      return new RegExp("(\\s|^)" + cls + "(\\s|$)").test(ele.className);
    }
    module.exports = hasClass;
  }
});

// src/class/addClass.ts
var require_addClass = __commonJS({
  "src/class/addClass.ts"(exports, module) {
    var hasClass = require_hasClass();
    function addClass(ele, cls) {
      if (!hasClass(ele, cls)) {
        ele.className += " " + cls;
      }
    }
    module.exports = addClass;
  }
});

// src/class/removeClass.ts
var require_removeClass = __commonJS({
  "src/class/removeClass.ts"(exports, module) {
    var hasClass = require_hasClass();
    function removeClass(ele, cls) {
      if (hasClass(ele, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
      }
    }
    module.exports = removeClass;
  }
});

// src/cookie/getCookie.ts
var require_getCookie = __commonJS({
  "src/cookie/getCookie.ts"(exports, module) {
    function getCookie(name) {
      var arr = document.cookie.replace(/\s/g, "").split(";");
      for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split("=");
        if (tempArr[0] == name) {
          return decodeURIComponent(tempArr[1]);
        }
      }
      return "";
    }
    module.exports = getCookie;
  }
});

// src/cookie/setCookie.ts
var require_setCookie = __commonJS({
  "src/cookie/setCookie.ts"(exports, module) {
    function setCookie(name, value, days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      document.cookie = name + "=" + value + ";expires=" + date;
    }
    module.exports = setCookie;
  }
});

// src/cookie/removeCookie.ts
var require_removeCookie = __commonJS({
  "src/cookie/removeCookie.ts"(exports, module) {
    var setCookie = require_setCookie();
    function removeCookie(name) {
      setCookie(name, "1", -1);
    }
    module.exports = removeCookie;
  }
});

// src/device/getOS.ts
var require_getOS = __commonJS({
  "src/device/getOS.ts"(exports, module) {
    function getOS() {
      var userAgent = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "";
      var vendor = "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || "";
      var appVersion = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
      if (/mac/i.test(appVersion))
        return "MacOSX";
      if (/win/i.test(appVersion))
        return "windows";
      if (/linux/i.test(appVersion))
        return "linux";
      if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))
        "ios";
      if (/android/i.test(userAgent))
        return "android";
      if (/win/i.test(appVersion) && /phone/i.test(userAgent))
        return "windowsPhone";
    }
    module.exports = getOS;
  }
});

// src/device/getExplore.ts
var require_getExplore = __commonJS({
  "src/device/getExplore.ts"(exports, module) {
    function getExplore() {
      var sys = {}, ua = navigator.userAgent.toLowerCase(), s;
      (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
      if (sys.ie)
        return "IE: " + sys.ie;
      if (sys.edge)
        return "EDGE: " + sys.edge;
      if (sys.firefox)
        return "Firefox: " + sys.firefox;
      if (sys.chrome)
        return "Chrome: " + sys.chrome;
      if (sys.opera)
        return "Opera: " + sys.opera;
      if (sys.safari)
        return "Safari: " + sys.safari;
      return "Unkonwn";
    }
    module.exports = getExplore;
  }
});

// src/dom/getScrollTop.ts
var require_getScrollTop = __commonJS({
  "src/dom/getScrollTop.ts"(exports, module) {
    function getScrollTop() {
      return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    }
    module.exports = getScrollTop;
  }
});

// src/dom/offset.ts
var require_offset = __commonJS({
  "src/dom/offset.ts"(exports, module) {
    function offset(ele) {
      var pos = {
        left: 0,
        top: 0
      };
      while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
      }
      ;
      return pos;
    }
    module.exports = offset;
  }
});

// src/dom/setScrollTop.ts
var require_setScrollTop = __commonJS({
  "src/dom/setScrollTop.ts"(exports, module) {
    function setScrollTop(value) {
      window.scrollTo(0, value);
      return value;
    }
    module.exports = setScrollTop;
  }
});

// src/dom/scrollTo.ts
var require_scrollTo = __commonJS({
  "src/dom/scrollTo.ts"(exports, module) {
    var getScrollTop = require_getScrollTop();
    var setScrollTop = require_setScrollTop();
    var requestAnimFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60);
      };
    }();
    function scrollTo(to, duration) {
      if (duration < 0) {
        setScrollTop(to);
        return;
      }
      var diff = to - getScrollTop();
      if (diff === 0)
        return;
      var step = diff / duration * 10;
      requestAnimationFrame(function() {
        if (Math.abs(step) > Math.abs(diff)) {
          setScrollTop(getScrollTop() + diff);
          return;
        }
        setScrollTop(getScrollTop() + step);
        if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
          return;
        }
        scrollTo(to, duration - 16);
      });
    }
    module.exports = scrollTo;
  }
});

// src/dom/windowResize.ts
var require_windowResize = __commonJS({
  "src/dom/windowResize.ts"(exports, module) {
    function windowResize(downCb, upCb) {
      var clientHeight = window.innerHeight;
      downCb = typeof downCb === "function" ? downCb : function() {
      };
      upCb = typeof upCb === "function" ? upCb : function() {
      };
      window.addEventListener("resize", () => {
        var height = window.innerHeight;
        if (height === clientHeight) {
          downCb();
        }
        if (height < clientHeight) {
          upCb();
        }
      });
    }
    module.exports = windowResize;
  }
});

// src/function/throttle.ts
var require_throttle = __commonJS({
  "src/function/throttle.ts"(exports, module) {
    module.exports = function throttle(delay, noTrailing, callback, debounceMode) {
      var timeoutID;
      var lastExec = 0;
      if (typeof noTrailing !== "boolean") {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = void 0;
      }
      function wrapper() {
        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;
        function exec() {
          lastExec = Number(new Date());
          callback.apply(self, args);
        }
        function clear() {
          timeoutID = void 0;
        }
        if (debounceMode && !timeoutID) {
          exec();
        }
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
        if (debounceMode === void 0 && elapsed > delay) {
          exec();
        } else if (noTrailing !== true) {
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
        }
      }
      return wrapper;
    };
  }
});

// src/function/debounce.ts
var require_debounce = __commonJS({
  "src/function/debounce.ts"(exports, module) {
    var throttle = require_throttle();
    function debounce(delay, atBegin, callback) {
      return callback === void 0 ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
    }
    module.exports = debounce;
  }
});

// src/keycode/getKeyName.ts
var require_getKeyName = __commonJS({
  "src/keycode/getKeyName.ts"(exports, module) {
    var keyCodeMap = {
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "Caps Lock",
      27: "Escape",
      32: "Space",
      33: "Page Up",
      34: "Page Down",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      42: "Print Screen",
      45: "Insert",
      46: "Delete",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z",
      91: "Windows",
      93: "Right Click",
      96: "Numpad 0",
      97: "Numpad 1",
      98: "Numpad 2",
      99: "Numpad 3",
      100: "Numpad 4",
      101: "Numpad 5",
      102: "Numpad 6",
      103: "Numpad 7",
      104: "Numpad 8",
      105: "Numpad 9",
      106: "Numpad *",
      107: "Numpad +",
      109: "Numpad -",
      110: "Numpad .",
      111: "Numpad /",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "Num Lock",
      145: "Scroll Lock",
      182: "My Computer",
      183: "My Calculator",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    };
    function getKeyName(keycode) {
      if (keyCodeMap[keycode]) {
        return keyCodeMap[keycode];
      } else {
        console.log("Unknow Key(Key Code:" + keycode + ")");
        return "";
      }
    }
    module.exports = getKeyName;
  }
});

// src/object/deepClone.ts
var require_deepClone = __commonJS({
  "src/object/deepClone.ts"(exports, module) {
    function deepClone(values) {
      var copy;
      if (values == null || typeof values != "object")
        return values;
      if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
      }
      if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
        }
        return copy;
      }
      if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
          if (values.hasOwnProperty(attr))
            copy[attr] = deepClone(values[attr]);
        }
        return copy;
      }
      throw new Error("Unable to copy values! Its type isn't supported.");
    }
    module.exports = deepClone;
  }
});

// src/object/isEmptyObject.ts
var require_isEmptyObject = __commonJS({
  "src/object/isEmptyObject.ts"(exports, module) {
    function isEmptyObject(obj) {
      if (!obj || typeof obj !== "object" || Array.isArray(obj))
        return false;
      return !Object.keys(obj).length;
    }
    module.exports = isEmptyObject;
  }
});

// src/random/randomColor.ts
var require_randomColor = __commonJS({
  "src/random/randomColor.ts"(exports, module) {
    function randomColor() {
      return "#" + ("00000" + (Math.random() * 16777216 << 0).toString(16)).slice(-6);
    }
    module.exports = randomColor;
  }
});

// src/random/randomNum.ts
var require_randomNum = __commonJS({
  "src/random/randomNum.ts"(exports, module) {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    module.exports = randomNum;
  }
});

// src/regexp/isEmail.ts
var require_isEmail = __commonJS({
  "src/regexp/isEmail.ts"(exports, module) {
    function isEmail(str) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    }
    module.exports = isEmail;
  }
});

// src/regexp/isIdCard.ts
var require_isIdCard = __commonJS({
  "src/regexp/isIdCard.ts"(exports, module) {
    function isIdCard(str) {
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
    }
    module.exports = isIdCard;
  }
});

// src/regexp/isPhoneNum.ts
var require_isPhoneNum = __commonJS({
  "src/regexp/isPhoneNum.ts"(exports, module) {
    function isPhoneNum(str) {
      return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
    }
    module.exports = isPhoneNum;
  }
});

// src/regexp/isUrl.ts
var require_isUrl = __commonJS({
  "src/regexp/isUrl.ts"(exports, module) {
    function isUrl(str) {
      return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
    }
    module.exports = isUrl;
  }
});

// src/string/digitUppercase.ts
var require_digitUppercase = __commonJS({
  "src/string/digitUppercase.ts"(exports, module) {
    function digitUppercase(n) {
      var fraction = ["\u89D2", "\u5206"];
      var digit = [
        "\u96F6",
        "\u58F9",
        "\u8D30",
        "\u53C1",
        "\u8086",
        "\u4F0D",
        "\u9646",
        "\u67D2",
        "\u634C",
        "\u7396"
      ];
      var unit = [
        ["\u5143", "\u4E07", "\u4EBF"],
        ["", "\u62FE", "\u4F70", "\u4EDF"]
      ];
      var head = n < 0 ? "\u6B20" : "";
      n = Math.abs(n);
      var s = "";
      for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
      }
      s = s || "\u6574";
      n = Math.floor(n);
      for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = "";
        for (var j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, "").replace(/^$/, "\u96F6") + unit[0][i] + s;
      }
      return head + s.replace(/(零.)*零元/, "\u5143").replace(/(零.)+/g, "\u96F6").replace(/^整$/, "\u96F6\u5143\u6574");
    }
    module.exports = digitUppercase;
  }
});

// src/support/isSupportWebP.ts
var require_isSupportWebP = __commonJS({
  "src/support/isSupportWebP.ts"(exports, module) {
    function isSupportWebP() {
      return !![].map && document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0;
    }
    module.exports = isSupportWebP;
  }
});

// src/time/formatPassTime.ts
var require_formatPassTime = __commonJS({
  "src/time/formatPassTime.ts"(exports, module) {
    function formatPassTime(startTime) {
      var currentTime = Date.parse(new Date()), time = currentTime - startTime, day = parseInt(time / (1e3 * 60 * 60 * 24)), hour = parseInt(time / (1e3 * 60 * 60)), min = parseInt(time / (1e3 * 60)), month = parseInt(day / 30), year = parseInt(month / 12);
      if (year)
        return year + "\u5E74\u524D";
      if (month)
        return month + "\u4E2A\u6708\u524D";
      if (day)
        return day + "\u5929\u524D";
      if (hour)
        return hour + "\u5C0F\u65F6\u524D";
      if (min)
        return min + "\u5206\u949F\u524D";
      else
        return "\u521A\u521A";
    }
    module.exports = formatPassTime;
  }
});

// src/time/formatRemainTime.ts
var require_formatRemainTime = __commonJS({
  "src/time/formatRemainTime.ts"(exports, module) {
    function formatRemainTime(endTime) {
      var startDate = new Date();
      var endDate = new Date(endTime);
      var t = endDate.getTime() - startDate.getTime();
      var d = 0, h = 0, m = 0, s = 0;
      if (t >= 0) {
        d = Math.floor(t / 1e3 / 3600 / 24);
        h = Math.floor(t / 1e3 / 60 / 60 % 24);
        m = Math.floor(t / 1e3 / 60 % 60);
        s = Math.floor(t / 1e3 % 60);
      }
      return d + "\u5929 " + h + "\u5C0F\u65F6 " + m + "\u5206\u949F " + s + "\u79D2";
    }
    module.exports = formatRemainTime;
  }
});

// src/url/parseQueryString.ts
var require_parseQueryString = __commonJS({
  "src/url/parseQueryString.ts"(exports, module) {
    function parseQueryString(url) {
      url = url == null ? window.location.href : url;
      var search = url.substring(url.lastIndexOf("?") + 1);
      if (!search) {
        return {};
      }
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    module.exports = parseQueryString;
  }
});

// src/url/stringfyQueryString.ts
var require_stringfyQueryString = __commonJS({
  "src/url/stringfyQueryString.ts"(exports, module) {
    function stringfyQueryString(obj) {
      if (!obj)
        return "";
      var pairs = [];
      for (var key in obj) {
        var value = obj[key];
        if (value instanceof Array) {
          for (var i = 0; i < value.length; ++i) {
            pairs.push(encodeURIComponent(key + "[" + i + "]") + "=" + encodeURIComponent(value[i]));
          }
          continue;
        }
        pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
      }
      return pairs.join("&");
    }
    module.exports = stringfyQueryString;
  }
});

// src/index.ts
var require_src = __commonJS({
  "src/index.ts"(exports, module) {
    var arrayEqual = require_arrayEqual();
    var addClass = require_addClass();
    var hasClass = require_hasClass();
    var removeClass = require_removeClass();
    var getCookie = require_getCookie();
    var removeCookie = require_removeCookie();
    var setCookie = require_setCookie();
    var getOS = require_getOS();
    var getExplore = require_getExplore();
    var getScrollTop = require_getScrollTop();
    var offset = require_offset();
    var domScrollTo = require_scrollTo();
    var setScrollTop = require_setScrollTop();
    var windowResize = require_windowResize();
    var debounce = require_debounce();
    var throttle = require_throttle();
    var getKeyName = require_getKeyName();
    var deepClone = require_deepClone();
    var isEmptyObject = require_isEmptyObject();
    var randomColor = require_randomColor();
    var randomNum = require_randomNum();
    var isEmail = require_isEmail();
    var isIdCard = require_isIdCard();
    var isPhoneNum = require_isPhoneNum();
    var isUrl = require_isUrl();
    var digitUppercase = require_digitUppercase();
    var isSupportWebP = require_isSupportWebP();
    var formatPassTime = require_formatPassTime();
    var formatRemainTime = require_formatRemainTime();
    var parseQueryString = require_parseQueryString();
    var stringfyQueryString = require_stringfyQueryString();
    module.exports = {
      arrayEqual,
      addClass,
      hasClass,
      removeClass,
      getCookie,
      removeCookie,
      setCookie,
      getOS,
      getExplore,
      getScrollTop,
      offset,
      domScrollTo,
      setScrollTop,
      windowResize,
      debounce,
      throttle,
      getKeyName,
      deepClone,
      isEmptyObject,
      randomColor,
      randomNum,
      isEmail,
      isIdCard,
      isPhoneNum,
      isUrl,
      digitUppercase,
      isSupportWebP,
      formatPassTime,
      formatRemainTime,
      parseQueryString,
      stringfyQueryString
    };
  }
});
export default require_src();
