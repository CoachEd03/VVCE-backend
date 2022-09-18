import {useState} from 'react'
function Register() {
    const[register,setRegister]= useState ({
        fname: "",
        email: ""
    })
    function Submit(e) {
        e.preventDefault()
        console.log("I have been clicked"+register)
    }
    return (
        <div>
        <form onClick={Submit}>
            <b>Register form</b><br/>
            <label> First Name: <input type="text" name="fname" value={register.fname} onChange={(e) => setRegister({ ...register, fname: e.target.value })} required/>
            </label><br/>
            <label> Last Name: <input type="text" name="lname" required/>
            </label><br/>
            <label> Email: <input type="email" name="email" required/>
            </label><br/>
            <label> Ph no: <input type="number" name="phno" required/>
            </label><br/>
            <label> Password: <input type="password" name="pass" required/>
            </label><br/>
            <label> Repeat Password: <input type="password" name="rpass" required/>
            </label><br/>
            <input type="submit" value="Sign UP" />
        </form>
        {/* <a src="./login.js">Already a member login</a> */}
        </div>);
  }

export default Register;
  