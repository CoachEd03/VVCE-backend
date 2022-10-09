import { useState } from "react";
import "./message.scss";
export default function MessageBox({ ...props }) {
  const [isMessage, setIsMessage] = useState(
    props.data || {
      title: "",
      message: "",
    }
  );

  /**
   * @params event triggered on Submit click
   * send all the data on API to the database.
   */
  async function handleMessage(e) {
    e.preventDefault();
    let url = "http://localhost:5001/api/postMessages";
    url = props.id ? url + "?id=" + props.id : url;
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isMessage),
    })
      .then((response) => response.text())
      .then((res) => {
        alert("Thanks for the message");
        props.setShowPopup(false);
      })
      .catch((err) => console.log("Error in sending messages", err));

    setIsMessage({
      title: "",
      message: "",
    });
    // window.location.reload();
  }

  return (
    <div className="message">
      <form className="message__flex" onSubmit={(e) => handleMessage(e)}>
        <h2>
          <i>- - - - - Message Letter - - - - - </i>
        </h2>
        <div className="message__flex__box">
          <label className="message__flex__box__label">Title</label>
          <input
            className="message__flex__box__input"
            type="text"
            value={isMessage.title}
            onChange={(e) =>
              setIsMessage({ ...isMessage, title: e.target.value })
            }
          ></input>
        </div>
        <div className="message__flex__box">
          <label className="message__flex__box__label">Message</label>
          <textarea
            className="message__flex__box__input"
            value={isMessage.message}
            onChange={(e) =>
              setIsMessage({ ...isMessage, message: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="message__flex__button">
          Submit
        </button>
      </form>
    </div>
  );
}
