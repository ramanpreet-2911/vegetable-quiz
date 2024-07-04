// src/components/Question.js
import React from 'react';

const Question = ({ data, handleAnswer }) => {
  return (
    <div>
      <h2 className="question">{data.question}</h2>
      <ul className="options">
        {data.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option.type)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
