import express from "express";

import ReservationSchema from "../mongo/reservationSchema.js";

import Register from "../mongo/registerSchema.js";

const router = express.Router();

router.post("/register", (req, res) => {
  if (req.body.phno.length == 10) {
    Register.find({ email: req.body.email }, function (err, docs) {
      if (err) {
        console.log(err);
        res.send("Something went wrong" + err);
      } else {
        if (docs.length == 0) {
          const n = new Register(req.body);
          n.save();
          res.send("Register successfull ");
        } else {
          res.send("Email exists");
        }
      }
    });
  } else {
    res.send("invalid phone number");
  }
});

router.post("/login", (req, res) => {
  console.log("\nLogin page : ");
  console.log(req.body);
  let resu = "";
  Register.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("First function call : ", docs);
      if (docs.length == 0) {
        console.log("invalid email");
        resu = "invalid email";
      } else {
        if (docs[0].pass === req.body.pass) {
          console.log("login successfull");
          resu = "login successfull";
        } else {
          console.log("login password error");
          resu = "login password error";
        }
      }
    }
    res.send(resu);
  });
  //   Register.find({email: req.body.email}, function (err, data) {
  //     if (!err) {
  //         res.render("retrieve", { email: req.body.email });
  //     } else {
  //       res.render("error");
  //     }
  // }).clone().catch(function(err){ console.log(err)})
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
