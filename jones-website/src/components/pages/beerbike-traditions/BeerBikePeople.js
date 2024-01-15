import React from "react";
import "./css/BeerBikePeople.css";
import fillerProfilePic from "./INFO/profile_images/profilepic.png";

const BeerBikePeople = ({ image, name, email, color }) => {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="person">
      <div className="text">
        <div className="profile-image" style={imageStyle}></div>
        <div className="name" style={{ color: color }}>
          {name}
        </div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

BeerBikePeople.defaultProps = {
  image: fillerProfilePic,
  name: "Person Name",
  email: "email@rice.edu",
  color: "black",
};

export default BeerBikePeople;
