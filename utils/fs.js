const fs = require('fs')

//sync mean it's a syncronous call
// fs.writeFileSync("./text.txt", "Salam Brother")


// Asynchronous call
// fs.writeFile("./text.txt", "salam nabeel", err => { })

// Async call which reading this file utf-8 encoding, it encodes based on it's type
// const readThisFile = fs.readFileSync("./text.txt", "utf-8")
// console.log(readThisFile)f

//sync call which reads data from file
// main differece is in sync and async call is in sync call we need a callback function cz it does not return anything
fs.readFile("./text.txt", "utf-8", (err, result) => { })
