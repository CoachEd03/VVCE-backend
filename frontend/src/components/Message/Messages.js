import { useState, useEffect } from "react";
import "./message.scss";
import MessageBox from "./MessageBox";
//import GetMeal from "../getMeal";

export default function Message() {
  const [isMessage, setIsMessage] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [messagedata, setMessageData] = useState({});
  const [id,setID]=useState("");

  useEffect(() => {
    
    fetch("http://localhost:5001/api/getMessages")
      .then((response) => response.json())
      .then((res) => setIsMessage(res))
      .catch((err) => console.log("Error in sending messages", err));
  }, [messagedata]);


  async function updateMessage(id, title, message) {
    console.log("update", id);
    setMessageData({ id, title, message });
    let editMessage = isMessage.find((ele) => ele.id !== id);
    console.log(editMessage);
    console.log("message", messagedata);
    // await fetch("http://localhost:5001/api/updateMessages", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(isMessage),
    // })
    //   .then((response) => response.text())
    //   .then((res) => alert(res))
    //   .catch((err) => console.log("Error in sending messages", err));

  }, []);
  async function deleteMessage(id) {
    const url = "http://localhost:5001/api/delete";
    await fetch(url+"/"+id).then((res)=> console.log("delete")).catch((err) => console.log(err));
    window.location.reload();
  }
  async function updateMessage(id, title, message) {
    console.log("update", id);
    setId(id);

    setShowPopup(true);
  }

  return (
    <div>
      {showPopup ? (
        <MessageBox
          id={id}
          setID={setID}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setMessageData={setMessageData}

        />
      ) : (
        ""
      )}
      {isMessage.map((mess, index) => (
        <div className="messages" style={{ margin: "20px" }} key={mess._id}>
          <div className="messages__show">
            <span>
              <p>{mess.title}</p>
              <p>{mess.ingr1}</p>
             
            </span>
          </div>
          <div>
            <button
              className="messages__button"
              type="submit"
              //onClick={() => deleteMessage(id,mealName,ingr1,ingr2,type,price,courseMeal)}
            >
              Update
            </button>
            <button
              className="messages__button"
              style={{ backgroundColor: "rgb(173, 30, 30)" }}
              onClick={() => deleteMessage(mess._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
