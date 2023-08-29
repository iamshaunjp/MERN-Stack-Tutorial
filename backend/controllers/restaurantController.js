const Restaurant = require("../models/restaurantModel")
const mongoose = require("mongoose")

// get all
const getAllRestaurants = async(req, res)=>{
  const restaurants = await Restaurant.find({}).sort({createdAt: -1})

  if(!restaurants){
    return res.status(200).json({status:true, msg:"No Restaurants Found"})
  }
  res.status(200).json(restaurants)
}

// get one
const getRestaurant = async(req, res)=>{
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({mgs:"Faild to find this object"})
  }
  const restaurant = await Restaurant.findById({ _id:id })

  if(!restaurant){
    return res.status(404).json({stauts: false, msg:"Restaurant Data Not Found"})
  }
  res.status(200).json({status: true, msg: restaurant})
}

// create new
const createRestaurant = async(req, res) =>{
  const {title, cuisine} = req.body
  const emptyFields = []
  
  // empty handling
  if(!title){
    emptyFields.push("title")
  }
  if(!cuisine){
    emptyFields.push("cuisine")
  }
  if(emptyFields.length > 0){
    return res.status(400).json({error: "Please fill in all the field.", emptyFields})
  }

  try{
    const restaurant = await Restaurant.create({ title, cuisine })
    res.status(200).json({status: true, msg: restaurant})
  }
  catch(err){
    return res.status(500).json({status: false, msg:`Post Create failed: ${err}`})
  }
}

// edit
const editRestaurant = async (req, res) =>{

  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({mgs:"Faild to find this object"})
  }
  const restaurant = await Restaurant.findOneAndUpdate({ _id: id },{
    ...req.body
  })

  if(!restaurant){
    return res.status(404).json({stauts: false, msg:"Restaurant Data Not Found"})
  }
  res.status(200).json(restaurant)
}


// delete
const deleteRestaurant = async(req, res) =>{
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({mgs:"Faild to find this object"})
  }
  const restaurant = await Restaurant.findOneAndDelete({ _id: id })

  if(!restaurant){
    return res.status(404).json({stauts: false, msg:"Restaurant Data Not Found"})
  }
  res.status(200).json(restaurant)
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  editRestaurant ,
  deleteRestaurant
}
