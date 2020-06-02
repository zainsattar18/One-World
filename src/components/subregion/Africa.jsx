import React from 'react'
import { withRouter, Link, Route } from "react-router-dom"
import WesternAfrica from "../countries/WesternAfrica"
import Countries from "../countries/Countries"

function Africa(props) {
  const westAfrica = props.data && props.data.filter(region => region.SubRegion === "Western Africa")
  // const eastAfrica = props.subregion && props.subregion.filter(region => region.SubRegion === "Eastern Africa")
  // const northAfrica = props.subregion && props.subregion.filter(region => region.SubRegion === "Northern Africa")
  // const midAfrica = props.subregion && props.subregion.filter(region => region.SubRegion === "Middle Africa")
  // const southAfrica = props.subregion && props.subregion.filter(region => region.SubRegion === "Southern Africa")
  const display = westAfrica.map(info => info.Name)

  console.log(westAfrica)
  console.log(display)

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
        {props.data.map(country =>
      <div className="afr">
          
        
          <div>Eastern Africa</div>
        
           
          <div>Middle Africa</div>
          
          <div>Northern Africa</div>

          <div>Southern Africa</div>
        
          <Link to={`/continent/${country.SubRegion}`}>
            <div>Western Africa</div>
            {/* <WesternAfrica
          data = {props.westAfrica}         
          /> */}
            <Countries data={display} />

          </Link>
          

        {/* {props.westAfrica.map(data =>
          <h4>{data.Name}</h4>
          )} */}
        
        
      </div>
        )}
    </div>
  )
}
export default withRouter (Africa)