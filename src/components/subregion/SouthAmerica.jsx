import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function SouthAmerica() {
  return (
    <div>

      <div className="southAmerica">
        <h1>South America</h1>
      </div>

      <div className="south">
        <Link to={`/SouthAmerica/CentralAmerica`}>
          <div>Central America</div>
        </Link>
        <Link to={`SouthAmerica/SouthAmerica`}>
          <div>South America</div>
        </Link>
      </div>

    </div>
  )
}
export default withRouter(SouthAmerica)