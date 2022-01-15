/**
 * desc   将base64转换为文件
 * @param dataurl
 * @returns {File}
 */

export function dataURLtoFile(dataurl: string) {
  const block = dataurl.split(';')
  const b64Data = block[1].split(',')[1]
  const bstr = window.atob(b64Data) // 将base64编码转为字符串
  let n = bstr.length
  const u8arr = new Uint8Array(n) // 创建初始化为0的，包含length个元素的无符号整型数组
  const filename = `${new Date().getTime()}.png`
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {
    type: 'image/png',
  })
}


/**
 * desc html2canvas生成高清晰度图片
 * @param domid
 * @param domscale
 * @param scale
 */
export const createCanvas = ({ id, scale = 2, c_scale = 1 }) => {
  return new Promise((resolve) => {
    import('html2canvas').then(({ default: html2canvas }) => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      document.body.scrollLeft = 0
      document.documentElement.scrollLeft = 0
      const copyDom = document.getElementById(id) as HTMLElement
      const width = copyDom.offsetWidth
      const height = copyDom.offsetHeight
      const canvas = document.createElement('canvas')
      canvas.width = width * scale
      canvas.height = height * scale
      const content = canvas.getContext('2d') as CanvasRenderingContext2D
      content.scale(scale, scale)
      const rect = copyDom.getBoundingClientRect()
      content.translate((rect.left - (width - rect.width) / 2) / 2, (rect.top - (height - rect.height) / 2) / 2)
      html2canvas(copyDom, {
        scale: c_scale,
        width,
        height,
        canvas,
        allowTaint: true,
        logging: process.env.NODE_ENV === 'development',
        backgroundColor: null,
        useCORS: true,
        imageTimeout: 1000 * 30,
        x: 0,
        y: window.pageYOffset,
      }).then((canvas) => {
        const imgFile = dataURLtoFile(canvas.toDataURL('image/png'))
        const imgSrc = URL.createObjectURL(imgFile)
        resolve(imgSrc)
      })
    })
  })
}
