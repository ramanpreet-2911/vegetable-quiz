// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import questions from './data/questions'; // Adjust path as per your project structure
import Question from './Question';
import Result from './Result';

const Quiz = ({ onRestart }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('quizProgress'));
    if (savedProgress) {
      setCurrentQuestion(savedProgress.currentQuestion);
      setAnswers(savedProgress.answers);
      setShowResult(savedProgress.showResult);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'quizProgress',
      JSON.stringify({ currentQuestion, answers, showResult })
    );
  }, [currentQuestion, answers, showResult]);

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [answer]: prevAnswers[answer] + 1,
    }));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const result = Object.keys(answers).reduce((a, b) =>
      answers[a] > answers[b] ? a : b
    );
    return result;
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({ a: 0, b: 0, c: 0, d: 0 });
    setShowResult(false);
    localStorage.removeItem('quizProgress');
    onRestart(); // Callback to reset quiz state in parent component
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      {showResult ? (
        <div>
          <Result result={getResult()} />
          <div className="button-container">
            <button className="restart-button" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="question-container">
            <Question data={questions[currentQuestion]} handleAnswer={handleAnswer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
