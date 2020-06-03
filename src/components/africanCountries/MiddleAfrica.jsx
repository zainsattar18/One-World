import React, { Component } from 'react'
import axios from "axios"
import { withRouter, Link } from 'react-router-dom'

class MiddleAfrica extends Component {
  constructor() {
    super();
    this.state = {
      country: []
    }
  }

  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?pRegion=Africa&pSubRegion=Middle%20Africa")
    

    this.setState({
      country: country.data.Response

    })

  }


  render() {
    return (
      <div>
        {this.state.country.map(country =>
          <Link to={`/country/${country.Name}`}>
            <div key={country.Name}>
              <h2>{country.Name} </h2>
              <img src={country.FlagPng} alt="Country" width="200px" />
            </div>
          </Link>
        )}


      </div>
    )
  }
}

export default withRouter(MiddleAfrica)