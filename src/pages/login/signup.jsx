import React, { useState } from "react";
import { SignUpApi } from "../../api/instagramApi";
import { useNavigate } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";

function SignUpPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let responsedata = null;

  const signUpData = {
    password: password,
    name: email,
  };

  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const navigate = useNavigate();

  const handleSignUpClick = async () => {
    SignUpApi(signUpData).then((res) => {
      responsedata = res.data;
      navigate("/home", {
        state: { signedUser: responsedata, functionality: "signup" },
      });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "1rem",
          color: "#007bff",
        }}
      >
        Sign Up
      </h1>

      {showSignUpForm && (
        <form>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter user name"
              style={{
                width: "300px",
                height: "40px",
                fontSize: "16px",
                padding: "8px",
                marginBottom: "1rem",
              }}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "300px",
                height: "40px",
                fontSize: "16px",
                padding: "8px",
                marginBottom: "1rem",
              }}
            />
          </label>

          <br />
          <button
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "0.5rem",
            }}
            type="button"
            onClick={handleSignUpClick}
          >
            SignUp
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;
