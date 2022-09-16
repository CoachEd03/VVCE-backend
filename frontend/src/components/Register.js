function Register() {
    return (
      <form method="POST">
        <b>Register form</b><br/>
        <label> First Name: <input type="text" name="fname" required/>
        </label><br/>
        <label> Last Name: <input type="text" name="lname" required/>
        </label><br/>
        <input type="submit" value="Submit" />
    </form>);
  }
  
export default Register;
  