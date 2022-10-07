import messageModel from "../mongo/messageSchema.js";
import express from "express";
//import { ObjectId } from "mongoose";

const router = express.Router();

router.post("/postMessages", (request, response) => {
  const { title, message } = request.body;
  const id = request.query.id;
  console.log(id ,title, message);
  const res = id 
    ?  
      messageModel.findByIdAndUpdate(id , {title,message}, (err,docs)=> {
        if(err) response.send("updateMessage error " + err);
        else response.send("updateMessages "+ docs);
      })
    :
      messageModel({title,message}).save((err,docs) => {
      if(err) response.send("Posting error : "+err)
      else response.send("postMessages") });
});

router.get("/getMessages", (request, response) => {
  console.log(request.body)
  messageModel.find({},function (err, docs) {
    if (err) {
      response.send("error at get " + err)
    } else {
      response.send(docs);
  }
})});

// router.get("/updateMessages", (request, response) => {
//   const { id, data } = request.body;
//   console.log(id, data);
//   messageModel.findByIdAndUpdate(id,data, (err,docs)=> {
//     if(err) response.send("updateMessage error " + err);
//     else response.send("updateMessages "+ docs);
//   })
// });


router.get('/delete/(:id)', function(req, res, next) {
  messageModel.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.send('deleted');
    } else {
        console.log('Failed to Delete user Details: ' + err);
    }
  });
});


export default router;
