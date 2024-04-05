const express = require("express");
const register = require("../controllers/user");
const login = require("../controllers/user_login");
const Authenticate = require("../middlewares/auth");
const Profile = require("../controllers/userProfile");

const router = express.Router();

//user register
router.post("/register", register);

//user login
router.post("/login", login);

//user profile
router.get("/user", Authenticate, Profile);

module.exports = router;
