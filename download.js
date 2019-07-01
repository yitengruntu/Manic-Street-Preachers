const request = require('request')
const fs = require('fs')

/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
const downloadFile = (uri,filename,callback) => {
  const stream = fs.createWriteStream(filename)
  request(uri).pipe(stream).on('close', callback)
}

const downloadGFW = () => {
  return new Promise((resolve, reject) => {
    const fileUrl  = 'https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt'

    const filename = 'gfwlist.txt'
    downloadFile(fileUrl, filename, () => {
      console.log('下载成功')
      resolve(filename)
    })
  })
}

module.exports = {
  downloadGFW
}
