import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
