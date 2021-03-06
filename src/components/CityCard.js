import React from 'react'
import { Link } from 'react-router-dom'


// ini functional component (stateless component) karena tidak memerlukan state di dalam component
const CityCard = (props) => (
  <div className="col-4">
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h4 className="card-title">{props.kota.name}</h4>
        <p>{props.kota.country_name}</p>
        <Link to={`/city/${props.kota.id}`} className="card-text">See restaurant in {props.kota.name}</Link>
      </div>
    </div>
  </div>
)

export default CityCard