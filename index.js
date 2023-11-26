const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ message: "Server is running live " });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
