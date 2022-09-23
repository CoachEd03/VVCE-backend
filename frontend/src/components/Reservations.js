import React, { useState } from "react";
import "./Home.scss";
function Reservation() {
  const [reservation, setReservation] = useState({
    numberofguests: "",
    Guestsname: "",
    Phonenumber: "",
    Email: "",
  });
  function saveSubmit(e) {
    e.preventDefault();
      console.log(reservation);
      alert("Different passwords")
    // front-end api will be called here and register will be passed as body.
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
            onChange={(e) => setRegister({ ...register, phno: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Password:{" "}
          <input
            type="password"
            name="pass"
            value={register.pass}
            onChange={(e) => setRegister({ ...register, pass: e.target.value })}
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