import React from 'react'
import { withRouter, Link} from "react-router-dom"


function Africa() {
    return (
    <div>
      <div className="africa">
        <h1>Africa</h1>
      </div>            
        
        <div className="afr">
          
          <Link to={`/Africa/EasternAfrica`}>
          <div>Eastern Africa</div>
          </Link>
        
          <Link to={`/Africa/MiddleAfrica`}>
          <div>Middle Africa</div>
          </Link>
        
          <Link to={`/Africa/NorthernAfrica`}>
          <div>Northern Africa</div>
          </Link>
        
          <Link to={`/Africa/SouthernAfrica`}>
          <div>Southern Africa</div>
          </Link>
        
          <Link to={`/Africa/WesternAfrica`}>
          <div>Western Africa</div>    
          </Link>
                 
        
      </div>
        
    </div>
  )
}
export default withRouter (Africa)