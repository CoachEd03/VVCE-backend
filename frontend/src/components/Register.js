import React,{useState} from "react";
import "./Register.scss";
function Register() {
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    phno: "",
    pass: "",
    rpass: "",
  });
  function saveSubmit(e) {
    e.preventDefault();
    if(register.pass === register.rpass){
      console.log(register);
      
    }
    else {
      alert("Different passwords");
    }
    // front-end api will be called here and register will be passed as body.
  }
  return (
    <div className="reg">
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
          Last Name: {" "} <input type="text" name="lname" value={register.lname}
            onChange={(e) =>
              setRegister({ ...register, lname: e.target.value })
            } required />
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
          Ph no: {" "} <input type="text" name="phno" value={register.phno} onChange={(e) => setRegister({...register,phno: e.target.value})} required />
        </label>
        <br />
        <label>
          {" "}
          Password: <input type="password" name="pass" value={register.pass} onChange={(e) => setRegister({...register,pass: e.target.value})} required />
        </label>
        <br />
        <label>
          {" "}
          Repeat Password: <input type="password" name="rpass" value={register.rpass} onChange={(e) => setRegister({...register,rpass: e.target.value})} required />
        </label>
        <br />
        <button type="submit" value="Submit">
          Register
        </button>
      </form>
      <a href="./login" className="log"> Already a member login </a>
    </div>
  );
}

export default Register;
