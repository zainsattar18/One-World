import React from 'react'


import { Link } from "react-router-dom"


export default function Continents(props) {

  // const cont = props.continent.find(area => area.SubRegion === props.match.params.SubRegion)

  return (
    <div>
      <div className="select">Please Select a Continent</div>
     
      <Link to={`/Africa`}>
        <div className="africa">Africa</div>
        </Link>

        <Link to={`/Antarctica`}>
          <div className="antarctica">Polar</div>
        </Link>

        <Link to={`/Asia`}>
        <div className="asia">Asia</div>
        </Link>
      
        <Link to={`/Oceania`}>
          <div className="oceania">Oceania</div>
        </Link>
      
        <Link to={`/Europe`}>
          <div className="Europe">Europe</div>
        </Link>

        <Link to={`/NorthAmerica`}>
          <div className="north">North America</div>
        </Link>

        <Link to={`/SouthAmerica`}>
          <div className="south">South America</div>
        </Link>
      
      </div>
  )
}
