import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export function Post(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUri } = location.state;

  const HandleBack = async () => {
    navigate("/home");
  };

  return (
    <>
      <button className="btn1" type="button" onClick={HandleBack}>
        Home Page
      </button>
      <h2 className="centered-data">"Image has successfuly created"</h2>
      <div className="container1">
        <img
          src={imageUri.uri}
          alt="Post Image"
          className="imagepost"
        />
      </div>
    </>
  );
}
