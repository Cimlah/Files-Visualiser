const fs = require('fs')
const path = require('path')

const jsonStorage = 'paths-data.json'

module.exports = async function (currentPath) {
    if(fs.existsSync(currentPath)) {
        fs.readdir(currentPath, (err, files) => {
            if(err) {console.log(err)}
            else {
                fs.writeFile(jsonStorage, JSON.stringify(files), () => {console.log('File list saved')})
            }
        })
    }
    else {
        fs.writeFile(jsonStorage, JSON.stringify(["no-such-path"]), () => {console.log('No such path')})
    }
}