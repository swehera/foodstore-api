const Recipe = require("../Models/Recipe");

const add = async (req, res) => {
  const { title, price, description, imageurl } = req.body;
  try {
    const recipe = await Recipe.create({
      title,
      price,
      description,
      imageurl,
      // user: "660d603ce8fcf70887aa22d2",
      user: req.user,
    });
    res.json({ message: "Recipe created successfully..!", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = add;
