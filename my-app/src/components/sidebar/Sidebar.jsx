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
          src="https://images.pexels.com/photos/6920368/pexels-photo-6920368.jpeg?cs=srgb&dl=pexels-karolina-grabowska-6920368.jpg&fm=jpg"
          alt=""
        />
        <p>
          Hi, I am Jessica and this is my MVP app.
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