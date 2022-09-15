const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
