import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import router from "./routes/routes.js";
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);
app.post("/Register", (req, res) => {
  res.send("Received Register");
});

app.post("/login", (req, res) => {
  res.send("Received login");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
