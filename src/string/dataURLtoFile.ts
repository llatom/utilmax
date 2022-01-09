/**
 * desc   将base64转换为文件
 * @param dataurl
 * @returns {File}
 */
export function dataURLtoFile(dataurl: string) {
    const block = dataurl.split(';');
    const b64Data = block[1].split(',')[1];
    const bstr = atob(b64Data);  // 将base64编码转为字符串
    let n = bstr.length;
    const u8arr = new Uint8Array(n); // 创建初始化为0的，包含length个元素的无符号整型数组
    const filename =  `${new Date().getTime()}.jpg`
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: 'image/jpeg',
    });
  }
  