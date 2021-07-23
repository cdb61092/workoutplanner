import mongoose from "mongoose";

const obj = {
  name: "bodybuilding plan",
  description: "bodybuilding plan",
  activeDays: [2, 3, 4, 5, 6],
  plan: [
    {
      day: 2,
      exercises: [
        {
          name: "Strict Barbell Row",
          numSets: 5,
          sets: [
            {
              weight: 140,
              reps: 5,
            },
            {
              weight: 160,
              reps: 5,
            },
            {
              weight: 175,
              reps: 5,
            },
            {
              weight: 160,
              reps: 5,
            },
            {
              weight: 140,
              reps: 5,
            },
          ],
        },
      ],
    },
  ],
};

const WorkoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  activeDays: [Number],
  plan: [Object],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

export default Workout;
