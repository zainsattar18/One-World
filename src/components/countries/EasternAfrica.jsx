import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from "axios"

class WesternAfrica extends Component {
  constructor() {
    super();
    this.state = {
      country:[]
    }
  }

  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?pRegion=Africa&pSubRegion=Eastern%20Africa")
    console.log(country)
    
    this.setState({
      country: country.data.Response
      
    })

  }


  render() {
    return (
      <div>
        {this.state.country.map(country =>
          <div>
            <h2>{country.Name} </h2>
            <img src={country.FlagPng} alt="Country" width="200px"/>            
            </div>
        )}
            
        
      </div>
    )
  }
}

export default withRouter (WesternAfrica)