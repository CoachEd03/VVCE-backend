import express from "express";
import mealSchema from "../mongo/mealSchema.js";
import ReservationSchema from "../mongo/reservationSchema.js";
import Register from "../mongo/registerSchema.js";
import message from "../mongo/messageSchema.js";
import { ObjectId } from "mongoose";

const router = express.Router();

router.post("/meal", (req, res) => {
  const newMeal = new mealSchema(req.body);
  Register.find({ email: req.body.email }, function (err, docs) {
   // console.log(req.body);
   // newMeal.save();
     if (!docs.length) {
        newMeal.save((err, data) => {
          console.log("Analyzing Data...");
          if (data) {
            res.send("Successful meal booking");
          } else {   
            res.status(404).send("Something went wrong while saving data.");
          }
        });
      } else{
        res.status(404).send("booking from email already exists");
      }
    
  });
});
  router.get("/meal", (req, res) => {
    mealSchema.find(function (err, docs) {
      if (!err) {
        res.send(docs);
      }
      else {
        res.status(404).send("Something went wrong while saving data.");
      }
    })
  });
  router.delete("/deleteMeal", (request, response) => {
     const id = request.query.id;
    console.log("deleted"+id);
     mealSchema.findByIdAndRemove({ _id: id }, (err, docs) => {
       if (err) response.send(" Error in saving data " + err);
       else response.send("Deleted data");
     });
    
  });
  router.patch("/updateMeal",(req,res)=>{
    const id=req.query.id;
    
    
    const { data } = req.body;
    console.log (data);
    mealSchema.findByIdAndUpdate({_id:id},req.body,(err,docs) =>{
      if (err) res.send(" Error in saving data " + err);
      else res.send("updated data");
    })
  })
  /*router.post("/meal", (req, res) => {
    console.log("\nMeal page");
    console.log(req.body);
    const n = new mealSchema(req.body);
    n.save();
    res.send("Received meal form");
  });*/


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
            console.log("login successfull"+"\t"+docs[0]._id);
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



  export default router;
