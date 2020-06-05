import React from 'react'
import { Link } from "react-router-dom"

import '../css/Continent.css'


export default function Continents() {



  return (
    <div>

      <div className="select">Please Select A Continent</div>
      <div className="container">
        <div className="toptwo">
          <div className="africa">
            <Link to={`/Africa`}>
              <div className="nameAfrica">Africa</div>
            </Link>
            <img src="https://www.sciencesource.com/Doc/TR1_WATERMARKED/4/2/5/1/SS2122688.jpg?d63641192807" alt="Africa" />
          </div>



          <div className="antarctica">
            <Link to={`/Antarctica`}>
              <div className="namePolar">Polar</div>
            </Link>
            <img src="https://i.pinimg.com/originals/02/84/a3/0284a389a03df0e5ffaeddcd81b09c52.jpg" alt="Antarctica" />
          </div>

        </div>

        <div className="middletwo">

          <div className="asia">
            <Link to={`/Asia`}>
              <div className="nameAsia">Asia</div>
            </Link>
            <img src="https://i.pinimg.com/originals/5b/c9/60/5bc9604726371e871928b45cf3f40e69.jpg" alt="Asia" />
          </div>



          <div className="oceania">
            <Link to={`/Oceania`}>
              <div className="nameOceania">Oceania</div>
            </Link>
            <img src="https://cdn.onestopmap.com/wp-content/uploads/2019/08/755-australia-naturalist-vm-nataus-0b6yv-1-web.jpg" alt="Oceania" />
          </div>

        </div>

        <div className="bottomthree">

          <div className="europe">
            <Link to={`/Europe`}>
              <div className="nameEurope">Europe</div>
            </Link>
            <img src="https://cdn11.bigcommerce.com/s-5luen2shhj/images/stencil/original/products/3368/3642/europe_physical_giclee_lg__48675.1575459059.jpg?c=2&imbypass=on&imbypass=on" alt="Europe" />
          </div>



          <div className="north">
            <Link to={`/NorthAmerica`}>
              <div className="nameNorth">N. America</div>
            </Link>
            <img src="https://geology.com/world/satellite-image-of-north-america-lg.jpg" alt="North America" />
          </div>



          <div className="south">
            <Link to={`/SouthAmerica`}>
              <div className="southName"> S.America</div>
            </Link>
            <img src="https://cdn11.bigcommerce.com/s-5luen2shhj/images/stencil/original/products/1069/1339/south_america_topography_bathymetry_giclee_lg__19907.1560527371.jpg?c=2&imbypass=on" alt="South America" />
          </div>

        </div>
      </div>
    </div>
  )
}
