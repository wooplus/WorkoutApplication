// In this file, there will be routes for different user interaction using API.
const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkOut,
} = require("../controllers/workoutController");

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkOut);

module.exports = router;
