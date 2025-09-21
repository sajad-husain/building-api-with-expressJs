const http = require("http")


const server = http.createServer((req, res) => {

    res.end("server is created and running")
})

server.listen(3001, (req, res) => console.log('server is working properly'))