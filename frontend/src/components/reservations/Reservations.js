import React, { useState } from "react";
import "./home.scss";
function Reservation() {
  const [reservation, setReservation] = useState({
    numberofguests: "",
    Guestsname: "",
    Email: "",
    Phonenumber: "",
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
        <button type="submit" value="Submit">
          Reservation
        </button>
      </form>
      <div>
  <select class="browser-default custom-select" id="venflows">
    <option value="Date">ALL</option>
    <option value="Date">Today</option>
    <option value="Date">Tomorrow</option>
  </select>
</div>
<button type="button"
onclick="document.getElementById('date_time_button').innerHTML = Date()">Check</button>
<p id="date_time_button"></p>

    </div>
  );
}

export default Reservation;
