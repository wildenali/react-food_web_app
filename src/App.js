import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import City from './pages/City';
import RestaurantDetail from './pages/RestaurantDetail';

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/city/:city_id" component={City}></Route>
        <Route path="/restaurant/:restaurant_id" component={RestaurantDetail}></Route>
        <Footer />
      </Router>
    );
  }
}

export default App;
