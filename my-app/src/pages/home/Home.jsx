import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components//header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const search = location.search;
  // console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      // console.log('res for all posts', res.data);
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])

  return (
    <>
        <Header />
         <div className="home">
          <Posts posts={posts}/>
          <Sidebar />


      </div>
    </>
  );
}