import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import NorthAmerica from "./NorthAmerica"
import Caribbean from "./Caribbean"

function NorthAmericaCountries() {
  return (
    <div>
      <Route path="/NorthAmerica/NorthAmerica">
        <NorthAmerica />
      </Route>

      <Route path="/NorthAmerica/Caribbean">
        <Caribbean />
      </Route>

      
    </div>
  )
}

export default withRouter(NorthAmericaCountries)