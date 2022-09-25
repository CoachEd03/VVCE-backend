import mongoose from "mongoose";

const user = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phno: Number,
  pass: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const userSchema = mongoose.model("userSchema", user);

export default userSchema;
