import React from 'react'
import { withRouter } from 'react-router'

function Asia() {

  // const asia = props.subregion.filter(region => region.Region === "Asia")
// console.log(asia)
  return (
    <div>

      <div className="asia"><h1>Asia</h1></div>

      <div>Central Asia</div>
      <div>Eastern Asia</div>
      <div>South-Eastern Asia</div>
      <div>Southern Asia</div>
      <div>Western Asia</div>

    </div>
  )
}

export default withRouter (Asia)