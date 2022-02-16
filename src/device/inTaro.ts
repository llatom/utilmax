/**
 * 检查是否在 [Taro 3](https://taro.js.org/) 中。
 * @return {boolean} - 是否在 [Taro 3](https://taro.js.org/) 中
 */
const inTaro = () => {
  return typeof navigator !== 'undefined' && navigator.product === 'Taro'
}

export default inTaro
