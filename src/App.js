import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(70);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    let bloodAlcLevel = 0;
    if (gender === "male") {
      bloodAlcLevel = gramsLeft / (weight * 0.7);
    } else {
      bloodAlcLevel = gramsLeft / (weight * 0.6);
    };
    if (bloodAlcLevel < 0) {
      bloodAlcLevel = 0;
    };
    setResult(bloodAlcLevel);
  };

  return (
    <>
      <h3>Calculating blood alcohol level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
          <label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </>
  )

};

export default App;
