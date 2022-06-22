import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import './singlepost.css';


export default function SinglePost(){
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/'+ path);
      // console.log('res for get single post', res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.desc);
    }
    getPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: post.username },
      })
      window.location.replace('/')
    }catch(err) {
      console.log('err while deleting post', err)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
       username: post.username, title:title, description: description ,
      })
      // window.location.reload();
      setUpdateMode(false);
    }catch(err) {
      console.log('err while deleting post', err)
    }
  }

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
        { updateMode ?
          <input type="text"
          value ={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          />
          : (
          <h1 className="singlePostTitle">
            {post.title}
            {/* {post.username === user.username && ( */}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
                ></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            {/* )} */}
          </h1>
          )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
             <b>{post.username}</b>
             </Link>
            </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
          {updateMode ? <textarea className="singlePostDescriptionInput" value={description} onChange={(e) => setDescription(e.target.value)}/> :
            <p className="singlePostDescription">
            {post.description}
            </p>
          }
          {
            updateMode &&
              <button className="singlePostButton" onClick={handleUpdate}>Update</button>
          }
        </div>
      </div>

    </div>
  )
}