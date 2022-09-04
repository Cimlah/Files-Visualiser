const fs = require('fs')
const path = require('path')

const jsonStorage = 'paths-data.json'

module.exports = function (currentPath) {
    let files = fs.readdirSync(currentPath)
    fs.writeFileSync(jsonStorage, JSON.stringify(files))
    console.log('File list saved')
}