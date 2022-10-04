import React, { useState } from "react";
import "./home.scss";
import DatePicker from "react";
function Reservation() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reservation, setReservation] = useState({
    numberofguests: "",
    Guestsname: "",
    Email: "",
    Phonenumber: "",
    Reservationdate: "",
  });
  function saveSubmit(e) {
    e.preventDefault();
      console.log(reservation);
    callReservationApi();
  }
  async function callReservationApi() {
    await fetch("http://localhost:5001/api/reservation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
    .then((res) => {
      return res.text();
    })
    .then ((r) => {
        alert(r)
    })
      .catch((err) => console.log(err));
  }
  return (
    <div className="reg">
      <form onSubmit={(e) => saveSubmit(e)}>
        <b>Reservation form</b>
        <br />
        <label>
          {" "}
          numberofguests:{" "}
          <input
            type="Number"
            name="numberofguest"
            value={reservation.numberofguests}
            onChange={(e) =>
              setReservation({ ...reservation, numberofguests: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Guestsname:{" "}
          <input
            type="String"
            name="Guestsname"
            value={reservation.Guestsname}
            onChange={(e) =>
              setReservation({ ...reservation, Guestsname: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Email:{" "}
          <input
            type="email"
            name="email"
            value={reservation.Email}
            onChange={(e) =>
              setReservation({ ...reservation, Email: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Phonenumber :{" "}
          <input
            type="Number"
            name="Phonenumber"
            value={reservation.phno}
            onChange={(e) => setReservation({ ...reservation, Phonenumber: e.target.value })}
            required
          />
        </label>
        <br />
        <div className="col-sm-12 my-2">
        <label htmlFor="startDate">ReservationDate : </label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={(e) => setReservation({ ...reservation, From : e.target.value })}
        />
      </div>
      <br/>
      <br />
        <button type="submit" value="Submit">
          Reservation
        </button>
      </form>
      <div>
     <DatePicker
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
     <DatePicker
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
   </div>
    </div>
  );
}

export default Reservation;
