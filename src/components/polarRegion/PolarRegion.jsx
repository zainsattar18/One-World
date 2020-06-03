import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import Antarctica from "./Antarctica"

function PolarRegion() {
  return (
    <div>
      
      <Route path="/Polar/Antarctica">
        <Antarctica />
      </Route>

    </div>
  )
}
export default withRouter (PolarRegion)