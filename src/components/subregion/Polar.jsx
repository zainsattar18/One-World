import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"


function Polar() {

  return (
    <div>
      <div className="subRegion">
        <h1 className="region">Polar</h1>
      </div>

      <div className="sub">

        <Link to={`/Polar/Antarctica`}>
          <button>
            <div className="name">Antarctica</div>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default withRouter(Polar)