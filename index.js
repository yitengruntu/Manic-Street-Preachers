const { downloadGFW } = require('./download')
const { decode } = require('./decodeBase64')
const { arrayFormat } = require('./arrayFormatOperator')

downloadGFW()
  .then(fileName => decode(fileName))
  .then(fileName => arrayFormat(fileName))

// console.log(decodeModule)
