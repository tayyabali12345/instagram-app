import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginIndex from "./pages/login/login";
import { Home } from "./components/user/Home.jsx";
import { Post } from "./components/user/Post.jsx";

import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginIndex />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
