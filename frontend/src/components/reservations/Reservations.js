import React, { useState, useEffect } from "react";
import "./home.scss";

export default function Reservation() {
  const [isMessage, setIsMessage] = useState([]);
  //managing current data and manipulations to get latest data
  const [messagedata, setMessageData] = useState({});
  const [id, setID] = useState("");
  // managing form data...
  const [reservation, setReservation] = useState({
    numberofguests: "",
    Guestsname: "",
    Email: "",
    Phonenumber: "",
  });

  useEffect(() => {
    getReservationApi();
  }, [messagedata]);

  function saveSubmit(e) {
    e.preventDefault();
    callReservationApi();
  }

  async function deleteMessage(
    id,
    numberofguests,
    Guestsname,
    Email,
    Phonenumber
  ) {
    try {
      await fetch("http://localhost:5001/api/deleteReservation?id=" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application?json",
        },
      }).then((res) =>
        console.log(res.text()).catch((err) => console.log("error:" + err))
      );
    } catch (err) {
      console.log("Some error", err);
    }
  }

  function getData(e) {
    e.preventDefault();
    getReservationApi();
  }
  //get all the data
  async function getReservationApi() {
    await fetch("http://localhost:5001/api/reservation")
      .then((response) => response.json())
      .then((res) => setIsMessage(res))
      .catch((err) => console.log(err));
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
        console.log(res);
      })
      .catch((err) => console.log(err));
    setReservation({
      numberofguests: "",
      Guestsname: "",
      Email: "",
      Phonenumber: "",
    });
  }
  async function updateReservation(e) {
    e.preventDefault();

    await fetch("http://localhost:5001/api/updateReservation?id=" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((res) => {
        console.log(res.text());
      })
      .catch((err) => console.log(err));
  }
  //this function is to post the data

  return (
    <div className="reg">
      <form onSubmit={(e) => (id ? updateReservation(e) : saveSubmit(e))}>
        <h2> {id ? "Update " : "Create"} a Reservation</h2>
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
            value={reservation.Phonenumber}
            onChange={(e) =>
              setReservation({ ...reservation, Phonenumber: e.target.value })
            }
            required
          />
        </label>
        <br />
        <button type="submit" value="Submit">
          Reservation
        </button>
        <br />
      </form>
      <button type="submit" onClick={(e) => getData(e)}>
        FETCH UPDATED DATA
      </button>
      <div>
        {isMessage.map((reservation, index) => (
          <div
            className="messages"
            style={{ margin: "20px" }}
            key={reservation._id}
          >
            <div className="messages__show">
              <span>
                <p>{reservation.numberofguests}</p>
                <p>{reservation.Guestsname}</p>
                <p>{reservation.Email}</p>
                <p>{reservation.Phonenumber}</p>
              </span>
            </div>
            <div>
              <button
                className="messages__button"
                type="submit"
                onClick={async () => {
                  await deleteMessage(
                    reservation._id,
                    reservation.numberofguests,
                    reservation.Guestsname,
                    reservation.Email,
                    reservation.Phonenumber
                  );
                  setMessageData(reservation);
                }}
              >
                DELETE
              </button>
              <button
                className="messages__button"
                type="submit"
                onClick={async () => {
                  setID(reservation._id);
                  await setReservation(reservation);
                  setMessageData(reservation);
                }}
              >
                UPDATE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
