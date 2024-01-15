import React from "react";
import BeerBikePeople from "./BeerBikePeople";
import "./css/BeerBikePeopleSection.css";

const BeerBikePeopleSection = () => {
  const green = "#2B7632";
  const purple = "#715AA0";

  return (
    <div className="people-group-container">
      <div className="people-group">
        <div className="people-heading" style={{ color: "#2B7632" }}>
          Beer Bike Coords
        </div>
        <div className="row">
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
        </div>

        <div className="row">
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={green}
          />
        </div>
      </div>

      <div className="people-group">
        <div className="people-heading" style={{ color: "#715AA0" }}>
          Bike Captains
        </div>
        <div className="row">
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={purple}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={purple}
          />
        </div>

        <div className="row">
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={purple}
          />
          <BeerBikePeople
            name="taya laysota"
            email="taya@rice.edu"
            color={purple}
          />
        </div>
      </div>

      <div className="people-group">
        <div className="people-heading">chug captains</div>
        <div className="chugpeople">
          <div className="row">
            <BeerBikePeople name="taya laysota" email="taya@rice.edu" />
          </div>

          <div className="row">
            <BeerBikePeople name="taya laysota" email="taya@rice.edu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerBikePeopleSection;
