import React, { useEffect, useRef } from 'react';
import './App.css';

/**
 * Task - 1 Implement debounce method
 * function debounce(fn, delay) {
 * }
 * @returns function
 */

export function debounce(func, wait) {
    let timer;
    return function(...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args); // Correctly bind 'this' and pass arguments
      }, wait);
    }
  }

function App() {
  const debouncedFunctionRef = useRef(debounce(function() {
    console.log('fuck yeah');
  }, 1000));

  useEffect(() => {
    const button = document.getElementById("clickMe");
    console.log(button);
    if (button) {
      button.addEventListener('click', debouncedFunctionRef.current);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', debouncedFunctionRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <button id="clickMe">Click the button to see the debounce</button>
    </div>
  );
}

export default App;
