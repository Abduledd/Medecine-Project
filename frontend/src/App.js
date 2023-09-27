import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeartDiseasePrediction from './components/HeartDiseasePrediction';
import DiabetesPrediction from './components/DiabetesPrediction';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/heart" element={<HeartDiseasePrediction />} />
        <Route path="/diabetes" element={<DiabetesPrediction />} />

      </Routes>
    </Router>
  );
}

export default App;
