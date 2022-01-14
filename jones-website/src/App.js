import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OWeek from './components/pages/oweek/O-Week';
import Constitution from './components/pages/about/Constitution';
import History from './components/pages/about/history/History';
import BeerBike from './components/pages/about/beerbike/BeerBike';
import Traditions from './components/pages/about/traditions/Traditions';
import Cabinet from './components/pages/leadership/Cabinet';
import OtherPositions from './components/pages/leadership/OtherPositions';
import CollegeCourt from './components/pages/leadership/CollegeCourt';
import ATeam from './components/pages/leadership/A-Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<Constitution />} />
          <Route path='/constitution' element={<Constitution />} />
          <Route path='/history' element={<History />} />
          <Route path='/beerbike' element={<BeerBike />} />
          <Route path='/o-week' exact element={<OWeek />} />
          <Route path='/traditions' exact element={<Traditions />} />
          <Route path='/cabinet' exact element={<Cabinet />} />
          <Route path='/positions' exact element={<OtherPositions />} />
          <Route path='/college-court' exact element={<CollegeCourt />} />
          <Route path='/a-team' exact element={<ATeam />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;