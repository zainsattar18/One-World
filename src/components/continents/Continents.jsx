import React from 'react'


import { Link } from "react-router-dom"


export default function Continents(props) {

  return (
    <div>
      <div className="select">Please Select a Continent</div>
     
      <Link to={`/country/${props.continent.SubRegion}`}>
        <div className="africa">Africa</div>
        </Link>

        <Link to={`/country/${props.continent.SubRegion}`}>
          <div className="antarctica">Antarctica</div>
        </Link>

        <Link to={`/country/${props.continent.SubRegion}`}>
        <div className="asia">Asia</div>
        </Link>
      
        <Link to={`/country/${props.continent.SubRegion}`}>
          <div className="oceania">Australia & Oceania</div>
        </Link>
      
        <Link to={`/country/${props.continent.SubRegion}`}>
          <div className="Europe">Europe</div>
        </Link>

        <Link to={`/country/${props.continent.SubRegion}`}>
          <div className="north">North America</div>
        </Link>

        <Link to={`/country/${props.continent.SubRegion}`}>
          <div className="south">South America</div>
        </Link>
      
      </div>
  )
}
