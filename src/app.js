const express = require("express")
require("./db/mongoose")
const userRouter = require("./routes/userRoutes")
const authRouter = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(authRouter)

module.exports = app
