import React from 'react';
import './App.css';
import Container from './Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatPage from './CatPage';



function App() {

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/cat/:catName" element={<CatPage />} />
      </Routes>
    </Router>

  );
}

export default App;