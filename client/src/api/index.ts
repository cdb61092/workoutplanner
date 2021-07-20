import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const url = "http://localhost:5000/workouts";
const registerURL = "http://localhost:5000/api/users/signup";
const loginURL = "http://localhost:5000/api/users/login";

type User = {
  username: string;
  password: string;
};

export const fetchWorkouts = () => axios.get(url);

export const createWorkout = (newWorkout: object) =>
  axios.post(url, newWorkout);

export const registerUser = (user: User) => {
  const options: AxiosRequestConfig = {
    url: registerURL,
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify(user),
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
