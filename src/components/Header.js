import React from "react";

const Header = ({ header, text }) => {
  return (
    <div>
      <header>{header}</header>
      <p className="header-txt">{text}</p>
    </div>
  );
};

export default Header;
