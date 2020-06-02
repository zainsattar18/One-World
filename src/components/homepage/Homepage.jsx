import React, { Component } from 'react'
import axios from "axios"
import Continents from '../continents/Continents'
import Country from "../country/Country"
// import Subregion from "../subregion/Subregion"
import Africa from "../subregion/Africa"
import Asia from "../subregion/Asia"
import Polar from "../subregion/Polar"
import NorthAmerica from "../subregion/NorthAmerica"
import SouthAmerica from "../subregion/SouthAmerica"
import Oceania from "../subregion/Oceania"
import Europe from "../subregion/Europe"
import Countries from "../countries/Countries"
import WesternAfrica from "../countries/WesternAfrica"

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
    
    this.setState({
      country: country.data.Response
      
    })

  }


  render() {
    return (
      <div>

        <Route path= "/" exact> 
          <Continents continent={this.state.country}/>
          </Route> 
        

          <div>  
          <Route path="/Africa" exact>
            <Africa data={this.state.country}/>
          </Route>

          <Route path ="/Antarctica" >
          <Polar />
          </Route>

          <Route path ="/Asia">
          <Asia />
          </Route>

          <Route path= "/Oceania">
          <Oceania subregion={this.state.country}/>
          </Route>

          <Route path= "/Europe">
          <Europe subregion={this.state.country}/>
          </Route>

          <Route path= "/NorthAmerica">
          <NorthAmerica subregion={this.state.country}/>
          </Route>

          <Route path= "/SouthAmerica">
          <SouthAmerica subregion={this.state.country}/>
          </Route>

          

            <Route path="continent/:SubRegion">
            <Countries data={this.state.country} />
            </Route>

          {/* <Route path="country/:Name">
          <Country data={this.state.country} />
          </Route> */}
          
          {/* <Route path="/Africa/WesternAfrica">
          <WesternAfrica data = {this.state.country}/>
          </Route> */}
         
        </div>

        
        
        
      </div>
    )
  }
}
