const User = require("../Models/Users");

const Profile = async (req, res) => {
  res.json({ user: req.user });
};

module.exports = Profile;
