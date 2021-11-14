/**
 * 检查是否在 [Taro 3](https://taro.js.org/) 中。
 * @return {boolean} - 是否在 [Taro 3](https://taro.js.org/) 中
 */
export function inTaro(): boolean {
  return typeof navigator !== 'undefined' && navigator.product === 'Taro'
}
