const express = require("express")
const router = express.Router()

// get all restaurants
router.get("/", (req, res)=>{
  res.status(200).json({status: true, msg: "Hello Welcome restaurants"})
})

// get 1 restaurant
router.get("/:id", (req, res)=>{
  console.log(req.body)
res.status(200).json({status: true, msg: `${req.body}, ${req.params}`})
})

// create restaurant
router.post("/", (req, res) =>{
  res.status(200).json({status: true, msg:"Post success"})
})

// modify restaurant
router.patch("/:id", (req, res) =>{
  res.status(200).json({status: true, msg:"Modify success"})
})

// delete restaurantt
router.delete("/:id", (req, res) =>{
  res.status(200).json({status: true, msg:"Delete success"})
})

module.exports = router
