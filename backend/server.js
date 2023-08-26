const express = require("express")
const dotenv = require("dotenv")
const restaurants = require("./routes/restaurants")

dotenv.config()
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  next()
})

// routes
app.use("/restaurants", restaurants)

// listen for request
app.listen(process.env.PORT, ()=> {
  console.log("Listening on port", process.env.PORT)
})

