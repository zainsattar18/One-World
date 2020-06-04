import React from 'react'
import { Link } from "react-router-dom"

import '../css/Continent.css'


export default function Continents() {



  return (
    <div>

      <div className="select">Please Select A Continent</div>
      <div className="container">
        <div className="toptwo">
          <Link to={`/Africa`}>
            <div className="africa">
              <div className="nameAfrica">Africa</div>
              <img src="https://www.sciencesource.com/Doc/TR1_WATERMARKED/4/2/5/1/SS2122688.jpg?d63641192807" alt="Africa" />
            </div>
          </Link>

          <Link to={`/Antarctica`}>
            <div className="antarctica">
              <div className="namePolar">Polar</div>
              <img src="https://i.pinimg.com/originals/02/84/a3/0284a389a03df0e5ffaeddcd81b09c52.jpg" alt="Antarctica" />
            </div>
          </Link>
        </div>

        <div className="middletwo">
          <Link to={`/Asia`}>
            <div className="asia">
              <div className="nameAsia">Asia</div>
              <img src="https://i.pinimg.com/originals/5b/c9/60/5bc9604726371e871928b45cf3f40e69.jpg" alt="Asia" />
            </div>
          </Link>

          <Link to={`/Oceania`}>
            <div className="oceania">
              <div className="nameOceania">Oceania</div>
              <img src ="https://lh3.googleusercontent.com/proxy/RoFxQ4cl4Ew_QGP31s7qolXwbZQrSOuDgYyBDkIAZsQ_g8Riyx-aeeGVk-N7vqaBrbbWZ0gt92KV8X7FbDX7OzkLxPR9wr5u5AAVHPox7w" alt="Oceania"/>
            </div>
          </Link>
        </div>

        <div className="bottomthree">
        <Link to={`/Europe`}>
            <div className="europe">
              <div className="nameEurope">Europe</div>
              <img  src="https://cdn11.bigcommerce.com/s-5luen2shhj/images/stencil/original/products/3368/3642/europe_physical_giclee_lg__48675.1575459059.jpg?c=2&imbypass=on&imbypass=on" alt="Europe"/>
          </div>
        </Link>

        <Link to={`/NorthAmerica`}>
            <div className="north">
              <div className="nameNorth">North America</div>
              <img src="https://geology.com/world/satellite-image-of-north-america-lg.jpg" alt="North America"/>
          </div>
        </Link>

        <Link to={`/SouthAmerica`}>
            <div className="south">
              <div className="southName">South America</div>
              <img src="https://cdn11.bigcommerce.com/s-5luen2shhj/images/stencil/original/products/1069/1339/south_america_topography_bathymetry_giclee_lg__19907.1560527371.jpg?c=2&imbypass=on" alt="South America"/>
          </div>
          </Link>
          </div>
      </div>
    </div>
  )
}
