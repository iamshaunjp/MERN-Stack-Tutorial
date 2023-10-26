const Workout = require('../models/workoutModel')

//get all workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})

    res.status(200).json(workouts)
}

//get singler workout 
const getWorkouts = async (req, res) => {
    const = 
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST a new workout'})
}

//delete a workout

//update a workout

module.exports = {
    createWorkout
}