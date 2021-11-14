/**
 *
 * @desc   复制内容到剪切板
 * @param  {string} content - 需要复制的内容
 * @return {boolean} - 是否复制成功
 */

 export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }