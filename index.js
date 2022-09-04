const express = require('express')
const path = require('path')
const prepareFileList = require('./my_modules/paths')

const app = express()
const port = 3000
const contentRoot = path.join(__dirname, 'content')

app.use(express.static(contentRoot))

app.get('/', function(req, res) {
    res.sendFile(path.join(contentRoot, 'html/index.html'))
})

app.get('/get-data', function(req, res) {
    prepareFileList(__dirname)
    res.sendFile(path.join(__dirname, 'paths-data.json'))
})

app.listen(port, (err) => {
    if(err) {
        console.log('Something went wrong\n' + err)
    }

    else {
        console.log('Server is running on port ' + port)
    }
})