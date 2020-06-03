import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import EasternAfrica from './EasternAfrica'
import NorthernAfrica from './NorthernAfrica'
import WesternAfrica from './WesternAfrica'
import SouthernAfrica from "./SouthernAfrica"
import MiddleAfrica from "./MiddleAfrica"

function AfricanCountries() {
  return (
    <div>
      <Route path="/Africa/EasternAfrica">
        <EasternAfrica />
      </Route>

      <Route path="/Africa/NorthernAfrica">
        <NorthernAfrica />
      </Route>

      <Route path="/Africa/WesternAfrica">
        <WesternAfrica />
      </Route>

      <Route path="/Africa/SouthernAfrica">
        <SouthernAfrica />
      </Route>

      <Route path="/Africa/MiddleAfrica">
        <MiddleAfrica />
      </Route>


    </div>
  )
}

export default withRouter(AfricanCountries)
