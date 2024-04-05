const Recipe = require("../Models/Recipe");

const allRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find().populate("user", "name"); // Populate the 'user' field with only 'name'
    return res.json({ recipe });
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = allRecipe;
