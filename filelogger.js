const http = require("http")
const fs = require("fs")
const url = require("url")


const server = http.createServer((req, res) => {
    let counter = 1
    const details = `${Date.now()} ${req.url} log created ${counter + 1} times\n`
    const myUrls = url.parse(req.url)
    console.log(myUrls);



    fs.appendFile("./logdetails.txt", details, "utf-8", (err, result) => {
        console.log(result);
    })

    if (req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
        res.end()
    }

    if (req.url === '/favicon.ico') {
        res.end()
    }

    switch (req.url) {
        case '/':
            res.end("This is Hompepage")
            break
        case '/about':
            res.end("I'm sajjad hussain")
            break
        default: res.end("EROOR 404 TRY ANOTHER ROUTE")

    }
})

server.listen(3001, (req, res) => console.log('server is working properly'))