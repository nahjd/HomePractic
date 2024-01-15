const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

require("dotenv").config();
require("./src/config/db");

const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./src/routes/nahidRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("nahid");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
