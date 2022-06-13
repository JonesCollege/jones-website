import React from "react";
import "./Tradition.css";

const Tradition = ({ photo, traditionName, paragraphText }) => {
  const imageStyle = {
    backgroundColor: "red",
    backgroundImage: `url(${photo})`,
  };

  return (
    <div className="tradition-container">
      <div className="photo" style={imageStyle}></div>
      <div className="text-container">
        <h1>{traditionName}</h1>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};

export default Tradition;
