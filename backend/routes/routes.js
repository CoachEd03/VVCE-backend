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

router.post("/Reservation", (req, res) => {
  console.log("/Reservation Page : ");
  console.log(req.body);
  const n = new ReservationSchema(req.body);
  n.save();
  let count = 0;
  ReservationSchema.find({}, function (err, docs) {
    if (err) {
        console.log(err);
    }
  else {
    for(let i = 0; i<docs.length; i++) {
      if(Date().toString().substring(0, 10)==docs[i].createdAt)
      count++;
    }
  }
  })
console.log(count)
  res.send("Received Reservation");
});


export default router;
