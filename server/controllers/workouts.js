import Workout from "../models/workout.js";
import { Request, Response } from "express";
import auth from "../middleware/auth.js";

export const getWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find();
    res.status(200).json(workoutMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createWorkout = async (req, res) => {
  const workout = req.body;

  try {
    await workout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
