import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Asia() {

  return (
    <div>
      <div className="asia">
        <h1>Asia</h1>
      </div>

      <Link to ={`/Asia/CentralAsia`}>
      <div>Central Asia</div>
      </Link> 
      <Link to ={`/Asia/EasternAsia`}>
      <div>Eastern Asia</div>
      </Link>
      <Link to ={`/Asia/SouthEasternAsia`}>
      <div>South-Eastern Asia</div>
      </Link>
      <Link to ={`/Asia/SouthernAsia`}>
      <div>Southern Asia</div>
      </Link>
      <Link to={`/Asia/WesternAsia`}>
      <div>Western Asia</div>
      </Link>
    </div>
  )
}

export default withRouter (Asia)