import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import CentralAsia from "./CentralAsia"
import EasternAsia from "./EasternAsia"
import SouthEasternAsia from "./SouthEasternAsia.jsx"
import SouthernAsia from "./SouthernAsia"
import WesternAsia from "./WesternAsia"


function AsiaCountries() {
  return (
    <div>

      <Route path="/Asia/CentralAsia">
        <CentralAsia />
      </Route>

      <Route path="/Asia/EasternAsia">
        <EasternAsia />
      </Route>

      <Route path="/Asia/SouthEasternAsia">
        <SouthEasternAsia />
      </Route>

      <Route path="/Asia/SouthernAsia">
        <SouthernAsia />
      </Route>

      <Route path="/Asia/WesternAsia">
        <WesternAsia />
      </Route>
    </div>
  )
}

export default withRouter(AsiaCountries)