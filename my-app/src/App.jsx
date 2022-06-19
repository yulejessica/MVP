// import axios from 'axios';
import React from 'react';
import TopBar from './components/topbar/TopBar.jsx';
import Home from './pages/home/Home.jsx';
import Single from "./pages/single/Single.jsx";
import Write from './pages/write/Write.jsx';
import Setting from './pages/setting/Setting.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/register" element={user ? <Home /> : <Register />} />
         <Route path="/login" element={user ? <Home /> : <Login />}/>
         <Route path="/write" element={user ? <Write /> : <Register />} />
         <Route path="/setting" element={user ? <Setting /> : <Register />} />
         <Route path="/post/:postId" element={<Single />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;




// class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//         currentName: ''
//     };
//   }

//   componentDidMount () {
//       this.oneProduct();
//   }

//   oneProduct () {
//     axios.get('/oneProduct')
//       .then((res) => {
//         console.log('res?', res);
//         this.setState({
//           currentName: res.data.brand.displayName
//         });
//       });
//     }

//   render() {
//     return (
//       <div className="App">
//         <h1>Blog</h1>
//         {/* <p>{this.state.currentName}</p> */}
//         <TopBar />
//         {/* <Home />
//         <Single /> */}
//         {/* <Write /> */}
//         {/* <Setting /> */}
//         {/* <Login /> */}
//         <Register />
//       </div>
//     );
//   }
// }