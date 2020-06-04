import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import "../css/Subregion.css"


function Asia() {

  return (
    <div>
      <div className="subRegion">
        <h1 className= "region">Asia</h1>
      </div>

      <div className="sub">
        <Link to={`/Asia/CentralAsia`}>
          <button>
            <div className="name">Central Asia</div>
            </button>
        </Link> 
        
        <Link to={`/Asia/EasternAsia`}>
          <button>
            <div className="name">Eastern Asia</div>
            </button>
        </Link>
        
        <Link to={`/Asia/SouthEasternAsia`}>
          <button>
            <div className="name">South-Eastern Asia</div>
            </button>
        </Link>
        
        <Link to={`/Asia/SouthernAsia`}>
          <button>
            <div className="name">Southern Asia</div>
            </button>
        </Link>
        
        <Link to={`/Asia/WesternAsia`}>
          <button>
            <div  className="name">Western Asia</div>
            </button>
        </Link>

        </div>
    </div>
  )
}

export default withRouter (Asia)