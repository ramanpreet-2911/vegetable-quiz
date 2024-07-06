// src/components/HomeScreen.js
import React from 'react';
import './HomeScreen.css'; // Create or import your CSS file for styling

const Homescreen = ({ onStart }) => {
  const handleStart = () => {
    onStart();
  };

  return (
    <div className="home-screen">
      <h1>Which Vegetable Are You?</h1>
      <p>Take this fun quiz to discover which vegetable best matches your personality!</p>
      <button className="start-button" onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default Homescreen;
