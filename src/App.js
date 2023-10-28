import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import './style/App.css'
import WorldMap from './pages/WorldMap';

import WorldNav from "./components/WorldNav";

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      {/*<WorldNav/> */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* 
            :year is the parameter at the end of the url
          */}
          <Route path="/world-map/:year" element={<WorldMap/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
