import History from "./history_section/History";
import Traditions from "./traditions_section/Traditions";
import BeerBikePeopleSection from "./people_section/BeerBikePeopleSection";
import BeerBikeHeader from "./header_section/BeerBikeHeader";
import Beerbikegallery from "./photogallery_slider/BeerBikeGallery";

import "./BeerBikeTraditionsPage.css";

const BeerBikeTraditionsPage = () => {
  return (
    <div className="beerbikepage">
      <BeerBikeHeader />
      <Beerbikegallery />
      {/* <BeerBikePeopleSection /> */}
      <Traditions />
      <History />
    </div>
  );
};

export default BeerBikeTraditionsPage;
