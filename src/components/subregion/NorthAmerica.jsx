import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function NorthAmerica() {
  return (
    <div>
      <div className="northAmerica">
        <h1>North America</h1>
      </div>

      <Link to={`/NorthAmerica/NorthAmerica`}>
        <div> North America</div>
      </Link>

      <Link to={`/NorthAmerica/Caribbean`}>
        <div>Caribbean</div>
      </Link>


    </div>
  )
}

export default withRouter(NorthAmerica)