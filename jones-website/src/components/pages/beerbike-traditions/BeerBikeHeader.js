import React from "react";
import "./BeerBikeHeader.css";

const BeerBikeHeader = () => {
  return (
    <div className="beerbike-header">
      <div className="beerbike-graphic">
        <img
          src={require("./images/people-cheering.png")}
          className="front-pic"
        ></img>
      </div>

      <div className="beerbike-info">
        <div className="beerbike-info-title">
          <h1>BEER BIKE</h1>
          <img
            src={require("./images/bikeicon.png")}
            className="beerbike-info-title-image"
            alt="bike"
          ></img>
        </div>
        <div className="beerbike-info-subtitle">subitle</div>

        <p>
          There is a day when all the other colleges come together to celebrate
          Jones’ winningness. A grueling test of speed, endurance, and gag
          reflex control comes on the heels of a week-long foray into bliss and
          happiness. The stuff of legends and a cornerstone of Rice life, Beer
          Bike is our day. At its core, Beer Bike is a relay race of ten bikers
          on three teams: men, women, and alumni. These bikers are joined by a
          team of ten chuggers, who stand on the famed Jones platform near the
          bike pit as each bikes come in and must chug water before the next
          biker can leave the pit. But Beer Bike is more than that. The entire
          week leading up to it, Willy Week, is a celebration of life at Jones
          and life at Rice. Jones will celebrate with parties and activities,
          such as Night Ride and water balloon filling contests. And we will
          also partake in the main phase of open intercollege jack season.
          Although you probably won’t see or hear them, rest assured that
          somewhere out there, a Jones force is spreading mischief. The Beer
          Bike Race itself only comes after a morning of debauchery and one of
          the biggest water balloon fights in the world. Biking and chugging for
          Jones is an honor, one that all should attempt. Jones Fast Women and
          Hard Men are revered on campus for their skill on the bike.
        </p>
      </div>
    </div>
  );
};

export default BeerBikeHeader;
