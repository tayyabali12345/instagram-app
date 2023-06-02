import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { StoreImageApi } from "../../api/login.jsx";
import { useNavigate } from "react-router-dom";

export function Post(props) {
  const location = useLocation();
  const { imageUri } = location.state;

  console.log(imageUri.uri);
  return (
    <>
      <h2>"Image has successfuly created"</h2>
      <img src={imageUri.uri} alt="Cloudinary" />
    </>
  );
}
