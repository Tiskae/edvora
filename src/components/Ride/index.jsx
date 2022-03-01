import React from "react";
import * as classes from "./ride.scss";

import mapImage from "../../assests/map-image.png";

const Ride = (props) => {
  return (
    <div className="ride">
      <img className="ride--map-image" src={mapImage} />
      <div className="ride--details-container">
        <div className="ride--details">
          <p className="ride--details__text">
            <span className="ride--details__text-title">Ride Id : </span>
            <span className="ride--details__text-value">002</span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Origin Station : </span>
            <span className="ride--details__text-value">20</span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">station_path : </span>
            <span className="ride--details__text-value">
              [20, 39, 40, 42, 54, 63, 72, 88, 98]
            </span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Date : </span>
            <span className="ride--details__text-value">
              15th Feb 2022 16:33
            </span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Distance : </span>
            <span className="ride--details__text-value">1</span>
          </p>
        </div>
        <div className="ride--tags">
          <div className="ride--tag">
            <p className="ride--tag__text">City Name</p>
          </div>
          <div className="ride--tag">
            <p className="ride--tag__text">State Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ride;
