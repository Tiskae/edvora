import React from "react";
import * as classes from "./header.scss";

import ProfilePic from "../../assests/profile-pic.png";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header--title">Edvora</h1>
      <div className="user-details">
        <p className="user-name">Dhruv Singh</p>
        <div className="user-profile--pic">
          <img className="user-profile--pic__image" src={ProfilePic} />
        </div>
      </div>
    </header>
  );
};
export default Header;
