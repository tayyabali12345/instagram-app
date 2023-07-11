import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useContext } from "react";

import LoginIndex from "./component/authentication/login";
import Layout from "./component/common/layout";
import { Home } from "./pages/user/Home.jsx";
import { Post } from "./pages/user/Post.jsx";
import SignUpPage from "./component/authentication/signup.jsx";
import Profile from "./pages/user/Profile";
import { UserProvider } from "./component/UserContext";
import { UserContext } from "./component/UserContext";

import "./App.css";

function Protected({ children }) {
  const { userId, setUserId } = useContext(UserContext);
  debugger;
  if (userId == null) {
    return (
      <div>
        {" "}
        {children} <Navigate to="/" replace />{" "}
      </div>
    );
  } else if (userId != null && children.type.name == "LoginIndex") {
    return <Navigate to="/home" />;
  }
  return children;
}
const App = () => {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <LoginIndex />
                </Protected>
              }
            />

            <Route
              path="/signup"
              element={
                <Protected>
                  <SignUpPage />
                </Protected>
              }
            />

            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />

            <Route
              path="/post"
              element={
                <Protected>
                  <Post />
                </Protected>
              }
            />

            <Route
              path="/newpost"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
};

export default App;
