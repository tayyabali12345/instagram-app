import React from "react";

const Header = ({ menuItems }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">INSTAGRAM APP</div>
        <div className="header-fields">
          {menuItems.map((item, index) => (
            <div className="field" key={index}>
              <a className="header_item" href={item.url}>{item.label}</a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
