import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workoutRoutes.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/workouts", workoutRoutes);
app.use("/api/auth", authRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
