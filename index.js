import express from "express";
const app = express();
const dotenv = require("dotenv").config();

app.use(express.json());
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
