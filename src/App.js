// src/App.js
import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStart = () => {
    setStartQuiz(true);
  };

  return (
    <div className="app">
      {startQuiz ? (
        <Quiz />
      ) : ( 
        <div className="home-screen">
          <h1>Which Vegetable Are You?</h1>
          <p>Take this fun quiz to discover which vegetable best matches your personality!</p>
          <button className="start-button" onClick={handleStart}>Start Quiz</button>
        </div>
      )}
    </div>
  );
};

export default App;
