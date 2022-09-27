import express from "express";
import Register from "../mongo/mongoSchema.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", (req, res) => {
  console.log("\nRegister page : ");
  console.log(req.body);
  const n = new Register(req.body);
  n.save();
  res.send("Received Register");
});

router.post("/login", (req, res) => {
  console.log("\nLogin page : ");
  console.log(req.body);
  
  res.send("Received login");
});

export default router;
