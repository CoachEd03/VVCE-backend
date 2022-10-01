import mongoose from "mongoose";

const user = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  pass: String,
  phno: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Register = mongoose.model("Register", user);

export default Register;
