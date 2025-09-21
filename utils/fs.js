const fs = require('fs')


// Real - World Scenario in Node.js Backend
// A blocking HTTP server reads a file synchronously, causing other requests to wait until completion.

// A non - blocking server reads files asynchronously, allowing other requests to proceed while waiting for the file read to complete.


console.log("before blocking");

// Blocking
// const result = fs.readFileSync('./contact.txt', "utf-8")

// Non Blocking
fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);

    } else {
        console.log(result);

    }
})
console.log("after blocking");  