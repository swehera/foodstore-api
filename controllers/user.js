const bcrypt = require("bcryptjs");
const User = require("../Models/Users");
const register = async (req, res) => {
  const { name, gmail, password } = req.body;
  try {
    let user = await User.findOne({ gmail });
    if (user) return res.json({ message: "User already exists" });
    const hashPass = await bcrypt.hash(password, 10);
    user = await User.create({ name, gmail, password: hashPass });
    res.json({ message: "User Register Successfully", user });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = register;
