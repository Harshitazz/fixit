// src/AnimatedText.js
import React, { useEffect, useRef } from 'react';
import './GradientText.css';

function AnimatedText({ text ,delay = 0 }) {
  const textRef = useRef();

  useEffect(() => {
    const textElement = textRef.current;
    const letters = text.split('');
    textElement.innerHTML = '';

   

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.innerHTML = letter === ' ' ? '&nbsp;' : letter; // Preserve spaces
    const animationDelay = index * 0.2 +delay+ 's' ;
      
      span.style.animationDelay = animationDelay;
    textElement.appendChild(span);
  });
}, [text,delay]);

  return <div ref={textRef} className="animated-text"></div>;
}

export default AnimatedText;
