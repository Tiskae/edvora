import React from "react";
import "./ride.scss";

const Ride = (props) => {
  return (
    <div className="ride">
      <img className="ride--map-image" src={props.imgUrl} />
      <div className="ride--details-container">
        <div className="ride--details">
          <p className="ride--details__text">
            <span className="ride--details__text-title">Ride Id : </span>
            <span className="ride--details__text-value">{props.id}</span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Origin Station : </span>
            <span className="ride--details__text-value">
              {props.originStation}
            </span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">station_path : </span>
            <span className="ride--details__text-value">
              [{props.stationPath.join(", ")}]
            </span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Date : </span>
            <span className="ride--details__text-value">{props.date}</span>
          </p>
          <p className="ride--details__text">
            <span className="ride--details__text-title">Distance : </span>
            <span className="ride--details__text-value">
              {
                // Should change later to distance
                props.distance
              }
            </span>
          </p>
        </div>
        <div className="ride--tags">
          <div className="ride--tag">
            <p className="ride--tag__text">{props.city}</p>
          </div>
          <div className="ride--tag">
            <p className="ride--tag__text">{props.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ride;
