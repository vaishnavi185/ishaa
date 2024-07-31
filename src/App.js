import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Dashboard from './Components/DashBoard';
import History from './Components/History';

import Save from './Components/Save';
import './App.css'

import Content from './Components/Content';

function App() {
  return (
    <Router>
      <div className="d-flex align-items-start ">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/saves" element={<Save/>} />
            {/* <Route path="/userprofile" element={Content} /> */}
            {/* <Route path="/userprofile" element={UserProfile} /> */}
            <Route path="/timespent" element={<Content></Content>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
