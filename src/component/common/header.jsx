import React from "react";
import { FaEllipsisH } from "react-icons/fa";


const Header = ({ menuItems }) => {
  return (
    <aside className="sidebar">
      <h1>Instagram</h1>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div className="sidebaaar" key={index}>
            <a className="sidebaaar">
              {item.url}
              {""} {item.label}
            </a>
          </div>
        ))}

        <div className="">
          <a className="lastIt">
            {<FaEllipsisH />}
            {""} More
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Header;
