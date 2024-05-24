const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const DB = process.env.DB;

mongoose
  .connect(
    `mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/ShamsDash?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api", require("./Routes/Users/index"));

app.use((req, res) => {
  res.send("API is running good");
});

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server is up");
});
