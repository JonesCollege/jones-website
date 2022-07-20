import React, { useEffect } from "react";
import History from "./history_section/History";
import Traditions from "./traditions_section/Traditions";
//import BeerBikePeopleSection from "./people_section/BeerBikePeopleSection";
import BeerBikeHeader from "./header_section/BeerBikeHeader";
import BeerBikegallery from "./photogallery_slider/BeerBikeGallery";
import "./BeerBikeTraditionsPage.css";
import Footer from "../../Footer";

const BeerBikeTraditionsPage = () => {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
},[])
  return (
    <div>
    <div className="beerbikepage">
      <BeerBikeHeader />
      <BeerBikegallery />
      {/* <BeerBikePeopleSection /> */}
      <Traditions />
      <History />
    </div>
    <Footer/>
    </div>
  );
};

export default BeerBikeTraditionsPage;
