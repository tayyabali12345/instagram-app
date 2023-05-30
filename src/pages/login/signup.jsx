import React, { useState } from "react";
import { SignUpApi } from "../../api/login";
import { useNavigate } from "react-router-dom";

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
    SignUpApi(signUpData).then(res => {
      responsedata = res.data;
      navigate("/home", { state: { signedUser: responsedata, functionality: "signup" } });
    })
  };

  return (
    <div>
      <h1>Welcome to the Sign-Up Page</h1>

      {showSignUpForm && (
        <form>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSignUpClick}>
            SignUp
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;
