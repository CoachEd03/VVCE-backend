import messageModel from "../mongo/messageSchema.js";
import express from "express";

const router = express.Router();

router.post("/postMessages", (request, response) => {
  const { title, message } = request.body;
  console.log(title, message);
  response.send("postMessages")
});

router.get("/getMessages", (request, response) => {
  console.log(request.body)
  response.send([{ id: 1, title: "hey message", message: "i am message " }])
});

router.get("/updateMessages", (request, response) => {
  const { id, data } = request.body;
  console.log(id, data);
   response.send("updateMessages")
});

export default router;
