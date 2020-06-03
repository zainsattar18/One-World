import React from 'react'
import { withRouter, Route } from "react-router-dom"
import SouthAmerica from "./SouthAmerica"
import CentralAmerica from "./CentralAmerica"

function SouthAmericanCountries() {
  return (
    <div>
      <Route path="/SouthAmerica/CentralAmerica">
        <CentralAmerica />
      </Route>

      <Route path="/SouthAmerica/SouthAmerica">
        <SouthAmerica />
      </Route>

    </div>
  )
}

export default withRouter(SouthAmericanCountries)