import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello!");
});

router.post("/meal", (req, res) => {
  console.log("\nRegister page");
  console.log(req.body);
  res.send("Received meal form");
});



export default router;
