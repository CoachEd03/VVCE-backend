import express from "express";
import mealSchema from "../mongo/mealSchema.js";
import Register from "../mongo/registerSchema.js";
import message from "../mongo/messageSchema.js";
import { ObjectId } from "mongoose";

const router = express.Router();

router.post("/meal", (req, res) => {
  const newMeal = new mealSchema(req.body);
  Register.find({ email: req.body.email }, function (err, docs) {
    // newMeal.save();
    if (!docs.length) {
      newMeal.save((err, data) => {
        if (data) {
          res.send("Successful booking");
        } else {
          res.status(404).send("Something went wrong while saving data.");
        }
      });
    } else {
      res.status(404).send("The booking from this email already exist");
    }
  });
});
router.get("/meal", (req, res) => {
  mealSchema.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).send("Something went wrong while saving data.");
    }
  });
});
router.delete("/deleteMeal", (request, response) => {
  const id = request.query.id;
  mealSchema.findByIdAndRemove({ _id: id }, (err, docs) => {
    if (err) response.send(" Error in saving data " + err);
    else response.send("Deleted data");
  });
});
router.patch("/updateMeal", (req, res) => {
  const id = req.query.id;
  const { data } = req.body;
  mealSchema.findByIdAndUpdate({ _id: id }, req.body, (err, docs) => {
    if (err) res.send(" Error in saving data " + err);
    else res.send("updated data");
  });
});

router.post("/register", (req, res) => {
  if (req.body.phno.length == 10) {
    Register.find({ email: req.body.email }, function (err, docs) {
      if (err) {
        res.send("Something went wrong" + err);
      } else {
        const n = new Register(req.body);
        n.save();
        res.send("Registered");
      }
    });
  } else {
    res.status(404).send("The booking from this email already exist");
  }
});

router.post("/login", (req, res) => {
  let resu = "";
  Register.find({ email: req.body.email }, function (err, docs) {
    if (err) {
    } else {
      if (docs.length == 0) {
        resu = "invalid email";
      } else {
        if (docs[0].pass === req.body.pass) {
          resu = "login successfull";
        } else {
          resu = "login password error";
        }
      }
    }
    res.send(resu);
  });
});

export default router;
