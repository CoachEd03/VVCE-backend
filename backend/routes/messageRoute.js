import messageModel from "../mongo/messageSchema.js";
import express from "express";
import { ObjectId } from "mongoose";

const router = express.Router();

router.post("/postMessages", (request, response) => {
  const { title, message } = request.body;
  console.log(title, message);
  messageModel({title,message}).save()
  response.send("postMessages")
});

router.get("/getMessages", (request, response) => {
  console.log(request.body)
  messageModel.find({},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      response.send(docs);
  }
})});

// router.get("/updateMessages", (request, response) => {
//   const { id, data } = request.body;
//   console.log(id, data);
//    response.send("updateMessages")
// });

// router.post("/deleteMessage", (req,res) => {
//   var delete_id = req.params.id;
//   messageModel.deleteOne({_id: new mongodb.ObjectID(delete_id.toString())} ,(err)=>{
//     if (err) throw err;
//     console.log('Deleted'+id);
//   });
// })

router.get('/delete/(:id)', function(req, res, next) {
  messageModel.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.send('deleted');
    } else {
        console.log('Failed to Delete user Details: ' + err);
    }
  });
});

router.post('/updateMessages',(req, res) => {
  messageModel.updateOne({ _id:req.params.id }, {$set: {
     title: req.body.title,
     message:req.body.message,
  }
  }, function (err, result) {
       if (err) {
       console.log(err);
     } else {
      console.log("Updated successfully");
      res.send('Updated');
  }
 });
 });

export default router;
