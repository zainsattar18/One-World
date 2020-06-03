import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Oceania() {
  return (
    <div>
      <div className="oceania">
        <h2> Oceania </h2></div>
      
    <Link to={`/Oceania/Australia&NewZealand`}>
      <div>Australia & New Zealand</div>
      </Link>
      <Link to={`/Oceania/Melanesia`}>
      <div>Melansia</div>
      </Link>
      <Link to={`/Oceania/Micronesia`}>
      <div>Micronesia</div>
      </Link>
      <Link to={`/Oceania/Polynesia`}>
      <div>Polynesia</div>
      </Link>
    </div>
  )
}


export default withRouter (Oceania)