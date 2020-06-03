import React, { Component } from 'react'
import axios from "axios"
import Continents from '../continents/Continents'
import Country from "../country/Country"
import Africa from "../subregion/Africa"
import Asia from "../subregion/Asia"
import Polar from "../subregion/Polar"
import NorthAmerica from "../subregion/NorthAmerica"
import SouthAmerica from "../subregion/SouthAmerica"
import Oceania from "../subregion/Oceania"
import Europe from "../subregion/Europe"
import AfricanCountries from "../africanCountries/AfricanCountries"
import AsiaCountries from "../asiaCountries/AsiaCountries"
import EuropeCountries from "../europeCountries/EuropeCountries"
import OceaniaCountries from "../oceaniaCountries/OceaniaCountries"
import NorthAmericaCountries from "../northamericaCountries/NorthAmericaCountries"
import SouthAmericanCountries from "../southamericanCountries/SouthAmericanCountries"
import PolarRegion from "../polarRegion/PolarRegion"

import { Route } from "react-router-dom"


export default class homepage extends Component {
  constructor() {
    super()
    this.state = {
      country: []
    }

  }

  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?")
    // console.log(country)
    this.setState({
      country: country.data.Response

    })
  }


  render() {
    return (
      <div>

        <Route path="/" exact>
          <Continents continent={this.state.country} />
        </Route>


        <div>
          <Route path="/Africa" exact>
            <Africa data={this.state.country} />
          </Route>

          <Route path="/Antarctica" exact>
            <Polar />
          </Route>

          <Route path="/Asia" exact>
            <Asia />
          </Route>

          <Route path="/Oceania" exact>
            <Oceania subregion={this.state.country} />
          </Route>

          <Route path="/Europe" exact>
            <Europe subregion={this.state.country} />
          </Route>

          <Route path="/NorthAmerica" exact>
            <NorthAmerica subregion={this.state.country} />
          </Route>

          <Route path="/SouthAmerica" exact>
            <SouthAmerica subregion={this.state.country} />
          </Route>

          <AfricanCountries />
          <AsiaCountries />
          <EuropeCountries />
          <OceaniaCountries />
          <NorthAmericaCountries />
          <SouthAmericanCountries />
          <PolarRegion />

          <Route path="/country/:Name">
            <Country data={this.state.country} />
          </Route>



        </div>




      </div>
    )
  }
}
