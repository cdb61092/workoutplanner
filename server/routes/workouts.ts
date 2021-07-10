import express from "express";
import { getWorkouts, createWorkout } from "../controllers/workouts";

const router = express.Router();
router.get("/", getWorkouts);
router.post("/", createWorkout);

export default router;
