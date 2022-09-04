const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.listen(port, (err) => {
    if(err) {
        console.log('Something went wrong\n' + err)
    }

    else {
        console.log('Server is running on port ' + port)
    }
})