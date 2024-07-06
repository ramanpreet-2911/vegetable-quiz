// src/App.js
import React, { useState } from 'react';
import './App.css';
import Homescreen from './components/Homescreen';
import Quiz from './components/Quiz';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <div className="app">
      {quizStarted ? (
        <Quiz onRestart={handleRestartQuiz} />
      ) : (
        <Homescreen onStart={handleStartQuiz} />
      )}
    </div>
  );
};

export default App;
