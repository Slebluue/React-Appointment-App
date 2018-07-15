// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import './styles/App.css';

//  Components
// -----------------------------------------------
import Header from './Components/Header';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
