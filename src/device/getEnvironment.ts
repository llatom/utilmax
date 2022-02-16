/**
 *
 * @desc 获取操作系统类型
 * @return {string} - 操作系统类型
 */
import { default as inAndroid } from "./inAndroid";
import { default as  inBrowser } from "./inBrowser";
import { default as  inIOS } from "./inIOS";
import { default as  inNodeJS } from "./inNodeJS";
import { default as  inTaro } from "./inTaro";
import { default as  inWechatWebView } from "./inWechatWebView";

let env

/**
 * 获取运行环境信息。
 * @return {GetEnvironmentResult} - 运行环境信息
 */
const  getEnvironment = () => {
  if (env == null) {
    env = inBrowser() ? 'browser' : inNodeJS() ? 'node' : inIOS() ? 'ios' : inAndroid() ? 'android' : inTaro() ? 'taro' : inWechatWebView() ? 'wechatWebView' : 'unknown';
  }
  return env;
}

export default getEnvironment
