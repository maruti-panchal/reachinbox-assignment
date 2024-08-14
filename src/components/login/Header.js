// src/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="images/image.png"
          alt="logo"
          style={{ margin: "75vh" }}
          width="156.77px"
          height="24px"
        />
      </div>
    </header>
  );
};

export default Header;
