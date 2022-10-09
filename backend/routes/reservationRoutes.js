import ReservationSchema from "../mongo/reservationSchema.js";
import express from "express";
const router = express.Router();

router.get("/reservation", (req, res) => {
  ReservationSchema.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).send("Something went wrong while saving data.");
    }
  });
});

router.post("/reservation", (req, res) => {
  const newReservation = new ReservationSchema(req.body);
  ReservationSchema.find({ Email: req.body.email }, function (err, docs) {
    if (!docs.length) {
      newReservation.save((err, data) => {
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

router.delete("/deleteReservation", (request, response) => {
  const id = request.query.id;
  ReservationSchema.findByIdAndRemove({ _id: id }, (err, docs) => {
    if (err) response.send(" Error in saving data " + err);
    else response.send("Deleted data");
  });
});
router.patch("/updateReservation", (request, response) => {
  const id = request.query.id;
  ReservationSchema.findByIdAndUpdate(
    { _id: id },
    request.body,
    (err, docs) => {
      if (err) response.send(" Error in saving data ");
      else response.send("Updated data");
    }
  );
});

export default router;
