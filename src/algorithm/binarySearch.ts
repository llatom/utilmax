/**
 *
 * @desc
 * 使用二进制搜索算法查找排序数组中给定元素的索引。
 * 声明左边和右边的搜索边界 l 和 r，分别初始化为0和数组的长度。
 * 使用 while 循环重复缩小搜索子数组的范围，使用 Math.floor ()将其切成两半。
 * 如果找到，则返回元素的索引，否则返回 -1。
 * 注意: 不考虑数组中的重复值。
 * @param {Array} arr
 * @return {Number}
 */

 const binarySearch = (arr, item) => {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const guess = arr[mid];
      if (guess === item) return mid;
      if (guess > item) r = mid - 1;
      else l = mid + 1;
    }
    return -1;
  };
  
  
  export default binarySearch;
  