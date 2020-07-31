import React, { Component } from 'react';
import './App.css';
import mainImage from './assets/images/aneka-makanan.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <a className="navbar-brand" href="/">KulinerAn</a>
        </nav>
        <div className="container-fluid">
          <div className="row" style={{ marginBottom: 30 }}>
            <img src={mainImage} width="100%" alt="aneka-makanan"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
