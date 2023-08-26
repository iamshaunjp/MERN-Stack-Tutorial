const Restaurant = require("../models/restaurantModel")
const mongoose = require("mongoose")

const getAllRestaurants = async(req, res)=>{
  const restaurants = await Restaurant.find({}).sort({createdAt: -1})

  if(!restaurants){
    return res.status(200).json({status:true, msg:"No Restaurants Found"})
  }
  res.status(200).json(restaurants)
} 

const getRestaurant = async(req, res)=>{
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({mgs:"Faild to find this object"})
  }
  const restaurant = await Restaurant.findById(id)

  if(!restaurant){
    return res.status(404).json({stauts: false, msg:"Restaurant Data Not Found"})
  }
  res.status(200).json({status: true, msg: restaurant})
}

const createRestaurant = async(req, res) =>{
  const {title, cuisine} = req.body

  try{
    const restaurant = await Restaurant.create({ title, cuisine })
    res.status(200).json({status: true, msg:"Post success", restaurant})
  }
  catch(err){
    return res.status(500).json({status: false, msg:`Post Create failed: ${err}`})
  }
}

const editRestaurant =  (req, res) =>{
  res.status(200).json({status: true, msg:"Modify success"})
}

const deleteRestaurant = (req, res) =>{
  res.status(200).json({status: true, msg:"Delete success"})
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  editRestaurant ,
  deleteRestaurant
}
