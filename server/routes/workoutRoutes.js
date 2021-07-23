import express from "express";
import Workout from "../models/workout.js";
import { Router } from "express";
import { isAuthorized } from "../middleware/auth.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const workoutMessages = await WorkoutMessage.find();
    res.status(200).json(workoutMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
/*
 * @route POST api/workouts/
 * @desc Create workout
 * @access Public
 */

router.post("/", isAuthorized, async (req, res) => {
  const cookie = jwt.decode(req.cookies.token);
  const newWorkout = req.body;
  try {
    const user = await User.findById(cookie._id);
    user.workouts.push(newWorkout);
    await user.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
});

export default router;
