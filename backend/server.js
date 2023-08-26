const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
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

// connect db
mongoose.connect(process.env.MONGO_DB_URL)
  .then(()=>{
    // listen for request
    app.listen(process.env.PORT, ()=> {
      console.log("DB connected!")
      console.log("Listening on port", process.env.PORT)
    })
  })
  .catch((err)=>{
    console.error(`Error occured while connecting db: ${err}`)
  })


