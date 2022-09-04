const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello Express!');
});

app.listen(port, (err) => {
    if(err) {
        console.log('Something went wrong\n' + err);
    }

    else {
        console.log('Server is running on port ' + port);
    }
});