const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
<<<<<<< Updated upstream
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)
=======
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,   
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)
>>>>>>> Stashed changes
