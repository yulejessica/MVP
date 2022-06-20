import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './sidebar.css';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/categories');
      // console.log('res for categories',res.data);
      setCategories(res.data);
    }
    getCategories();
  }, []);

  return (
    <div className="sidebar">
       <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
       </div>
       <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            categories.map(c => (
              <Link to={`/?category=${c.name}`} className="link">
                   <li className="sidebarListItem">{c.name}</li>
              </Link>

            ))
          }
        </ul>
       </div>
       <div className="sidebarItem">
       <span className="sidebarTitle">Follow</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
       </div>
    </div>
  )
}