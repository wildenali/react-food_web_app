import React from 'react'
import CityCard from './CityCard'

const FeaturedCities = (props) => (
  <>
    <div className="row">
      <div className="col-12 text-center">
        <h3>Featured Cities</h3>
      </div>
    </div>
    <div className="row">

      {props.kotakota.map(city =>
        <CityCard key={city.id} kota={city} />
      )}

    </div>
  </>
)

export default FeaturedCities