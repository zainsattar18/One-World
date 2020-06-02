import React, { Component } from 'react'
import axios from "axios"
import Continents from '../continents/Continents'
import Subregion from "../subregion/Subregion"

import Countries from "../countries/Countries"
import {Route, Link} from "react-router-dom"

export default class homepage extends Component {
  constructor() {
    super()
    this.state = {
      country: []
    }

  }

  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?")
    console.log(country)
    // const worldBank = await axios("https://cors-anywhere.herokuapp.com/https://api.worldbank.org/v2/country/us?format=json")
    // console.log(worldBank) 
    
    this.setState({
      country: country.data.Response
      
    })

  }


  render() {
    return (
      <div>

        <Route path= "/" exact> 
        <div>
          <Continents
            continent={this.state.country}
            />
          </div>
        </Route> 
        {/* home page */}

          <div>  
          <Route path="/country/:SubRegion" exact>
          <Subregion
            subregion ={this.state.country}
          />
          </Route>
          {/* second page */}

          <Route path="/country/:Name">
            <Countries
              country =  {this.state.country}
              />
          </Route>
         
        </div>

        
        
        
      </div>
    )
  }
}
