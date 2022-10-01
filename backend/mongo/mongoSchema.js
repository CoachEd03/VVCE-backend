import mongoose from "mongoose";

const mydate = new Date();
const user = mongoose.Schema( {
    numberofguests: Number,
    Guestsname: String,
    Email: String,
    Phonenumber: Number,
    createdAt: {
        type: String,
        default: mydate.toISOString().substring(0, 10),
    },
});

const ReservationSchema = mongoose.model("Reservation", user);

export default ReservationSchema;