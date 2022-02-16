let yes!: boolean

/**
 * 检查是否在 Node.js 中。
 * @returns 是否在 Node.js 中。
 */
const inNodeJS = () => {
  if (yes == null) {
    yes =
      typeof global === 'object' &&
      typeof global['process'] === 'object' &&
      typeof global['process']['versions'] === 'object' &&
      global['process']['versions']['node'] != null
  }
  return yes
}

export default inNodeJS
