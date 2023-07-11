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
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route
              path="/signup"
              element={
                <Layout>
                  <Protected>
                    <SignUpPage />
                  </Protected>
                </Layout>
              }
            />

            <Route
              path="/"
              element={
                <Protected>
                  <LoginIndex />
                </Protected>
              }
            />

            <Route
              path="/home"
              element={
                <Layout>
                  <Protected>
                    <Home />
                  </Protected>
                </Layout>
              }
            />

            <Route
              path="/post"
              element={
                <Layout>
                  <Protected>
                    <Post />
                  </Protected>
                </Layout>
              }
            />

            <Route
              path="/newpost"
              element={
                <Layout>
                  <Protected>
                    <Profile />
                  </Protected>
                </Layout>
              }
            />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
