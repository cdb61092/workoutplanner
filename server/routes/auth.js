import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

/*
 * @route POST api/auth/login
 * @desc Login user
 * @access Public
 */

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter your credentials" });
  }

  try {
    const user = await User.findOne({ username: username });
    if (!user) throw Error("User does not exist");

    const isAuthenticated = user.authenticateUser(password);
    if (!isAuthenticated) throw Error("Invalid credentials");

    const token = user.generateAuthToken();
    console.log(token);

    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 900000),
      })
      .send(user);
    console.log(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

/*
 * @route POST api/user/register
 * @desc Register new user
 * @access Public
 */

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ username: username });
    if (user) throw Error("Username already taken");
    console.log("after user");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });
    const savedUser = await newUser.save();

    // const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: 36000,
    // });

    // res.status(200).json({
    //   token,
    //   user: {
    //     id: savedUser._id,
    //     username: savedUser.username,
    //   },
    // });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }

  // const salt = bcrypt.genSalt(10);

  // if (!salt) throw Error("Error with bcrypt salt generation");

  // const hash = bcrypt.hash(password, salt);
  // if (!hash) throw Error("Error with hashing password");

  // const newUser = new User({
  //   username,
  //   password: hash,
  // });

  // if (!savedUser) throw Error("Error with saving user");
});

export default router;
