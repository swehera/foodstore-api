const { config } = require("dotenv");
config({
  path: "./data/config.env",
});
const User = require("../Models/Users");

const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  const token = req.header("Auth");
  try {
    if (!token) return res.json({ message: "login first" });

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("This is decoded data ", decode);
    const id = decode.userId;
    let user = await User.findById(id);
    if (!user) return res.json({ message: "User not exists" });
    req.user = user;
    next();
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = Authenticate;
