const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.send('this route is working properly');

})

app.listen(3001, () => {

    console.log('server is created and working properly ');

})