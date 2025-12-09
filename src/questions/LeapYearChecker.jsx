import React, { useState } from "react";
import "./style.css";

const LeapYearChecker = () => {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    setError("");
    setMessage("");
    setInputText(event.target.value);
    // checkLeapYear(event.target.value)
  };

  const checkLeapYear = () => {
    if (inputText.trim().length != 0) {
      // it will check centuries by % 100 like 1900 1800 if it remainder is not 0 then it checks 400 so after each 400 years in century is a leap year
      if (
        (inputText % 4 === 0 && inputText % 100 !== 0) ||
        inputText % 400 === 0
      ) {
        setMessage(inputText + " is a Leap Year");
      } else {
        setMessage(inputText + " is not a Leap Year");
      }
    } else {
      setError("Please enter a year");
    }
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input type="text" data-testid="year-input" onChange={onChangeHandler} />

      <button data-testid="check-btn" onClick={checkLeapYear}>
        Check
      </button>
      {message.length != 0 && (
        <div className="result" data-testid="result">
          <p>{message}</p>
        </div>
      )}
      {error.length != 0 && (
        <div className="error" data-testid="error-msg">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LeapYearChecker;
