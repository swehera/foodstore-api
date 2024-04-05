const SavedRecipe = require("../Models/SavedRecipe");

const getSavedRecipe = async (req, res) => {
  const recipe = await SavedRecipe.find();
  return res.json({ recipe });
};

module.exports = getSavedRecipe;
