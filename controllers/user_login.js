const { config } = require("dotenv");
config({
  path: "./data/config.env",
});
const bcrypt = require("bcryptjs");
const User = require("../Models/Users");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { gmail, password } = req.body;
  try {
    let user = await User.findOne({ gmail });
    if (!user) return res.json({ message: "No user exits" });
    const valiPass = await bcrypt.compare(password, user.password);
    if (!valiPass) return res.json({ message: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ message: `Welcome ${user.name}`, token });
  } catch (error) {
    res.json(error);
  }
};

module.exports = login;
