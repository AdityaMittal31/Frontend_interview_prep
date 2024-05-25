import {useState, useEffect} from 'react';
import './styles.css';

export default function TrafficLight() {

  const [currentLight, setCurrentLight] = useState('green');

  const switchLight = () => {
    if(currentLight === 'green') {
      setCurrentLight('yellow');
    } else if(currentLight === 'yellow') {
      setCurrentLight('red');
    } else {
      setCurrentLight('green');
    }
  }

  useEffect(() => {
    let timer;
    if(currentLight === 'green') {
      timer = setTimeout(switchLight, 3000);
    } else if(currentLight === 'yellow') {
      timer = setTimeout(switchLight, 500);
    } else {
      timer = setTimeout(switchLight, 4000);
    }

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div className="trafficLight">
      <div className={`lightCircles ${currentLight === 'red' ? 'red' : ''}`}></div>
      <div className={`lightCircles ${currentLight === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`lightCircles ${currentLight === 'green' ? 'green' : ''}`}></div>
    </div>
  )
}
