import React from "react";
import * as classes from "./upcomingRides.scss";

const UpcomingRides = (props) => {
  return (
    <div className={classes.UpcomingRides}>
      <Ride />
      <Ride />
      <Ride />
    </div>
  );
};
export default UpcomingRides;
