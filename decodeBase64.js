const fs = require('fs')
const path = require('path')

const decode = fileName => {
  return new Promise((resolve, reject) => {
    // 读取文件绝对地址
    const filepath = path.join(__dirname, fileName)
    fs.readFile(filepath, (err, data) => {
      // base64 解码
      const decodeBuffer = new Buffer(data.toString(), 'base64')
      const decodeString = decodeBuffer.toString('utf8')
      // 写入新文件
      fs.writeFileSync(`decode_${fileName}`, decodeString)
      // 弹出新文件名
      resolve(`decode_${fileName}`)
    })
  })

}

module.exports = {
  decode
}



// console.log(input)
