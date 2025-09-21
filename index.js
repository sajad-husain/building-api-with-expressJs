const http = require("http")
const fs = require("fs")


const server = http.createServer((req, res) => {
    let counter = 1
    const details = `${Date.now()} ${req.url} log created ${counter + 1} times\n`
    fs.appendFile("./logdetails.txt", details, "utf-8", (err, result) => {
        console.log(result);
        switch (req.url) {
            case '/': res.end("This is Hompepage")
                break
            case '/about': res.end("I'm sajjad hussain")
                break

        }
    })
    res.end("server is created and running")
})

server.listen(3001, (req, res) => console.log('server is working properly'))