import React from 'react'
import { withRouter } from "react-router-dom"


function Countries(props) {
  console.log(props.data);
  
  // const data = props.data.map(region => region.SubRegion === props.match.params.SubRegion)
  // // console.log(data)
  // console.log(data)

  return (
    <div>

      {props.data.map(country =>
        <h2>{country}</h2>
        )}
      {/* <h2>{data.Name}</h2> */}
    
      {/* {props.westAfrica.map(data =>
          <h4>{data.Name}</h4>
          )} */}
      

    </div>
  )
}
export default withRouter (Countries)