import React,{useState} from "react";
import "./Register.scss";
function Login() {
    const [login, setLogin] = useState({
      email: "",
      pass: "",
    });
    function saveSubmit(e) {
        e.preventDefault();
        console.log(login);
        callLoginApi();
    }
    async function callLoginApi() {
        await fetch("http://localhost:5001/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        })
          .then((res) => {
            return res.text();
          })
          .then ((r) => alert(r))
          .catch((err) => console.log(err));
      }
    return (
        <div className="reg">
            <form onSubmit={(e) => saveSubmit(e)}>
                <b>Login form</b>
                <br />
                <label>
                    {" "}
                    Email:{" "}
                    <input
                        type="email"
                        name="email"
                        value={login.email}
                        onChange={(e) =>
                        setLogin({ ...login, email: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <label>
                    {" "}
                    Password: <input type="password" name="pass" value={login.pass}
                        onChange={(e) =>
                        setLogin({ ...login, pass: e.target.value })
                        } required />
                </label>
                <br />
                <button type="submit" value="Submit">
                    Login
                </button>
            </form>
        </div>);
}

export default Login;
