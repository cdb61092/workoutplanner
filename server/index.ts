import express from "express";
import mongoose from "mongoose";
import workouts from "./routes/workouts";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/workouts", workouts);

const CONNECTION_URL =
  "mongodb+srv://cdb61092:A8207742b!@cluster0.bwzpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

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
