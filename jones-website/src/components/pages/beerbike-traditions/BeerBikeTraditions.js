import React from 'react'
import Footer from '../../Footer';
import "./BeerBikeTraditions.css";
import BeerBikeHeader from './BeerBikeHeader';
import BeerBikePeopleSection from './BeerBikePeopleSection';
import Traditions from './Traditions'
// import JonesAnthem from './JonesAnthem';


export default function BeerBikeTraditions () {
  return (

    <div style = {{display: "flex", flexDirection: "column"}}>
      {/* <BeerBikeHeader />
      <BeerBikePeopleSection /> */}
      <Traditions />
      <Footer />


    </div>
  )
}


