const express = require("express")
const users = require("./mockusers.json")

const port = 3005
const app = express()

app.get('/', (req, res) => {
    res.send("this is homepage")
})

app.get('/users', (req, res) => {
    return res.json(users)
})

app.listen(port, (req, res) => {
    console.log("Server is working");

})