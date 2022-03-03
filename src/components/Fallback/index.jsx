import React from "react";

const Fallback = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <p
        style={{
          color: "gray",
          textAlign: "center",
          fontSize: "1.2rem",
          fontStyle: "italic",
        }}
      >
        No rides to show
      </p>
    </div>
  );
};

export default Fallback;
