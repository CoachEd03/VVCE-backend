import messageModel from "../mongo/messageSchema.js";
import express from "express";
import { ObjectId } from "mongoose";

const router = express.Router();

router.post("/postMessages", (request, response) => {
  const { title, message } = request.body;
  const id = request.query.id;
  const res = id
    ? messageModel.findByIdAndUpdate(id, { title, message }, (err, docs) => {
        if (err) response.send("updateMessage error " + err);
        else response.send("updateMessages " + docs);
      })
    : messageModel({ title, message }).save((err, docs) => {
        if (err) response.send("Posting error : " + err);
        else response.send("postMessages");
      });
});

router.get("/getMessages", (request, response) => {
  messageModel.find({}, function (err, docs) {
    if (err) {
      response.send("error at get " + err);
    } else {
      response.send(docs);
    }
  });
});

router.get("/delete/(:id)", function (req, res, next) {
  messageModel.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send("Deleted the data");
    } else {
      res.send("Failed to Delete meal Details: " + err);
    }
  });
});
router.post("/updateMessages", (req, res) => {
  messageModel.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        message: req.body.message,
      },
    },
    function (err, result) {
      if (err) {
        res.send("Error updating Data. Try again later !!");
      } else {
        res.send("Updated");
      }
    }
  );
});

export default router;
