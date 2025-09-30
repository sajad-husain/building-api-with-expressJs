const http = require("http")
const fs = require("fs")
const url = require("url")
const exrpess = require("express")

const app = exrpess()

app.get('/', (req, res) => {
    return res.send("this is homepage from express app")
})

app.get('/about', (req, res) => {
    return res.send("hello from about page")
})

// const server = http.createServer(app)
// server.listen(3001, (req, res) => console.log('server is working properly'))
app.listen(3001, (req, res) => {
    console.log("Server is working properly");

})