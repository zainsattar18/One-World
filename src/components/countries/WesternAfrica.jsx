import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom'
import Country from "../country/Country"

function WesternAfrica(props) {
  const westAfrica = props.data && props.data.filter(region => region.SubRegion === "Western Africa")
  // console.log(westAfrica)

  const display = westAfrica.map(info => info.Name)
   
  console.log(display)

  return (
    <div>
      
      
      <h1>Countries</h1>
        
        <Link to = {`/country/:Name`}>
          <h2>{display[0]}</h2>
          <Country
            country={props.westAfrica}
          />
        </Link>

        {/* <h2>{display[1]}</h2> */}

        {/* <h3>{display} </h3> */}
      
        
      
    </div>
  )
}
export default withRouter (WesternAfrica)