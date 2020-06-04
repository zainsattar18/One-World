import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"


function NorthAmerica() {
  return (
    <div>
      <div className="subRegion">
        <h1 className="region">North America</h1>
      </div>

      <div className="sub">
        <Link to={`/NorthAmerica/NorthAmerica`}>
          <button>
            <div className="name"> North America</div>
            </button>
        </Link>

        <Link to={`/NorthAmerica/Caribbean`}>
          <button>
            <div className="name">Caribbean</div>
            </button>
        </Link>
      </div>


    </div>
  )
}

export default withRouter(NorthAmerica)