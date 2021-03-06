import { useState } from 'react';
import './app.css'

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [message, setMessage] = useState('');

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if(bmi < 18.6) {
      setMessage("You are underweight! Your BMI: " + bmi.toFixed(2));
    } else if(bmi >= 18.6 && bmi < 24.9) {
      setMessage("Ideal weight! Your BMI: " + bmi.toFixed(2));
    } else if (bmi >= 24.9 && bmi < 34.9) {
      setMessage("You are slightly overweight! Your BMI: " + bmi.toFixed(2));
    } else if (bmi > 34.9) {
      setMessage("Be careful, you are overweight! Your BMI: " + bmi.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your BMI</span>

      <div className="input-area">
        <input 
          type="text"
          placeholder="Weight in kg. Ex.: 60"
          value={weight}
          onChange={ (e) => setWeight(e.target.value) }
        />

        <input 
          type="text"
          placeholder="Height in cm. Ex.: 160"
          value={height}
          onChange={ (e) => setHeight(e.target.value) }
        />

        <button onClick={calculateBMI}>
          Calculate
        </button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}
