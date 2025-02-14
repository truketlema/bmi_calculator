import { useState } from "react";
import "./App.css";

function App() {
  function bmiCalculator() {
    let mass = Number(prompt("Enter your mass in (kg)"));
    let height = Number(prompt("Enter your height in (m)"));

    if (height <= 0 || mass <= 0 || isNaN(mass) || isNaN(height)) {
      alert("Invalid value");
      return;
    }

    let bmi = mass / (height * height);
    alert(`Your BMI is: ${bmi}`);
  }

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <button onClick={bmiCalculator}>Calculate BMI</button>
    </div>
  );
}

export default App;
