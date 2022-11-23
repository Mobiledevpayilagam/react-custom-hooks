import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [counter, setCounter] = useState(0);
  const counterRef = useRef();

  const handleNumberOneValueChange = (valueToBeAssignedToNumberOne) => {
    setNumberOne((state) => (state = valueToBeAssignedToNumberOne));
  };
  const handleNumberTwoValueChange = (valueToBeAssignedToNumberTwo) => {
    setNumberTwo((state) => (state = valueToBeAssignedToNumberTwo));
  };

  const handleFormSubmit = (event, { numberOne, numberTwo }) => {
    event.preventDefault();
  };

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <p>Arithmetic operations of two numbers</p>
      <label>Enter number one:</label>
      <input
        type="number"
        value={numberOne}
        onChange={(e) => handleNumberOneValueChange(e.target.value)}
      />
      <label>Enter number two:</label>
      <input
        type="number"
        value={numberTwo}
        onChange={(e) => handleNumberTwoValueChange(e.target.value)}
      />
      <p>
        <label>Previous counter: </label>
        {counterRef.current}
      </p>
      <p>
        <label>Counter: </label>
        {counter}
      </p>
      <button onClick={() => setCounter((state) => state + 1)}>
        increment counter
      </button>
      <Multiplication numberOne={numberOne} numberTwo={numberTwo} />
      <Division numberOne={numberOne} numberTwo={numberTwo} />
    </div>
  );
}

export default App;
