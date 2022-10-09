import React, { useState } from "react";
import "./home.scss";

export default function Reservation() {
  const [isMessage, setIsMessage] = useState([]);
const [showPopup, setShowPopup] = useState(false);
const [messagedata, setMessageData] = useState({});
const [id,setID]=useState("");

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


  async function updateReservation(id,numberofguests,Guestsname,Email,Phonenumber,e) {
    e.preventDefault()

    console.log(reservation);
    try{
      await fetch("http://localhost:5001/api/updateReservation?id="+id,{
        method:"PATCH",
        headers:{
          Accept:"application/json",
          "Content-Type":"application?json",
        },
        body: JSON.stringify(reservation),
      }).then((res)=> 
      console
      .log(res.text())
      .catch((err) => console.log("error:"+err))
      );
   
  }catch (err){
    console.log("Some error",err);
  }
  setReservation([id,numberofguests,Guestsname,Email,Phonenumber]);
}
async function deleteMessage(id,numberofguests,Guestsname,Email,Phonenumber) {
  console.log(id,numberofguests,Guestsname,Email,Phonenumber);
  try{
    await fetch("http://localhost:5001/api/deleteReservation?id="+id,{
      method:"DELETE",
      headers:{
        Accept:"application/json",
        "Content-Type":"application?json",
      },
    }).then((res)=> 
    console
    .log(res.text())
    .catch((err) => console.log("error:"+err))
    );
}catch (err){
  console.log("Some error",err);
}
setMessageData([id,numberofguests,Guestsname,Email,Phonenumber]);
}

function getData(e) {
  e.preventDefault()
  console.log(reservation)
  getReservationApi();
  
}
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
async function updateMessage(id,numberofguests,Guestsname,Email,Phonenumber) {
  console.log("update", id);
  setReservation({ id,numberofguests,Guestsname,Email,Phonenumber });
  let editReservation = editReservation.find((ele) => ele.id !== id);
  console.log(editReservation);
  console.log("reservation", messagedata);
   //await fetch("http://localhost:5001/api/updateMessage", {
   //    method: "PATCH",
   //    headers: {
   //      Accept: "application/json",
   //      "Content-Type": "application/json",
   //    },
   //    body: JSON.stringify(isMessage),
   //  })
   //    .then((response) => response.text())
   //    .then((res) => alert(res))
   //    .catch((err) => console.log("Error in sending messages", err));
  setShowPopup(true);
}
  return (
    <div className="reg">
      <form onSubmit={(e) => saveSubmit(e)} >
        <h1>Reservation form</h1>
        <br />
        <label>
          {" "}
          Number of Guests:{" "}
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
          Guests Name:{" "}
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
          Phone Number :{" "}
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
        <br/>
        <button type='submit' onClick={(e)=>getData(e)}>
          ALL
        </button>
      </form>
      <div>
      {isMessage.map((reservation, index) => (
        <div className="messages" style={{ margin: "20px" }} key={reservation._id}>
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
              onClick={() => 
                deleteMessage(reservation._id,reservation.numberofguests,reservation.Guestsname,reservation.Email,reservation.Phonenumber)}
            >
              DELETE
            </button>
            <button
              className="messages__button"
              type="submit"
              onClick={() => updateMessage(reservation._id,reservation.numberofguests,reservation.Guestsname,reservation.Email,reservation.Phonenumber)}
            >
              UPDATE
            </button>
          </div>
        </div>
      ))}
    </div>
    <br />
    </div>
  );
}

