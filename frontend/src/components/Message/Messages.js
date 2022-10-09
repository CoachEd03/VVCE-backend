import { useState, useEffect } from "react";
import "./message.scss";
import MessageBox from "./MessageBox";

export default function Message() {
  const [isMessage, setIsMessage] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState({});
  const [id,setId] = useState("")
  useEffect(() => {
    // Update the messge using the browser API
    fetch("http://localhost:5001/api/getMessages")
      .then((response) => response.json())
      .then((res) => setIsMessage(res))
      .catch((err) => console.log("Error in sending messages", err));
  }, []);
  async function deleteMessage(id) {
    const url = "http://localhost:5001/api/delete";
    await fetch(url+"/"+id).then((res)=> console.log("delete")).catch((err) => console.log(err));
    window.location.reload();
  }
  async function updateMessage(id, title, message) {
    console.log("update", id);
    // setData({ id, title, message });
    // let editMessage = isMessage.find((ele) => ele.id !== id);
    // console.log(editMessage);
    // console.log("data", data);
    setId(id);
    setShowPopup(true);
  }

  return (
    <div>
      {showPopup ? (
        <MessageBox
          id={id}
          setId = {setId}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          data={data}
          setData = {setData}
        />
      ) : (
        ""
      )}
      {isMessage.map((mess, index) => (
        <div className="messages" style={{ margin: "20px" }} key={mess._id}>
          <div className="messages__show">
            <span>
              <h3>{mess.title}</h3>
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
