import React from "react";
import { FaFacebook } from "react-icons/fa";

const CustomFacebookButton = () => {
  const buttonStyles = {
    // Add your custom CSS styles here
    background: "white",
    color: "#3b5998",
    padding: "10px 20px",
    border: "none",

    fontSize: "16px",
    fontWeight: "bold",
    // ...
  };

  const iconStyles = {
    marginRight: "8px", // Adjust spacing between icon and text
  };

  // return <button style={buttonStyles}>Log In with Facebook</button>;
  return (
    <button style={buttonStyles}>
      <FaFacebook style={iconStyles} /> Log In with Facebook
    </button>
  );
};

export default CustomFacebookButton;
