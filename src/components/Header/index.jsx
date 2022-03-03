import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header--title">Edvora</h1>
      <div className="user-details">
        <p className="user-name">{props.username}</p>
        <div className="user-profile--pic">
          <img className="user-profile--pic__image" src={props.userImage} />
        </div>
      </div>
    </header>
  );
};
export default Header;
