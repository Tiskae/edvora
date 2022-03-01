import React from "react";
import "./navigationControls.scss";

import { NavLink } from "react-router-dom";

import iconFilter from "../../assests/icon-filter.png";

const NavigationControls = (props) => {
  return (
    <nav className="navigation">
      <div className="navigation--actions">
        {/* <NavLink
          to="/nearest-rides"
          className="navigation--link navigation--link__active"
        >
          Nearest rides
        </NavLink>
        <NavLink
          to="upcoming-rides"
          style={({ isActive }) =>
            isActive
              ? "navigation--link navigation--link__active"
              : "navigation--link"
          }
        >
          Upcoming rides
        </NavLink>
        <NavLink to="past-rides" className="navigation--link">
          Past rides
        </NavLink> */}
        <a
          className="navigation--link navigation--link__active"
          href="/"
          onClick={(e) => e.preventDefault()}
        >
          Nearest rides
        </a>
        <a
          className="navigation--link"
          href="upcoming-rides"
          onClick={(e) => e.preventDefault()}
        >
          Upcoming rides(4)
        </a>
        <a
          className="navigation--link"
          href="past-rides"
          onClick={(e) => e.preventDefault()}
        >
          Past rides(2)
        </a>
      </div>

      <div className="navigation--filter">
        <img className="navigation--filter__icon" src={iconFilter} />
        <p className="navigation--filter__text">Filters</p>
      </div>
    </nav>
  );
};
export default NavigationControls;
