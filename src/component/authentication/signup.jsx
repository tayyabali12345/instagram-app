import React, { useState, useContext } from "react";
import { SignUpApi } from "../../api/instagramApi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";

function SignUpPage() {
  const { userId, setUserId } = useContext(UserContext);
  const [signupPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const navigate = useNavigate();

  const handleSignUpClick = async () => {
    if (signupPassword === confirmPassword) {
      SignUpApi({
        password: signupPassword,
        name: email,
      }).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          const userId = res.data.id;
          sessionStorage.setItem("userId", userId);
          setUserId(userId);
          navigate("/home");
        } else {
          setError("Error while login, try again");
        }
      });
    } else {
      setError("Here password are different, please try again");
    }
  };

  return (
    <div className="con3">
      <h1 className="heading">Sign Up</h1>

      {showSignUpForm && (
        <form>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter user name"
              autoComplete="off"
              className="sharedinput"
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="off"
              className="sharedinput"
            />
          </label>
          <br />

          <label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              autoComplete="off"
              className="sharedinput"
            />
          </label>
          {error && <div className="error">{error}</div>}

          <br />
          <button className="btn3" type="button" onClick={handleSignUpClick}>
            SignUp
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;
