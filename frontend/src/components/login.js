import React,{useState} from "react";
import "./Register.css";
function Login() {
    const [login, setLogin] = useState({
      email: "",
    });
    function saveSubmit(e) {
        e.preventDefault();
        console.log(login);
    }
    return (
        <div>
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
                    Password: <input type="password" name="pass" required />
                </label>
                <br />
                <button type="submit" value="Submit">
                    Login
                </button>
            </form>
        </div>);
}

export default Login;
