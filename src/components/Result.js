// src/components/Result.js
import React from 'react';
import tomatoImage from '../images/tomato.jpg';
import lettuceImage from '../images/lettuce.jpg';
import bellPepperImage from '../images/bell_pepper.jpeg';
import carrotImage from '../images/carrot.jpeg';


const Result = ({ result }) => {
  const getResultContent = (result) => {
    switch (result) {
      case 'a':
        return {
          title: 'You are a Tomato!',
          description: 'Energetic and love being in the spotlight.',
          image: tomatoImage,
          link: 'https://en.wikipedia.org/wiki/Tomato'
        };
      case 'b':
        return {
          title: 'You are a Lettuce!',
          description: 'Calm, thoughtful, and enjoy a cool, relaxed environment.',
          image: lettuceImage,
          link: 'https://en.wikipedia.org/wiki/Lettuce'
        };
      case 'c':
        return {
          title: 'You are a Bell Pepper!',
          description: 'Creative, vibrant, and love adding flavor to life.',
          image: bellPepperImage,
          link: 'https://en.wikipedia.org/wiki/Bell_pepper'
        };
      case 'd':
        return {
          title: 'You are a Carrot!',
          description: 'Fun-loving, humorous, and enjoy being around others.',
          image: carrotImage,
          link: 'https://en.wikipedia.org/wiki/Carrot'
        };
      default:
        return { title: '', description: '', image: '', link: '' };
    }
  };

  const resultContent = getResultContent(result);

  return (
    <div className="result" role="alert" aria-live="assertive">
      <h2>{resultContent.title}</h2>
      <p className="result-description">{resultContent.description}</p>
      <img className="result-image" src={resultContent.image} alt={resultContent.title} />
      <p>
        <a 
          className="wiki-link" 
          href={resultContent.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn more about {resultContent.title.replace('You are a ', '')} on Wikipedia
        </a>
      </p>
    </div>
  );
};

export default Result;
