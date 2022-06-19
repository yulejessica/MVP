import './register.css';
import { Link } from "react-router-dom";

export default function Register(){
  return (
    <div className="regster">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
           <label> Username </label>
          <input className="registerInput" type="text" placeholder="Enter Username"/>
          <label> Email </label>
          <input className="registerInput" type="text" placeholder="Enter Email"/>
          <label> Password </label>
          <input className="registerInput" type="password" placeholder="Enter Password"/>
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login"> Login </Link>
        </button>
    </div>
  )
}