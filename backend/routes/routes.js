import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Received Register");
});

router.post("/login", (req, res) => {
  res.send("Received login");
});

router.post("/reservation", (req, res) => {
  console.log(req.body);
  res.send("Received Reservation");
});
export default router;
