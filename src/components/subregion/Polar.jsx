import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Polar() {

  return (
    <div>
      <div className="polar">
        <h1>Polar</h1>
      </div>
      <Link to={`/Polar/Antarctica`}>
        <div>Antarctica</div>
      </Link>
    </div>
  )
}
export default withRouter(Polar)