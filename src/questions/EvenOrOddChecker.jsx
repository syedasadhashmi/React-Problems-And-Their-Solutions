import React, { useState } from "react";
import "./evenOrOdd.css";

function EvenOrOddChecker() {
  const [result, setResult] = useState(null);
  const [inputValue, setValue] = useState("");
  const [laoding, setLaoding] = useState(null);
  const isNumber = /^\d+$/;

  const checkHandler = () => {
    setResult(null);
    console.log("inputValue:", inputValue);
    setLaoding("Checking...");
    setTimeout(() => {
      if (inputValue.trim().length != 0 && isNumber.test(inputValue)) {
        if (inputValue % 2 == 0) {
          setLaoding(null);
          setResult("The number " + inputValue + " is even.");
        } else {
          setLaoding(null);

          setResult("The number " + inputValue + " is odd.");
        }
      } else {
        setLaoding(null);
        setResult("Please enter a valid number.");
      }
    }, 1000);
  };

  const changeHandler = (e) => {
    console.log(e.target.value.trim());
    setValue(e.target.value.trim());
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        data-testid="number-input"
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={inputValue}
        onChange={changeHandler}
      />

      <button
        data-testid="check-button"
        className="check-button"
        onClick={checkHandler}
      >
        Check
      </button>

      {/* {result?.length === 0 && ( */}
      {laoding && (
        <div data-testid="loading" className="loading">
          {laoding}
        </div>
      )}
      {result && (
        <div data-testid="result" className="result-area">
          <div className="result">{result}</div>
        </div>
      )}
    </div>
  );
}

export default EvenOrOddChecker;
