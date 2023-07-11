import React from "react";
import Header from "./header";
import Footer from "./footer";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaEnvelope,
  FaBell,
  FaPlus,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";

const menuItems = [
  { label: "Home", url: <FaHome /> },
  { label: "Search", url: <FaSearch /> },
  { label: "Explore", url: <FaCompass /> },
  { label: "Reels", url: <FaVideo /> },
  { label: "Messages", url: <FaEnvelope /> },
  { label: "Notifications", url: <FaBell /> },
  { label: "Create", url: <FaPlus /> },
  { label: "Profile", url: <FaUser /> },
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

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Header menuItems={menuItems} />
      {children}
      {/* <Footer sections={sections} /> */}
    </div>
  );
};

export default Layout;
