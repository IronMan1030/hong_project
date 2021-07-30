const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const adminRouter = require("./routes/admin");

app.use("/.netlify/functions/api", adminRouter);
app.use("/.netlify/functions/api/init", (req, res) => {
  res.json("--- Initialized ---");
});

module.exports = app;
module.exports.handler = serverless(app);
