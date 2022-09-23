import React, { useState } from "react";
import "./Home.scss";
function Reservation() {
  const [reservation, setReservation] = useState({
    numberofguests: "",
    Guestsname: "",
    Phonenumber: "",
    Email: "",
  });

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
            onChange={(e) => setReservation({ ...reservation, phoneumber: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit" value="Submit">
          Reservation
        </button>
      </form>
    </div>
  );
}

export default Reservation;