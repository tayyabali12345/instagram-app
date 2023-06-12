import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/instagramApi.jsx";
import SignUpPage from "../login/signup.jsx";
import Footer from "../common/footer";
import Header from "../common/header";
import FBLogin from "../login/facebooklogin.jsx";

const LoginIndex = (props) => {
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
      <Header />
      {login && (
        <>
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
            <h2
              style={{
                marginBottom: "1rem",
                color: "#007bff",
              }}
            >
              Login
            </h2>
            <form>
              <label style={{ marginBottom: "0.5rem" }}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name"
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
              <label style={{ marginBottom: "0.5rem" }}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
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
                type="button"
                onClick={handleLogin}
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
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleSignUp}
                style={{
                  padding: "8px 16px",
                  fontSize: "16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Signup
              </button>
            </form>
          </div>
        </>
      )}

      {signup ? <SignUpPage /> : null}
      <FBLogin />
      <Footer />
    </div>
  );
};

export default LoginIndex;
