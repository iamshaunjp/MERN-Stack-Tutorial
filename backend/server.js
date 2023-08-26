const express = require("express")
const dotenv = require("dotenv")

dotenv.config()
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  next()
})


app.get("/", (req, res)=>{
  res.status(200).json({status: true, msg: "Hello World"})
})

// listen for request
app.listen(process.env.PORT, ()=> {
  console.log("Listening on port", process.env.PORT)
})

