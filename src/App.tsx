import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./layout/components/Home";
import About from "./layout/components/About";
import Experience from "./layout/components/Experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
