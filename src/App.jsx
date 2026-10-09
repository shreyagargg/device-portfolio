import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from "./components/screens/LandingPage";

function App(){
     return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/card" element={<Card />} /> */}
      </Routes>
    </Router>
  );

}

export default App;