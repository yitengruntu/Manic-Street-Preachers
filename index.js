const { downloadGFW } = require('./download')
const { decode } = require('./decodeBase64')
const { arrayFormat } = require('./arrayFormatOperator')

downloadGFW()
  .then(fileName => decode(fileName))
  .then(fileName => arrayFormat(fileName))
  .then(_ => console.log('完成'))
// console.log(decodeModule)
