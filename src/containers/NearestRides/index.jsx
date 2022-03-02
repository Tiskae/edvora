import React, { useEffect } from "react";
import Ride from "../../components/Ride";
import * as classes from "./nearestRides.scss";

const NearestRides = (props) => {
  useEffect(() => {
    console.log("loading...");
    fetch("https://assessment.api.vweb.app/rides")
      .then((res) => JSON.parse(res))
      .then((res) => console.log("res", res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Ride />
    </div>
  );
};
export default NearestRides;
