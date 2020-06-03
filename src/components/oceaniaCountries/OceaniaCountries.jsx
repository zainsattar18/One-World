import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import AustraliaNewZealand from "./AustraliaNewZealand"
import Melanesia from "./Melanesia"
import Micronesia from "./Micronesia"
import Polynesia from "./Polynesia"

function OceaniaCountries() {
  return (
    <div>

      <Route path="/Oceania/Australia&NewZealand">
        <AustraliaNewZealand />
      </Route>

      <Route path="/Oceania/Melanesia">
        <Melanesia />
      </Route>

      <Route path="/Oceania/Micronesia">
        <Micronesia />
      </Route>
      <Route path="/Oceania/Polynesia">
        <Polynesia />
      </Route>

    </div>
  )
}
export default withRouter(OceaniaCountries)