const express = require("express")
const users = require("./mockusers.json")

const port = 3005
const app = express()

app.get('/', (req, res) => {
    res.send("this is homepage")
})

app.get('/users', (req, res) => {
    // join method in needed for proper orientation and rendering on webpage
    const html = `<ul>
    ${users.map(item => `<li>${item.firstName} ${item.lastName}</li>`).join('')} 
        </ul>
    `;
    res.send(html)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((item) => item.id === id)
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    return res.json(user)
})

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.listen(port, (req, res) => {
    console.log("Server is working");

})