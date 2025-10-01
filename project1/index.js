const express = require("express")

const port = 3005
const app = express()

app.get('/', (req, res) => {
    res.send("this is homepage")
})

app.listen(port, (req, res) => {
    console.log("Server is working");

})