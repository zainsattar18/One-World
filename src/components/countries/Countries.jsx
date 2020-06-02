import React from 'react'
import { withRouter } from "react-router-dom"


function Countries(props) {
  const westAfrica = props.data && props.data.filter(region => region.SubRegion === "Western Africa")
  // console.log(props.data);
  const display = westAfrica.map(info => info.Name)
  
  return (
    <div>

      {props.data.map(country =>
        <h2>{country}</h2>
        )}
      
      

    </div>
  )
}
export default withRouter (Countries)