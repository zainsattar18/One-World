import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"


function Oceania() {
  return (
    <div>
      <div className="subRegion">
        <h2 className="region"> Oceania </h2>
      </div>
      
      <div className="sub">
      <Link to={`/Oceania/Australia&NewZealand`}>
        <button>
          <div className="name">Australia & New Zealand</div>
        </button>
      </Link>

      <Link to={`/Oceania/Melanesia`}>
        <button>
          <div className="name">Melansia</div>
        </button>
      </Link>

      <Link to={`/Oceania/Micronesia`}>
        <button>
          <div className="name">Micronesia</div>
        </button>
      </Link>

      <Link to={`/Oceania/Polynesia`}>
        <button>
          <div className="name">Polynesia</div>
        </button>
        </Link>
        </div>
    </div>
  )
}


export default withRouter(Oceania)