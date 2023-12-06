const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('json-web-token')

dotenv.config()

const app = express()

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
