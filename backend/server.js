require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// This is the route for directing and storing the workout data in JSON format using API. The pathway is "/api/workouts"
const workoutRoutes = require("./routes/workout");

// express app
const app = express();

//middle wares

// This is used for permission for updating posting new posts using json body.
app.use(express.json());

// This is used for checking whether the user is going to the which pathway and what kind of API methods he use.
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

//connect to Database

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests only after connected to database
    app.listen(process.env.PORT, () => {
      console.log(`listening port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
