/**
 *
 * @desc
 * 将 JSON 对象写入文件。
 * 使用fs.writeFile()、模板文本和JSON.stringify()将json对象写入.json文件。
 * @param {Object} obj
 * @param {String} filename
 */

 const fs = require('fs');
 const JSONToFile = (obj, filename) => fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2))
  
  export default JSONToFile;
  