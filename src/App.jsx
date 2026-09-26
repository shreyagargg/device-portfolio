import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from "./components/screens/LandingPage";
import { Card } from "./components/component/Card";
import { TitleBar } from "./components/component/TitleBar";

function App(){
     return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card" element={<Card />} />
        {/* <Route path="/about-me" element={<AboutMe />} />
        <Route path="/key-skills" element={<KeySkills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card" element={<Card />} /> */}

      </Routes>
    </Router>
  );

}

export default App;