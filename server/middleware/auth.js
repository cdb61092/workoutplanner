import jwt from "jsonwebtoken";

// Auth middleware to verify JWT
export const isAuthorized = (req, res, next) => {
  const token = req.cookies.token;

  //check if token exists
  if (!token) {
    return res.status(401).send("No token found, authorization denied");
  }

  try {
    // verify token
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedJwt;
    next();
  } catch (e) {
    res.clearCookie("token");
    res.status(400).send(e.message);
  }
};
