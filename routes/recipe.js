const express = require("express");
const add = require("../controllers/recipe");
const allRecipe = require("../controllers/get-recipe");
const singleRecipe = require("../controllers/single-recipe");
const getRecipeByUserID = require("../controllers/getRecipeByUserId");
const savedRecipeByID = require("../controllers/savedRecipeByID");
const getSavedRecipe = require("../controllers/getSavedRecipe");
const Authenticate = require("../middlewares/auth");

const router = express.Router();

//create recipe
router.post("/add", Authenticate, add);

//get all recipe
router.get("/", allRecipe);

//get all saved recipe
router.get("/saved", getSavedRecipe);

//get single recipe by id
router.get("/:id", singleRecipe);

//get single recipe by user id
router.get("/user/:id", getRecipeByUserID);

//saved recipe by id
router.post("/:id", Authenticate, savedRecipeByID);

module.exports = router;
