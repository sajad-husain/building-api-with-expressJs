const express = require('express')

const app = express()

app.use('/', (req, res) => {
    console.log('this is home address');

})

app.listen(3001, (req, res) => {
    console.log('server is created and working properly ');

})