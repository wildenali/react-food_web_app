import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ImageAndWelcome from './components/ImageAndWelcome'
import FeaturedCities from './components/FeaturedCities'

class App extends Component {
  render() {

    const citiesDummy = [
      { id: 74, name: 'Jakarta', country_name: 'Indonesia' },
      { id: 11052, name: 'Bandung', country_name: 'Indonesia' },
      { id: 170, name: 'Bali', country_name: 'Indonesia' },
    ]
    
    return (
      <div>
        <NavBar />
        <ImageAndWelcome />

        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <FeaturedCities kotakota={citiesDummy} />
        </div>

      </div>
    );
  }
}

export default App;
