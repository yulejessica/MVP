import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">MVP</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/8116726/pexels-photo-8116726.jpeg?cs=srgb&dl=pexels-michaela-s-8116726.jpg&fm=jpg"
        alt=""
      />
    </div>
  )
}