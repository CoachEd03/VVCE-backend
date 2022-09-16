function Register() {
    return (
        <div>
        <form method="POST">
            <b>Register form</b><br/>
            <label> First Name: <input type="text" name="fname" required/>
            </label><br/>
            <label> Last Name: <input type="text" name="lname" required/>
            </label><br/>
            <label> Email: <input type="email" name="email" required/>
            </label><br/>
            <label> Password: <input type="password" name="pass" required/>
            </label><br/>
            <label> Repeat Password: <input type="password" name="rpass" required/>
            </label><br/>
            <input type="submit" value="Sign UP" />
        </form>
        </div>);
  }
  
export default Register;
  