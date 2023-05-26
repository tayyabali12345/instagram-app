import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginIndex from "./pages/login/login";
import { Home } from "./components/user/Home.jsx";

import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginIndex />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
