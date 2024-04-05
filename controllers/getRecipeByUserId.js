const Recipe = require("../Models/Recipe");

const getRecipeByUserID = async (req, res) => {
  const userId = req.params.id;
  try {
    let recipe = await Recipe.find({ user: userId }).populate("user", "name");
    if (!recipe) res.json({ message: "recipe not exists" });
    res.json({ message: "recipe by user id", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = getRecipeByUserID;
