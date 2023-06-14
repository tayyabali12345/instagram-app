import React from "react";

const Footer = ({ sections }) => {
  return (
    <div className="convv">
      <div className="footer-container">
        {sections.map((item, index) => {
          return (
            <div className="footer-section" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.content.map((itemlist, itemindex) => {
                  return <li>{itemlist}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
