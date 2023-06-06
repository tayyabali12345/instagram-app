import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/login.jsx";
import SignUpPage from "../login/signup.jsx";

const LoginIndex = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignUp] = useState(false);
  const [login, setLogin] = useState(true);

  const loginData = {
    username: username,
    password: password,
  };

  let responsedata = null;
  const navigate = useNavigate();

  const handleLogin = async () => {
    LoginApi(loginData).then((res) => {
      responsedata = res.data;
      navigate("/home", {
        state: { signedUser: responsedata, functionality: "signin" },
      });
    });
  };

  const handleSignUp = () => {
    setSignUp(true);
    setLogin(false);
  };

  return (
    <div>
      {login && (
        <>
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>

            <button type="button" onClick={handleSignUp}>
              SignUp
            </button>
          </form>
        </>
      )}

      {signup ? <SignUpPage /> : null}
    </div>
  );
};

export default LoginIndex;
