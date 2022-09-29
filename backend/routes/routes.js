import express from "express";
import Register from "../mongo/mongoSchema.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", (req, res) => {
  console.log("\nRegister page : ");
  console.log(req.body);
  const n = new Register(req.body);
  n.save();
  res.send("Received Register");
});

router.post("/login", (req, res) => {
  console.log("\nLogin page : ");
  console.log(req.body);
  let resu = "";
  // Register.find({email : req.body.email}, function (err, docs) {
  //   if (err){
  //       console.log(err);
  //   }
  //   else{
    //     console.log("First function call : ", docs);
    //     if(docs.length == 0) {
    //       console.log("invalid email");
    //       resu = "invalid email";
    //     }
    //     else { 
    //       if(docs[0].pass === req.body.pass) {
    //         console.log("login successfull");
    //         resu = "login successfull";
    //     }
    //     else {
    //       console.log("login password error");
    //       resu = "login password error";
    //     }
    //   }
    // }
//     res.send("Hi");
// }});
//  console.log(resu);
  //res.send(resu);
  Register.find({email: req.body.email}, function (err, data) {
    if (!err) {
        res.render("retrieve", { email: req.body.email });
    } else {
      res.render("error");
    }
}).clone().catch(function(err){ console.log(err)})
});

export default router;
