import React from 'react'
import {withRouter, Link} from "react-router-dom"

function Africa(props) {
  // const africa = props.subregion.filter(region => region.Region === "Africa")
  // console.log(africa)

  return (
    <div>
      <div className="africa">
        <h1>Africa</h1>
      </div>
      <div className="afr">
        
        <div>Eastern Africa</div>
        
           
          <div>Middle Africa</div>
          
          <div>Northern Africa</div>

          <div>Southern Africa</div>
        
        <Link to={`/country/${props.westAfrica.Name}`}>
        <div>
          <h3>Western Africa</h3>
        </div>
        </Link>

        {/* {props.westAfrica.map(data =>
          <h4>{data.Name}</h4>
          )} */}
        
        
      </div>
    </div>
  )
}
export default withRouter (Africa)