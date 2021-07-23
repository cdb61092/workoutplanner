import mongoose from "mongoose";
import { hash, compare, hashSync, compareSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username cannot be blank"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
  workouts: {
    type: [Object],
    default: {
      name: "Standard strength",
      days: [
        {
          day: 0,
          exercises: [
            {
              name: "Bench press",
              sets: 3,
              weight: 160,
              rest: 180,
              reps: 5,
            },
            {
              name: "Squat",
              sets: 3,
              weight: 200,
              rest: 180,
              reps: 5,
            },
            {
              name: "Deadlift",
              sets: 3,
              weight: 250,
              rest: 180,
              reps: 5,
            },
          ],
        },
        {
          day: 2,
          exercises: [
            {
              name: "Bench press",
              sets: 3,
              weight: 160,
              rest: 180,
              reps: 5,
            },
            {
              name: "Squat",
              sets: 3,
              weight: 200,
              rest: 180,
              reps: 5,
            },
            {
              name: "Deadlift",
              sets: 3,
              weight: 250,
              rest: 180,
              reps: 5,
            },
          ],
        },
        {
          day: 4,
          exercises: [
            {
              name: "Bench press",
              sets: 3,
              weight: 160,
              rest: 180,
              reps: 5,
            },
            {
              name: "Squat",
              sets: 3,
              weight: 200,
              rest: 180,
              reps: 5,
            },
            {
              name: "Deadlift",
              sets: 3,
              weight: 250,
              rest: 180,
              reps: 5,
            },
          ],
        },
      ],
    },
  },
});

// UserSchema.pre("save", (next) => {
//   if (this.isModified("password")) {
//     this.password = this._hashPassword(this.password);
//   }
//   return next();
// });

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  generateAuthToken() {
    const token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );
    return token;
  },
};

export default mongoose.model("User", UserSchema);
