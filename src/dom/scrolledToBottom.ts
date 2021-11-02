/**
 *
 * @desc   是否滚动到页面底部
 * @return {boolean}
 */
 export function scrolledToBottom() {
    document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
}