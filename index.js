const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/user");
app.use(express.json());
const port = 5000;
connectDB();

app.use("/api/user", userRoute);
app.listen(port, (err) => {
  err ? console.log("errr", err) : console.log(`server run on port ${port}`);
});
