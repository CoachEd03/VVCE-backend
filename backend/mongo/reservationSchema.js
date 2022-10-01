import mongoose from "mongoose";

//import Reservation from "../../frontend/src/components/Reservations";

const user = mongoose.Schema({
  numberofguests: Number,
  Guestsname: String,
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phonenumber: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ReservationSchema = mongoose.model("Reservation", user);

export default ReservationSchema;
