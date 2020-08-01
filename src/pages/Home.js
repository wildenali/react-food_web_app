import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome'
import SearchCity from '../components/SearchCity'
import CityList from '../components/CitiyList'
import axios from 'axios'

class Home extends Component {
  
  // Ingat bahwa jika kita tidak memerlukan state,
  // kita dapat menggunakan stateless component (functional component),
  // sedangkan jika kita memerlukan state dalam component,
  // maka kita gunakan statefull component (class component)
  constructor() {
    super()
    this.state = {
      featuredCities: null,
      citiesResultSearch: null,
      keyword: ''
    }
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value })
  }

  searchHandler = () => {
    let keyword = this.state.keyword
    var url = `https://developers.zomato.com/api/v2.1/cities`
    axios.get(url, {
      headers: {
        'user-key' : 'b375f32a923d0972f5a2f886d972e651'
      },
      params: {
        q: keyword
      }
    })
      .then(({ data }) =>  {
        if (data.status === 'success') {
          this.setState({ citiesResultSearch: data.location_suggestions })
        }
      })
      .catch(err => console.log(err))
  }

  getFeaturedCities = () => {
    var url = "https://developers.zomato.com/api/v2.1/cities"
    axios.get(url, {
        headers: {
            'user-key': 'b375f32a923d0972f5a2f886d972e651'
        },
        params: {
            city_ids: "74,11052,170"
        }
    }).then(({data}) => {
        if (data.status === "success") {
            this.setState ( {featuredCities: data.location_suggestions})
        }
    }).catch(err => console.log(err));
  };

  componentDidMount() {
    this.getFeaturedCities();
  }

  render() {
    // const citiesDummy = [
    //   { id: 74, name: 'Jakarta', country_name: 'Indonesia' },
    //   { id: 11052, name: 'Bandung', country_name: 'Indonesia' },
    //   { id: 170, name: 'Bali', country_name: 'Indonesia' },
    // ]
    return (
      <div>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList title={'Featured Cities'} kotakota={this.state.featuredCities} />
          
          {/* Fitur Pencarian Kota Start */}
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {/* Fitur Pencarian Kota End */}

          {/* Search Result */}
          <CityList title={'Search Result'} kotakota={this.state.citiesResultSearch} /> 
        </div>
      </div>

    )
  }
}

export default Home