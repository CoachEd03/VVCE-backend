import { useState, useEffect } from "react";
import "./message.scss";
import MessageBox from "./MessageBox";
//import GetMeal from "../getMeal";

export default function Message() {
  const [isMessage, setIsMessage] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [messageData, setmessageData] = useState({});
  const [updateData, setupdateData] = useState({
    title: "",
    message: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/getMessages")
      .then((response) => response.json())
      .then((res) => setIsMessage(res))
      .catch((err) => console.log("Error in sending messages", err));
  }, [messageData]);

  async function deleteMessage(id, title, message) {
    const url = "http://localhost:5001/api/delete";
    await fetch(url + "/" + id)
      .then((res) => res.text())
      .then((res) => {
        alert(res);
      })
      .catch((err) => console.log(err));
    setmessageData([title, message]);
  }
  async function updateMessage(id, title, message) {
    console.log("update", id);
    setId(id);
    setShowPopup(true);
    setupdateData({ title: title, message: message });
  }

  return (
    <div>
      {showPopup ? (
        <MessageBox
          id={id}
          setID={setId}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          data={updateData}
          setmessageData={setmessageData}
        />
      ) : (
        ""
      )}
      {isMessage.map((mess) => (
        <div className="messages" style={{ margin: "20px" }} key={mess._id}>
          <div className="messages__show">
            <span>
              <p>{mess.title}</p>
              <p>{mess.message}</p>
            </span>
          </div>
          <div>
            <button
              className="messages__button"
              type="submit"
              onClick={() => updateMessage(mess._id, mess.title, mess.message)}
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