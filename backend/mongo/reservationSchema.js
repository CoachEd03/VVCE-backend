import mongoose from "mongoose";

const user = mongoose.Schema({
  numberofguests: Number,
  Guestsname: String,
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phonenumber: Number,
  ReservationDate: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },

});

const ReservationSchema = mongoose.model("Reservation", user);

export default ReservationSchema;
