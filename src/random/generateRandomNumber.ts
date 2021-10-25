/**
 * 
 * @desc 生成指定长度[length]的随机数
 * @param  {Number} length 
 * @return {Number} 
 */
export function generateRandomNumber(length: number): string {
    return Array(length)
      .fill(1)
      .reduce((acc, number) => `${acc}${Math.random().toString().substr(2, number)}`, '');
  }