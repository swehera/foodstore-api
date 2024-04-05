const { config } = require("dotenv");
const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const uerRouter = require("./routes/user");
const recipeRouter = require("./routes/recipe");

app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

config({
  path: "./data/config.env",
});

const port = process.env.PORT;

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connectd"));

//user router
app.use("/api", uerRouter);

//recipe router
app.use("/api", recipeRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
