const { decode } = require('./decodeBase64.js')
const { arrayFormat } = require('./arrayFormatOperator')

decode('gfwlist.txt')
  .then(fileName => arrayFormat(fileName))

// console.log(decodeModule)
