import mongoose from "mongoose";

const user = mongoose.Schema({
    title : String,
    message : String,
});
const message = mongoose.model("message", user);

export default message;