// In this file, there will be routes for different user interaction using API.

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
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
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
