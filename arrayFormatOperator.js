const readline = require('readline')
const path = require('path')
const fs = require('fs')
const { header, footer } = require('./fileFixedFormat')

const arrayFormat = fileName => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, fileName)
    const input = fs.createReadStream(filepath)
    const rl = readline.createInterface({ input })
    fs.writeFileSync(`gfwlist.js`, header)
    rl.on('line', line => {
      const pureLine = line.trim()
      if (pureLine && !pureLine.includes('!') && !pureLine.includes('[AutoProxy')) {
        // console.log(`Line from file: ${pureLine}`)
        fs.appendFileSync(`gfwlist.js`, `"${pureLine}",\n`)
      }
    })
    rl.on('close', (line) => {
      fs.appendFileSync(`gfwlist.js`, footer)
    })
    resolve()
  })
}

module.exports = {
  arrayFormat
}
