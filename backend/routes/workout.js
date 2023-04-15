// In this file, there will be routes for different user interaction using API.
const Workout = require("../models/workoutModel");
const express = require("express");
const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Welcome to get all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single workout" });
});

// Post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    console.log(workout);
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a new workout" });
});

module.exports = router;
