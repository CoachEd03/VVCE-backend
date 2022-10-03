import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
function Login() {
    const [login, setLogin] = useState({
      email: "",
      pass: "",
    });
    const [isAuth, setIsAuth] = useState(false);
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
          .then ((r) => {
            if(r === 'login successfull'){
              setIsAuth(true)
              console.log(r);
            }
            else{
              alert(r)
            }
          })
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
                </button> <p>{isAuth}</p>
                {isAuth?<Link to="/"></Link>:<Link to="/register"></Link>}
            </form>
        </div>);
}

export default Login;
