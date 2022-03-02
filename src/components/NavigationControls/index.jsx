import React from "react";
import "./navigationControls.scss";

import { Link } from "react-router-dom";

import iconFilter from "../../assests/icon-filter.png";

const NavigationControls = (props) => {
  return (
    <nav className="navigation">
      <div className="navigation--actions">
        <Link
          to="/"
          className="navigation--link navigation--link__active"
          // style={({ isActive }) =>
          //   isActive
          //     ? "navigation--link navigation--link__active"
          //     : "navigation--link"
          // }
        >
          Nearest rides
        </Link>
        <Link to="upcoming-rides" className="navigation--link">
          Upcoming rides
        </Link>
        <Link to="past-rides" className="navigation--link">
          Past rides
        </Link>
        {/* <a
          className="navigation--link navigation--link__active"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, undefined, "/");
          }}
        >
          Nearest rides
        </a>
        <a
          className="navigation--link"
          href="upcoming-rides"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, undefined, "/upcoming-rides");
          }}
        >
          Upcoming rides(4)
        </a>
        <a
          className="navigation--link"
          href="past-rides"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, undefined, "/past-rides");
          }}
        >
          Past rides(2)
        </a> */}
      </div>

      <div className="navigation--filter">
        <img className="navigation--filter__icon" src={iconFilter} />
        <p className="navigation--filter__text">Filters</p>
      </div>
    </nav>
  );
};
export default NavigationControls;
