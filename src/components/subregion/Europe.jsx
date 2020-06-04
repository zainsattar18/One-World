import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"


function Europe() {
  return (
    <div>
      <div className="subRegion">
        <h1 className="region">Europe</h1>
      </div>

      <div className="sub">
        <Link to={`/Europe/EasternEurope`}>
          <button>
            <div className="name">Eastern Europe</div>
            </button>
      </Link>
        <Link to={`/Europe/NorthernEurope`}>
          <button>
            <div className="name">Northern Europe</div>
            </button>
        </Link>
        
        <Link to={`/Europe/SouthernEurope`}>
          <button>
            <div className="name">Southern Europe</div>
            </button>
        </Link>
        
        <Link to={`/Europe/WesternEurope`}>
          <button>
            <div className="name">Western Europe</div>
            </button>
        </Link>
        </div>
    </div>
  )
}
export default withRouter(Europe)