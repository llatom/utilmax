let yes!: boolean

/**
 * 检查是否在浏览器环境中。
 * @returns 是否在浏览器环境中。
 */
export function inBrowser(): boolean {
  if (yes == null) {
    yes =
      typeof window === 'object' &&
      typeof window.document === 'object' &&
      window.document.nodeType === 9
  }
  return yes
}
