import WorkoutMessage from "../models/workoutMessage";
import {Request, Response} from "express";

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workoutMessages = await WorkoutMessage.find();
    res.status(200).json(workoutMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createWorkout = async (req: Request, res: Response) => {
  const workout = req.body;
  const newWorkout = new WorkoutMessage(workout);

  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
