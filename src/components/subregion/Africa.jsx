import React from 'react'
import { withRouter, Link, Route } from "react-router-dom"
import WesternAfrica from "../countries/WesternAfrica"
import Countries from "../countries/Countries"

function Africa(props) {
  const westAfrica = props.data && props.data.filter(region => region.SubRegion === "Western Africa")
  // const eastAfrica = props.subregion && props.subregion.filter(region => region.SubRegion === "Eastern Africa")
  // const display = westAfrica.map(info => info.Name)

  // console.log(westAfrica)
  // console.log(display)

  // console.log(eastAfrica)
  // console.log(northAfrica)
  // console.log(midAfrica);
  // console.log(southAfrica);
  

  // const cont = props.subregion && props.subregion.find(area => area.SubRegion === props.match.params.SubRegion)

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