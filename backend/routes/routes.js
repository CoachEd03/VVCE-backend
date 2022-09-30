import express from "express";

import ReservationSchema from "../mongo/mongoSchema.js";

import Register from "../mongo/mongoSchema.js"

const router = express.Router();

router.post("/register", (req, res) => {
  console.log("\nRegister page : ");
  console.log(req.body);
  if(req.body.phno.length == 10 ) {
    Register.find({email : req.body.email}, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        if(docs.length == 0) {
          const n = new Register(req.body);
          n.save();
          res.send("Register successfull ");
        }
        else{
          res.send("Email exists");
        }
      }});
  }
  else {
    res.send("invalid phone number")
  }
});

router.post("/login", (req, res) => {
  console.log("\nLogin page : ");
  console.log(req.body);
  let resu = "";
  Register.find({email : req.body.email}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
        if(docs.length == 0) {
          console.log("invalid email");
          resu = "invalid email";
        }
        else { 
          if(docs[0].pass === req.body.pass) {
            console.log("login successfull");
            resu = "login successfull";
        }
        else {
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

router.post("/rReservation", (req, res) => {
  console.log("/nReservation Page : ");
  console.log(req.body);
  const n = new ReservationSchema(req.body);
  n.save();
  res.send("Received Reservation");
});


export default router;
