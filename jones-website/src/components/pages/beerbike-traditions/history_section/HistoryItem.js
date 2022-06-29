import React from "react";
import "./HistoryItem.css";

const HistoryItem = ({ photo, traditionName, paragraphText }) => {
  const imageStyle = {
    backgroundColor: "blue",
    backgroundImage: `url(${photo})`,
  };

  return (
    <div className="historyitem-container">
      <div className="history-photo" style={imageStyle}></div>
      <div className="history-text-container">
        <h1>{traditionName}</h1>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
