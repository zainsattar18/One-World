import React from 'react'
import { withRouter } from 'react-router-dom'
import "../css/Country.css"

function Country(props) {
  // console.log(props.data)
  const info = props.data.find((country) => country.Name === props.match.params.Name)
  // console.log(info)

 

  return (
    <div>
      {info && <div key={info.Name}>

        <div className="main">
          <div className="flagPng"><img src={info.FlagPng} alt={info.Name} width="300px" /></div>
          <div className="infoArea">
            <div className="name"><strong>Country:</strong> {info.Name}</div>
            <div className="nativeName"><strong>Native Name:</strong> {info.NativeName}</div>
            <div className="currency">Currency: {info.CurrencyName}</div>
            <div className="symbol">Currency Symbol: {info.CurrencySymbol}</div>
            <div className="lat">Latitude: {info.Latitude}</div>
            <div className="long">Longitude: {info.Longitude}</div>
          </div>
        </div>

      </div>}

    </div>
  )
}
export default withRouter(Country)