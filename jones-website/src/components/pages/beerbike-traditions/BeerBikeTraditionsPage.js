import React, { useEffect } from "react";
import History from "./history_section/History";
import Traditions from "./traditions_section/Traditions";
//import BeerBikePeopleSection from "./people_section/BeerBikePeopleSection";
import BeerBikeHeader from "./header_section/BeerBikeHeader";
import BeerBikegallery from "./photogallery_slider/BeerBikeGallery";
import "./BeerBikeTraditionsPage.css";
import Footer from "../../Footer";
import { useState } from "react";

const BeerBikeTraditionsPage = () => {
  const [resize, setResize] = useState(false)
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
    innerWidth()
},[])

const innerWidth = () => {
  if (window.innerWidth <= 500){
    setResize(true)
  }
  else{
    setResize(false)
  }
}
window.addEventListener('resize', innerWidth);
  return (
    <div>
    <div className="beerbikepage">
      <BeerBikeHeader />
      {!resize && <BeerBikegallery />}
      {/* <BeerBikePeopleSection /> */}
      <Traditions />
      <History />
    </div>
    <Footer/>
    </div>
  );
};

export default BeerBikeTraditionsPage;
