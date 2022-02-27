/**
 *
 * @desc
 * Creates a debounced function that delays invoking the provided function until at least ms milliseconds have elapsed since its last invocation.
 * Each time the debounced function is invoked, clear the current pending timeout with clearTimeout(). Use setTimeout() to create a new timeout that delays invoking the function until at least ms milliseconds have elapsed.
 * Use Function.prototype.apply() to apply the this context to the function and provide the necessary arguments.
 * Omit the second argument, ms, to set the timeout at a default of 0 ms.
 * @param {Function} fn
 * @param {Number} ms
 */

  const debounce = (fn: { apply: (arg0: any, arg1: any) => void }, t: number) => {
    let timeId: any = null
    const delay = t || 500
    return function (this: any, ...args: any) {
      if (timeId) {
        clearTimeout(timeId)
      }
      timeId = setTimeout(() => {
        timeId = null
        fn.apply(this, args)
      }, delay)
    }
  }

export default debounce
  