const express = require("express")
const fs = require('fs')

const users = require("./mockusers.json")

const port = 3005
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("this is homepage")
})

// getting all usernames
app.get('/users', (req, res) => {
    // join method in needed for proper orientation and rendering on webpage
    const html = `<ul>
    ${users.map(item => `<li>${item.firstName} ${item.lastName}</li>`).join('')} 
        </ul>
    `;
    res.send(html)
})

// finding user using it's id
app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find((item) => item.id === id)
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    return res.json(user)
})

// post request
app.post("/api/users", (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./mockusers.json", JSON.stringify(users), (err, data) => {
        if (err) return res.status(505).json({ err: "failed to make post request" })
    })
    return res.json({ status: "success", id: users.length })
})

// patch request
app.patch("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(item => item.id === id)
    if (user) {
        const body = req.body
        users.push({ ...body, user })
        fs.writeFile("./mockusers.json", JSON.stringify(users), (err, data) => {
            if (err) return res.json({ status: "failed" })
        })
        return res.json({ success: "success", user })
    } else {


    }
})

// delete request
app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "deletion is pending" })
})

//json data for all users
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.listen(port, (req, res) => {
    console.log("Server is working");

})