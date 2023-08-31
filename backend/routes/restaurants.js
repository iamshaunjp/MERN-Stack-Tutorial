const express = require("express")
const router = express.Router()
const {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  editRestaurant ,
  deleteRestaurant
} = require("../controllers/restaurantController")


// get all restaurants
router.get("/", getAllRestaurants)

// get 1 restaurant
router.get("/:id", getRestaurant)

// create restaurant
router.post("/", createRestaurant)

// modify restaurant
router.patch("/:id", editRestaurant)

// delete restaurant
router.delete("/:id", deleteRestaurant)

module.exports = router
