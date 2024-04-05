// getting-started.
const { config } = require("dotenv");
const mongoose = require("mongoose");
config({
  path: "./data/config.env",
});

main().catch((err) => console.log(err));

require("dotenv").config(); // Add this line to load environment variables from .env file

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected successfully");
}
