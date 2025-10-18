const express = require("express")
const fs = require('fs')
const mongoose = require('mongoose')

const users = require("./mockusers.json")
const { type } = require("os")

const port = 3005
const app = express()

//DB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/users-app-1')
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log("MongoDB error: ", err))

//Mongoose schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
})

const User = mongoose.model("user", userSchema)

//Middlewares
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
    const id = Number(req.params.id)
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
    const id = Number(req.params.id)
    const user = users.find(item => item.id === id)
    if (user) {
        const body = req.body
        users.push({ ...body, user })
        fs.writeFile("./mockusers.json", JSON.stringify(users), (err, data) => {
            if (err) return res.status(500).json({ status: "failed" })
        })
        return res.json({ success: "success", user })
    } else {
        return res.status(404).json({ error: "user not found" })
    }
})

// delete request
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id
    return res.json({ status: `user with id ${userId} deleted.` })
})

//json data for all users
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.listen(port, (req, res) => {
    console.log("Server is working");

})