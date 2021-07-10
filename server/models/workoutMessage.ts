import mongoose from "mongoose";


const obj: Workout = {
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
              reps: 5
            },
            {
              weight: 160,
              reps: 5
            },
            {
              weight: 175,
              reps: 5
            },
            {
              weight: 160,
              reps: 5
            },
            {
              weight: 140,
              reps: 5
            }
          ],
          
        }
      ],
    },
  ]

}

interface Workout {
  name: string;
  description: string;
  activeDays: Array<number>;
  plan: [object];
}

const workoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  activeDays: [Number],
  plan: [Object],
});

const WorkoutMessage = mongoose.model<Workout>("WorkoutMessage", workoutSchema);

export default WorkoutMessage;