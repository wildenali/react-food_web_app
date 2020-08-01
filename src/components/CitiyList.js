import React from 'react'
import CityCard from './CityCard'

const CityList = (props) => (
  <>
    <div className="row">
      <div className="col-12 text-center">
        <h3>{props.title}</h3>
        { props.showSubtitle === true && props.subtitle !== '' && 
          <h6 className="text-muted">Search result for keyword '{props.subtitle}'</h6>
        }
      </div>
    </div>
    <div className="row">

      { props.kotakota == null ? (
        <div className="col">
          <p>Loading...</p>
        </div>
      ) : (
        props.kotakota.map(city =>
        <CityCard key={city.id} kota={city} />
      ))}

    </div>
  </>
)

export default CityList