import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"

function SouthAmerica() {
  return (
    <div>

      <div className="subRegion">
        <h1 className="region">South America</h1>
      </div>

      <div className="sub">
        <Link to={`/SouthAmerica/CentralAmerica`}>
          <button>
            <div className="name">Central America</div>
          </button>
        </Link>


        <Link to={`SouthAmerica/SouthAmerica`}>
          <button>
            <div className="name">South America</div>
          </button>
        </Link>
      </div>

    </div>
  )
}
export default withRouter(SouthAmerica)