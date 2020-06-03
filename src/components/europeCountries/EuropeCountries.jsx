import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import EasternEurope from "./EasternEurope"
import WesternEurope from "./WesternEurope"
import NorthernEurope from "./NorthernEurope"
import SouthernEurope from "./SouthernEurope"

function EuropeCountries() {
  return (
    <div>
      <Route path="/Europe/EasternEurope">
        <EasternEurope />
      </Route>

      <Route path="/Europe/WesternEurope">
        <WesternEurope />
      </Route>

      <Route path="/Europe/NorthernEurope">
        <NorthernEurope />
      </Route>

      <Route path="/Europe/SouthernEurope">
        <SouthernEurope />
      </Route>

    </div>
  )
}
export default withRouter(EuropeCountries)