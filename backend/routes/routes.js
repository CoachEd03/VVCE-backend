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

router.post("/reservation", (req, res) => {
  const newReservation = new ReservationSchema(req.body);
  Register.find({ Email: req.body.email }, function (err, docs) {
    console.log(docs.length);
    if (!docs.length) {
      newReservation.save((err, data) => {
        console.log("Analyzing Data...");
        if (data) {
          console.log("Your data has been successfully saved.");
          res.send("Successful booking");
        } else {
          console.log("Something went wrong while saving data.");
          console.log(err);
          res.status(404).send("Something went wrong while saving data.");
        }
      });
    } else {
      res.status(404).send("The booking from this email already exist");
    }
  });
});

export default router;
