import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ImageAndWelcome from './components/ImageAndWelcome'
import FeaturedCities from './components/FeaturedCities'

class App extends Component {

  // Ingat bahwa jika kita tidak memerlukan state,
  // kita dapat menggunakan stateless component (functional component),
  // sedangkan jika kita memerlukan state dalam component,
  // maka kita gunakan statefull component (class component)
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value })
  }

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
          
          {/* Fitur Pencarian Kota Start */}
          <div className="row" style={{ marginBottom: 30 }}>
            <div className="col">
              <h3>Cari Kota</h3>
              <div className="card">
                <div className="card-body">
                  <div className="form-row">
                    <div className="col-11">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Cari kota"
                        value={this.state.keyword}
                        onChange={this.changeKeywordHandler}
                      />
                    </div>
                    <div className="col-1">
                      <button className="btn btn-primary" type="button">Cariii...</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fitur Pencarian Kota End */}

        </div>

      </div>
    );
  }
}

export default App;
