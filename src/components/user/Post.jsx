import { useLocation } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../pages/common/footer";
import Header from "../../pages/common/header";

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
      <Header />
      <button
    
        className="btn1"
        type="button"
        onClick={HandleBack}
      >
        Home Page
      </button>
      <h2 className="centered-data">"Image has successfuly created"</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={imageUri.uri}
          alt="Post Image"
          style={{
            maxWidth: "700px",
            height: "600px",
            objectFit: "contain",
          }}
        />
      </div>
      <Footer />
    </>
  );
}
