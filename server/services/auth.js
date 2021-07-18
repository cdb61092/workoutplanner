import passport from "passport";
import LocalStrategy from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

const localOpts = {
  usernameField: "username",
};

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("authorization"),
  secretOrKey: process.env.JWT_SECRET,
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (username, password, done) => {
    try {
      const user = await User.findOne({
        username,
      });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    // Identify user by ID
    const user = await User.findById(payload._id);

    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);
// passport.use(jwtStrategy);

export const authLocal = passport.authenticate("local", {
  session: false,
  successRedirect: "/success",
  failureRedirect: "/failure",
});

export const authJwt = passport.authenticate("jwt", {
  session: false,
});
