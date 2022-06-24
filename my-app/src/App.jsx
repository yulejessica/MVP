import React from 'react';
import TopBar from './components/topbar/TopBar.jsx';
import Home from './pages/home/Home.jsx';
import Single from "./pages/single/Single.jsx";
import Write from './pages/write/Write.jsx';
import Login from './pages/login/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <TopBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}/>
         <Route path="/write" element={!isAuth ? <Login setIsAuth={setIsAuth}/> : <Write />} />
         <Route path="/post/:postId" element={<Single />} />
        </Routes>
    </Router>
  )
}
export default App;

