const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());
app.post("/register", (req, res) => {
  res.send("Received Register");
});

app.post("/login", (req, res) => {
  res.send("Received login");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
