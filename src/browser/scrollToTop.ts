/**
 *
 * @desc
 * 平滑滚动到页面顶部。
 * 使用document.documentElement.scrollTop或document.body.scrollTop从顶部获取距离。从顶部的距离的一小部分滚动。使用window.requestAnimationFrame()对滚动进行动画处理。
 */

  
 const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
    }
    };
 
export default scrollToTop
  