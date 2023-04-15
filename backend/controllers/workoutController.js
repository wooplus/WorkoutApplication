const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 }); // get all workouts in descending order
  res.status(200).json(workouts);
};

// get a single workouts
const getWorkout = async (req, res) => {
  const { id } = req.params;

  // Check that if the id is 24 hex valid character
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);
  console.log(workout);
  if (!workout) {
    res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const newWorkout = await Workout.create({ title, load, reps });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// update a workout
const updateWorkOut = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkOut,
};
