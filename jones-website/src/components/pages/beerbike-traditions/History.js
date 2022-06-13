import React from "react";
import Tradition from "./Tradition";
import ScrollContent from "./ScrollContent";

const History = () => {
  const history_items = [
    <Tradition
      traditionName="history thing 1"
      paragraphText={"testing testing paragraph text"}
    />,
    <Tradition
      traditionName="history thing 2"
      paragraphText={"testing testing paragraph text"}
    />,
    <Tradition
      traditionName="history thing 3"
      paragraphText={"testing testing paragraph text"}
    />,
    <Tradition
      traditionName="history thing 4"
      paragraphText={"testing testing paragraph text"}
    />,
  ];
  return (
    <div className="history-container">
      <ScrollContent items={history_items}></ScrollContent>
    </div>
  );
};

export default History;
