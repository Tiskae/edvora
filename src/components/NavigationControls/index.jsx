import React, { useState } from "react";
import "./navigationControls.scss";

import { NavLink } from "react-router-dom";

import iconFilter from "../../assests/icon-filter.png";
import Filter from "../Filter";

const NavigationControls = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const allStatesAndCities = props.allStatesAndCities;

  return (
    <nav className="navigation">
      <div className="navigation--actions">
        <NavLink
          to="/"
          className="navigation--link navigation--link__active"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "2px solid white", paddingBottom: "2px" }
              : null
          }
        >
          Nearest rides
        </NavLink>
        <NavLink
          to="upcoming-rides"
          className="navigation--link"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "2px solid white", paddingBottom: "2px" }
              : null
          }
        >
          Upcoming rides ({props.upcomingRidesCount})
        </NavLink>
        <NavLink
          to="past-rides"
          className="navigation--link"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "2px solid white", paddingBottom: "2px" }
              : null
          }
        >
          Past rides ({props.pastRidesCount})
        </NavLink>
      </div>

      <div
        className="navigation--filter"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        <img className="navigation--filter__icon" src={iconFilter} />
        <p className="navigation--filter__text">Filters</p>
      </div>
      {showFilter ? (
        <Filter data={allStatesAndCities} filterHandler={props.filterHandler} />
      ) : null}
    </nav>
  );
};
export default NavigationControls;
