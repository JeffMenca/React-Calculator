import "./App.css";
import mainCalculatorLogo from "./media/main-calculator-logo.png";
import Button from "./components/button.jsx";
import Input from "./components/input.jsx";
import ButtonClear from "./components/buttonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const updateInput = (val) => {
    setInput(input + val);
  };
  const deleteInput = () => {
    setInput(input.slice(0, -1));
  };
  const calculate = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("You need to enter values in order to calculate something");
        setInput("Empty error");
      }
    } catch (error) {
      alert("Incorrect sintax, check the values and try again");
      setInput("Sintax error");
    }
  };

  return (
    <div className="App">
      <div className="main-logo-container">
        <img src={mainCalculatorLogo} className="main-logo" alt="Main logo" />
      </div>
      <div className="calculator-container">
        <Input input={input} />
        <div className="row">
          <Button handleClick={updateInput}>7</Button>
          <Button handleClick={updateInput}>8</Button>
          <Button handleClick={updateInput}>9</Button>
          <Button handleClick={updateInput}>/</Button>
          <ButtonClear handleClear={() => setInput("")}>AC</ButtonClear>
        </div>
        <div className="row">
          <Button handleClick={updateInput}>4</Button>
          <Button handleClick={updateInput}>5</Button>
          <Button handleClick={updateInput}>6</Button>
          <Button handleClick={updateInput}>*</Button>
          <Button handleClick={updateInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={updateInput}>1</Button>
          <Button handleClick={updateInput}>2</Button>
          <Button handleClick={updateInput}>3</Button>
          <Button handleClick={updateInput}>(</Button>
          <Button handleClick={updateInput}>)</Button>
        </div>
        <div className="row">
          <Button handleClick={updateInput}>.</Button>
          <Button handleClick={updateInput}>0</Button>
          <Button handleClick={deleteInput}>⌫</Button>
          <Button handleClick={updateInput}>+</Button>
          <Button handleClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
