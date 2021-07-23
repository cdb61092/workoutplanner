import axios, { AxiosRequestConfig } from "axios";
import { SyntheticEvent } from "react";

const createWorkoutURL = "http://localhost:5000/api/workouts";
const registerURL = "http://localhost:5000/api/auth/register";
const loginURL = "http://localhost:5000/api/auth/login";

type User = {
  username: string;
  password: string;
};

export const fetchWorkouts = () => axios.get(createWorkoutURL);

export const createWorkout = async (newWorkout: object) => {
  try {
    await axios
      .post(createWorkoutURL, newWorkout)
      .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (e: SyntheticEvent, user: User) => {
  e.preventDefault();

  const options: AxiosRequestConfig = {
    url: registerURL,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(user),
  };
  axios(options)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (user: User) => {
  const options: AxiosRequestConfig = {
    url: loginURL,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  };

  axios(options)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
