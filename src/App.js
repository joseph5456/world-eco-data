import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import './style/App.css'
import LandMap from "./pages/LandMap";

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      {/*<WorldNav/> */}
        <Routes>
          <Route path="/" exact element={<About/>} />
          {/* 
            :year is the parameter at the end of the url
          */}
          <Route path="/arable-land-map/:year" element={<LandMap desc={"Arable land (% of total land area)"}/>} />
          <Route path="/forest-land-map/:year" element={<LandMap desc={"Forest cover (% of total land area)"}/>} />
          <Route path="/permanent-crops-land-map/:year" element={<LandMap desc={"Permanent crops (% of total land area)"}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
