import React, { Component } from 'react';
import './App.css';
import CityCard from './components/CityCard'
import NavBar from './components/NavBar'
import ImageAndWelcome from './components/ImageAndWelcome'

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
          <div className="row">
            <div className="col-12 text-center">
              <h3>Featured Cities</h3>
            </div>
          </div>
          <div className="row">

            {citiesDummy.map(city =>
              <CityCard key={city.id} kota={city} />
            )}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
