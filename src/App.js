import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginIndex from "./component/authentication/login";
import Layout from "./component/common/layout";
import { Home } from "./pages/user/Home.jsx";
import { Post } from "./pages/user/Post.jsx";
import SignUpPage from "./component/authentication/signup.jsx";
import Profile from "./pages/user/Profile";
import { UserProvider } from "./component/UserContext";

import "./App.css";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<LoginIndex />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/newPost" element={<Profile />} />
            <Route exact path="/signup" element={<SignUpPage />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
};

export default App;
