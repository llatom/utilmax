import { default as inBrowser } from './inBrowser'

let yes!: boolean

/**
 * 检查是否在 iOS 设备中。
 * @returns {boolean}
 */

const inIOS = (): boolean => {
  if (yes == null) {
      yes =
        inBrowser() &&
        typeof window.navigator === 'object' &&
        /iPad|iPhone|iPod/i.test(window.navigator.platform || '')
  }
  return yes
}

export default inIOS
