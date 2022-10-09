import express from "express";
import ReservationSchema from "../mongo/reservationSchema.js";
import Register from "../mongo/registerSchema.js";
import message from "../mongo/messageSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  const n = new ReservationSchema(req.body);
  n.save();
  res.send("Received reservation form");});

 router.post("/register", (req, res) => {
    if (req.body.phno.length == 10) {
      Register.find({ email: req.body.email }, function (err, docs) {
        if (err) {
          console.log(err);
          res.send("Something went wrong" + err);
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

  });

  router.get("/reservation", (req, res) => {
    ReservationSchema.find(function (err, docs) {
      if (!err) {
        res.send(docs);
      }
      else {
        res.status(404).send("Something went wrong while saving data.");
      }
    })
  });
  router.delete("/deleteReservation", (request, response) => {
     const id = request.query.id;
    console.log("deleted"+id);
     ReservationSchema.findByIdAndRemove({ _id: id }, (err, docs) => {
       if (err) response.send(" Error in saving data " + err);
       else response.send("Deleted data");
     });
  });
  router.delete("/updateReservation", (request, response) => {
    const id = request.query.id;
   console.log("Update"+id);
    ReservationSchema.findByIdAndUpdate({ _id: id }, (err, docs) => {
      if (err) response.send(" Error in saving data " + err);
      else response.send("Updated data");
    });
 });
  router.post("/reservation", (req, res) => {
    const newReservation = new ReservationSchema(req.body);
    Register.find({ Email: req.body.email }, function (err, docs) {
      console.log(docs.length);
      if (docs.length) {
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

router.post("/messages", (req,res) => {
  const sample = new message({
    title : "test",
    message : "test",
  })
  sample.save();
});


  export default router;
