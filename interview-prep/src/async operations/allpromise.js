import React, { useEffect, useRef } from 'react';
import './App.css';

// Task 2 - Implement Promise.all polyfill
async function myPromiseAll(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('Argument must be an array');
  }

  const results = [];
  let remaining = promises.length;

  if (remaining === 0) {
    return results;
  }
  const timer = new Date();
  for (let i = 0; i < promises.length; i++) {
    console.log('i', i);
    try {
      const value = await Promise.resolve(promises[i]);
      console.log('val', value);
      results.push(value);
      remaining--;
      if (remaining === 0) {
        const timer2 = new Date();
        console.log(timer2 - timer);
        return results;
      }
    } catch (error) {
      throw error; // Propagate the first rejection value encountered
    }
  }
}

async function fetchData() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1); // Reject with value 3
    }, 10);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2); // Reject with value 3
    }, 1000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3); // Reject with value 3
    }, 500);
  });

  try {
    const values = await myPromiseAll([promise1, promise2, promise3]);
    console.log(values); // [3, 42, "foo"]
  } catch (error) {
    console.error(error); // This should output 3
  }
}

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
