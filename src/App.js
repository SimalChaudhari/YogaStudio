import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/index"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
