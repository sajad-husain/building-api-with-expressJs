const fs = require('fs')


// Real - World Scenario in Node.js Backend
// A blocking HTTP server reads a file synchronously, causing other requests to wait until completion.

// A non - blocking server reads files asynchronously, allowing other requests to proceed while waiting for the file read to complete.


// Blocking
const result = fs.readFileSync('./contact.txt', "utf-8")
console.log(result);
