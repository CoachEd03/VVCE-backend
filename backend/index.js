const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());
app.post("/meal", (req, res) => {
  res.send("received meal form");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
