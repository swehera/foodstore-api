const SavedRecipe = require("../Models/SavedRecipe");

const savedRecipeByID = async (req, res) => {
  const id = req.params.id;
  let recipe = await SavedRecipe.findOne({ recipe: id });

  if (recipe) return res.json({ message: "recipe already saved" });

  recipe = await SavedRecipe.create({
    recipe: id,
  });
  res.json({ message: "Recipe Saved Successfully" });
};

module.exports = savedRecipeByID;
