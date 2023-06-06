import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { AllPostsApi } from "../../api/login.jsx";
import { useNavigate } from "react-router-dom";

export function Post(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUri } = location.state;
  const HandleBack = async () => {
    navigate("/home", {
      state: { signedUser: null, functionality: null },
    });
  };

  console.log(imageUri.uri);
  return (
    <>
      <button type="button" onClick={HandleBack}>
        Home Page
      </button>
      <h2>"Image has successfuly created"</h2>
      <img src={imageUri.uri} alt="Cloudinary" />
    </>
  );
}
