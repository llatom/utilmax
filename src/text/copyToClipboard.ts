/**
 *
 * @desc   复制内容到剪切板
 * @param  {string} 
 */

 export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }