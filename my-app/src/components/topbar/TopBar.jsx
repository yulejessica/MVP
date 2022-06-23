import { Link } from "react-router-dom";
import "./topbar.css";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useState } from "react";

export default function Topbar() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname='/';
    })
  }

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {isAuth && <li className="topListItem" onClick={signUserOut}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {isAuth ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/7407303/pexels-photo-7407303.jpeg?cs=srgb&dl=pexels-cottonbro-7407303.jpg&fm=jpg"
              alt=""
            />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}