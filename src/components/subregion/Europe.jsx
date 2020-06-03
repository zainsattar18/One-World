import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Europe() {
  return (
    <div>
      <div className="europe">
        <h1>Europe</h1></div>

      <Link to={`/Europe/EasternEurope`}>
        <div>Eastern Europe</div>
      </Link>
      <Link to={`/Europe/NorthernEurope`}>
        <div>Northern Europe</div>
      </Link>
      <Link to={`/Europe/SouthernEurope`}>
        <div>Southern Europe</div>
      </Link>
      <Link to={`/Europe/WesternEurope`}>
        <div>Western Europe</div>
      </Link>
    </div>
  )
}
export default withRouter(Europe)