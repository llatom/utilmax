/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
import { inAndroid } from "./inAndroid";
import { inBrowser } from "./inBrowser";
import { inIOS } from "./inIOS";
import { inNodeJS } from "./inNodeJS";
import { inTaro } from "./inTaro";
import { inWechatWebView } from "./inWechatWebView";

export interface GetEnvironmentResult {
  /** 浏览器 */
  readonly browser: boolean;
  /** 微信 WebView */
  readonly wechatWebView: boolean;
  /** iOS */
  readonly ios: boolean;
  /** 安卓 */
  readonly android: boolean;
  /** Node.js */
  readonly nodejs: boolean;
  /** Taro 3 */
  readonly taro: boolean;
}

let env: GetEnvironmentResult | undefined;

/**
 * 获取运行环境信息。
 *
 * @returns 返回运行环境信息
 */
export function getEnvironment(): GetEnvironmentResult {
  if (env == null) {
    env = {
      browser: inBrowser(),
      wechatWebView: inWechatWebView(),
      ios: inIOS(),
      android: inAndroid(),
      nodejs: inNodeJS(),
      taro: inTaro(),
    };
  }
  return env;
}
