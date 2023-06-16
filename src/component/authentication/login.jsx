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
      <div className="con2">
        <div className="con3">
          <h2 className="heading">Login</h2>
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
            <button type="button" onClick={handleSignUp} className="sharedbtn">
              Signup
            </button>

            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
      <FBLogin />
    </div>
  );
};

export default LoginIndex;
