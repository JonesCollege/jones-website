import React from "react";
import AutoPlaySlider from "../AutoPlaySlider";
import { images } from "./BeerBikeImages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeerBikeGallery = () => {
  return (
    <div
      className="gallery-container"
      style={{ width: "100%", padding: "0px 0px 100px 0px" }}
    >
      <AutoPlaySlider images={images} />
    </div>
  );
};

export default BeerBikeGallery;
