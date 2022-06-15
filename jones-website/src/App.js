import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OWeek from "./components/pages/oweek/O-Week";
import BeerBikeTraditionsPage from "./components/pages/beerbike-traditions/BeerBikeTraditionsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/o-week" exact element={<OWeek />} />
          <Route
            path="/beerbike-traditions"
            exact
            element={<BeerBikeTraditionsPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
