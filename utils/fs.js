const fs = require('fs')

//sync mean it's a syncronous call
// fs.writeFileSync("./text.txt", "Salam Brother")


// Synchronous call
fs.writeFile("./text.txt", "salam nabeel", err => { })