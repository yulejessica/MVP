import './register.css';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password
      });
      // console.log('res from login',res.data);
      res.data && window.location.replace('/login');
    }catch(err) {
      // console.log('error while submitting new register', err);
      setErr(true);
    }
  }
  return (
    <div className="regster">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSumbit}>
           <label> Username </label>
          <input
          className="registerInput"
          type="text"
          placeholder="Enter Username"
          onChange={e => setUsername(e.target.value)}/>
          <label> Email </label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}/>
          <label> Password </label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}/>
          <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login"> Login </Link>
        </button>
        {err && <span>Oh no, something is not right. </span>}
    </div>
  )
}