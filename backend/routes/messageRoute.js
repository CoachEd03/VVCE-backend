import messageModel from "../mongo/messageSchema.js";
import express from "express";

const router = express.Router();

router.post("/postMessages", (request, response) => {
  const { title, message } = request.body;
  console.log(title, message);
  new messageModel({ title, message }).save((err, docs) => {
    if (err) response.send(" Error in saving data " + err);
    else response.send("Data saved");
  });
});

router.get("/getMessages", (request, response) => {
  messageModel.find((err, docs) => {
    if (err) response.send(" Error in saving data " + err);
    else response.send(docs);
  });
});

router.get("/updateMessages", (request, response) => {
  const { id, data } = request.body;
  console.log(id, data);
  messageModel.findByIdAndUpdate(id, data, (err, docs) => {
    if (err) response.send(" Error in saving data " + err);
    else response.send(docs);
  });
});

export default router;
