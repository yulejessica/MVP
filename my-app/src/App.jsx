import axios from 'axios';
import React from 'react';
import TopBar from './components/topbar/TopBar.jsx';
// import Header from './header/Header.jsx';
import Home from './pages/home/Home.jsx';
import Single from "./pages/single/Single.jsx";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        currentName: ''
    };
  }

  componentDidMount () {
      this.oneProduct();
  }

  oneProduct () {
    axios.get('/oneProduct')
      .then((res) => {
        console.log('res?', res);
        this.setState({
          currentName: res.data.brand.displayName
        });
      });
    }

  render() {
    return (
      <div className="App">
        <h1>Blog</h1>
        {/* <p>{this.state.currentName}</p> */}
        <TopBar />
        <Home />
        <Single />
      </div>
    );
  }
}

export default App;