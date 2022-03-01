import React from "react";
import Ride from "../../components/Ride";
import * as classes from "./pastRides.scss";

const PastRides = (props) => {
  return (
    <div className={classes.PastRides}>
      <Ride />
      <Ride />
    </div>
  );
};
export default PastRides;
