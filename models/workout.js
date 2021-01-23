const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the name of workout"
    },
    duration: {
        type: Number,
        required: "Enter the duration"
    },
    weight: {
        type: Number,
        required: "Enter the weight"
    },
    reps: {
        type: Number,
        required: "Enter the number of reps"
    },
    sets: {
        type: Number,
        required: "Enter the number of sets"
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;