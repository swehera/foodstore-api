const Recipe = require("../Models/Recipe");

const singleRecipe = async (req, res) => {
  const id = req.params.id;
  try {
    let recipe = await Recipe.findById(id);
    if (!recipe) return res.json({ message: "recipe not exists" }); // Use return here
    return res.json({ recipe }); // Use return here
  } catch (error) {
    return res.json({ message: error }); // Use return here
  }
};

module.exports = singleRecipe;
