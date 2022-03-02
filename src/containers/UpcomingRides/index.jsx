import React from "react";
import * as classes from "./upcomingRides.scss";
import Ride from "../../components/Ride";

const UpcomingRides = (props) => {
  return (
    <div className={classes.UpcomingRides}>
      <Ride />
      <Ride />
    </div>
  );
};
export default UpcomingRides;
