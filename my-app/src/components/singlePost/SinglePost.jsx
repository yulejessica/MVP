import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import './singlepost.css';
// import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function SinglePost(){
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/'+ path);
      // console.log('res for get single post', res.data);
      setPost(res.data)
    }
    getPost();
  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo &&
        <img src={post.photo}
          alt=""
          className="singplePostImg"
        />
        }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
             <b>{post.username}</b>
             </Link>
            </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
          <p className="singlePostDescription">
          {post.description}
          </p>

        </div>
      </div>

    </div>
  )
}