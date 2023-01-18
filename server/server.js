const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
storedData = {};
app.post("/submit", (req, res) => {
  storedData = req.body;
  console.log(storedData);
  res.json({ message: "Form data received" });
});
app.get("/submitt", (req, res) => {
  console.log(storedData);
  res.json(storedData);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
