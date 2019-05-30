const { decode } = require('./decodeBase64.js')

decode('gfwlist.txt')
  .then(fileName => {
    console.log(fileName)
  })

// console.log(decodeModule)

// const readline = require('readline');
// const path = require('path');
// const fs = require('fs');
// let filepath = path.join(__dirname, "gfwlist.txt")
// let input = fs.createReadStream(filepath)
// const rl = readline.createInterface({
//   input: input
// });
// rl.on('line', (line) => {
//   console.log(`Line from file: ${line}`);
// });
// rl.on('close', (line) => {
//   console.log("读取完毕！");
// });
