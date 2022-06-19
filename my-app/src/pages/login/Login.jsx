import './login.css';
import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div className="Login">
        {/* Single Post */}
        {/* <Sidebar /> */}
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label> Email </label>
          <input className="loginInput" type="text" placeholder="Enter Email"/>
          <label> Password </label>
          <input className="loginInput" type="password" placeholder="Enter Password"/>
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register"> Register </Link>
        </button>
    </div>
  )
}