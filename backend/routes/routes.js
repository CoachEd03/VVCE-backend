import express from "express";
import ReservationSchema from "../mongo/mongoSchema.js";
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

router.post("/rReservation", (req, res) => {
  console.log("/nReservation Page : ");
  console.log(req.body);
  const n = new ReservationSchema(req.body);
  n.save();
  res.send("Received Reservation");
});


export default router;
