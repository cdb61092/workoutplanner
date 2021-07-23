import User from "../models/user.js";
import bcrypt from "bcrypt-nodejs";

// export const signUp = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).json(user);
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// };

// export const signUp = async (req, res) => {
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(user.password, salt, null, (err, hash) => {
//     user.password = hash;
//   });
// });
//   let newUser = new User({ username: username, password: password });
//   console.log(newUser);

//   try {
//     await newUser.save();
//     return res.status(201).json(newUser);
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ message: err.message });
//   }
// };

// export const login = (req, res, next) => {
//   res.status(200).json(req.user);
//   return next();
// };
