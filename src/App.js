import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ImageAndWelcome from './components/ImageAndWelcome'
import CityList from './components/CitiyList'
import SearchCity from './components/SearchCity';

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
          <CityList title={'Featured Cities'} kotakota={citiesDummy} />
          
          {/* Fitur Pencarian Kota Start */}
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
          />
          {/* Fitur Pencarian Kota End */}

          {/* Search Result */}
          <CityList title={'Search Result'} kotakota={citiesDummy} /> 

        </div>

      </div>
    );
  }
}

export default App;
