import React from 'react'
import { withRouter } from 'react-router-dom'


function Country(props) {

  // const country = props.data.find(info => info.Name === props.match.params.Name)
  // console.log(data)
  

  return (
    <div>
      {/* <Route path="/Africa/WesternAfrica/:Name"></Route> */}
      <h4>
        {/* {country.Name} */}
      </h4>

      
    </div>
  )
}

export default withRouter (Country)