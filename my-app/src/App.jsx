// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import axios from 'axios';
import React from 'react';
// import styled from 'styled-components';

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
        <h1>Sephora</h1>
        <p>{this.state.currentName}</p>
      </div>
    );
  }
}

export default App;