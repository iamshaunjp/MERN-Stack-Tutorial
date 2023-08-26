const getAllRestaurants = (req, res)=>{
  res.status(200).json({status: true, msg: "Hello Welcome restaurants"})
} 

const getRestaurant = (req, res)=>{
  console.log(req.body)
  res.status(200).json({status: true, msg: `${req.body}, ${req.params}`})
}

const createRestaurant = (req, res) =>{
  res.status(200).json({status: true, msg:"Post success"})
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
