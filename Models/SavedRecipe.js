const mongoose = require("mongoose");

const savedRecipeSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipes",
  },
});

const SavedRecipe = mongoose.model("savedRecipe", savedRecipeSchema);
module.exports = SavedRecipe;
