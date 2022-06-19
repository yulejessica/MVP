import './sidebar.css';

export default function Sidebar() {
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
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Makeup</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Fitness</li>
          <li className="sidebarListItem">Dog</li>
          <li className="sidebarListItem">Tech</li>
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