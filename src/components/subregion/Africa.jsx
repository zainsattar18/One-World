import React from 'react'
import { withRouter, Link} from "react-router-dom"
import "../css/Subregion.css"

function Africa() {
    return (
    <div>
      <div className="subRegion">
        <h1 className="region">Africa</h1>
      </div>            
        
        <div className="sub">
          
          <Link to={`/Africa/EasternAfrica`}>
              <button>
              <div className="name">Eastern Africa</div>
              </button> 
          </Link>
        
          <Link to={`/Africa/MiddleAfrica`}>
            <button>
              <div className="name">Middle Africa</div>
              </button>
          </Link>
        
          <Link to={`/Africa/NorthernAfrica`}>
            <button>
              <div className="name">Northern Africa</div>
              </button>
          </Link>
        
          <Link to={`/Africa/SouthernAfrica`}>
            <button>
              <div className="name">Southern Africa</div>
              </button>
          </Link>
        
          <Link to={`/Africa/WesternAfrica`}>
            <button>
              <div className="name">Western Africa</div>  
              </button>    
          </Link>
                 
        
      </div>
        
    </div>
  )
}
export default withRouter (Africa)