import express from "express";
import mealSchema from "../mongo/mongoSchema.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello!");
});

router.post("/meal", (req, res) => {
  console.log("\nMeal page");
  console.log(req.body);
  const n=new mealSchema(req.body);
  n.save();
  res.send("Received meal form");
});

export default router;
