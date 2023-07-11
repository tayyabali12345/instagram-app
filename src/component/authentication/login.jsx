import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/instagramApi.jsx";
import FBLogin from "./facebooklogin.jsx";
import { UserContext } from "../UserContext.js";

const LoginIndex = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    LoginApi({
      username: username,
      password: password,
    }).then((res) => {
      if (res.status === 200) {
        const userId = res.data.id;
        sessionStorage.setItem("userId", userId);
        setUserId(userId);
        navigate("/home");
      } else {
        setError("Error while login, try again");
      }
    });
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div
        className="con2"
        style={{
          boxShadow: "1px 2px 9px #000b06",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "20px",
          // padding: "1em",
          height: "3%",
          width: "30%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="con3">
          <h2 className="heading">Instagram</h2>
          <form>
            <label className="label1">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
                className="sharedinput"
              />
            </label>
            <br />
            <label className="label1">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                className="sharedinput"
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin} className="sharedbtn">
              Login
            </button>
            <br />
            <p>-------------OR-------------</p>
            {/* <button type="button" onClick={handleSignUp} className="sharedbtn">
              Signup
            </button> */}

            <FBLogin />
            <button
              type="button"
              className="forget"
              style={{ border: "none", color: "#3b5998" }}
            >
              Forget Password?
            </button>

            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>

      <div
        style={{
          boxShadow: "1px 2px 9px #000b06",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          paddingTop: "15px",
          paddingBottom: "15px",
          height: "30%",
          width: "30%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span style={{ color: "black" }}>Don't have an account?</span>
        <button type="button" onClick={handleSignUp} className="sharedbtn1">
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginIndex;
