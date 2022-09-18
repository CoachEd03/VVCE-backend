import { useState } from "react";
function Register() {
  const [register, setRegister] = useState({
    fname: "",
    email: "",
  });
  function saveSubmit(e) {
    e.preventDefault();
    console.log(register);
    // front-end api will be called here and register will be passed as body.
  }
  return (
    <div>
      <form onSubmit={(e) => saveSubmit(e)}>
        <b>Register form</b>
        <br />
        <label>
          {" "}
          First Name:{" "}
          <input
            type="text"
            name="fname"
            value={register.fname}
            onChange={(e) =>
              setRegister({ ...register, fname: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Last Name: <input type="text" name="lname" required />
        </label>
        <br />
        <label>
          {" "}
          Email:{" "}
          <input
            type="email"
            name="email"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Ph no: <input type="number" name="phno" required />
        </label>
        <br />
        <label>
          {" "}
          Password: <input type="password" name="pass" required />
        </label>
        <br />
        <label>
          {" "}
          Repeat Password: <input type="password" name="rpass" required />
        </label>
        <br />
        <button type="submit" value="Sign UP">
          Register
        </button>
      </form>
      {/* <a src="./login.js">Already a member login</a> */}
    </div>
  );
}

export default Register;
