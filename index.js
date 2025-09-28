const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/') return res.end("Homepage of cusotm website")
})

server.listen(3001, (req, res) => console.log('server is working properly'))