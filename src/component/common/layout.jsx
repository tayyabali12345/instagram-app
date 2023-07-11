import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "License", url: "/license" },
    { label: "Contact Us", url: "/contact" },
    { label: "About App", url: "/about-app" },
  ];

  const sections = [
    {
      title: "Contact Information",
      content: ["Email: example@example.com", "Phone: 123-456-7890"],
    },
    {
      title: "Follow Us",
      content: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Useful Links",
      content: ["About Us", "Terms and Conditions", "Privacy Policy"],
    },
  ];

  return (
    <div>
      <Header menuItems ={menuItems} />
      {children}
      <Footer sections ={sections}/>
    </div>
  );
};

export default Layout;
