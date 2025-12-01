import React, { useEffect, useState } from "react";

function GuessTheNumber() {
  const [guessedNumber, setGuessedNumber] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  // Function to handle guess checking
  const handleGuess = () => {
    console.log("handle Guess");
    if (inputValue >= 1 && inputValue <= 100) {
      setCounter((pre) => pre + 1);
      if (Number(inputValue) == guessedNumber) {
        setMessage(
          "Congratulations! You guessed the number in " +
            (counter + 1) +
            " attempts"
        );
        console.log(
          "Congratulations! You guessed the number in " +
            (counter + 1) +
            " attempts"
        );
      } else if (inputValue > guessedNumber) {
        setMessage("Too high! Try again");
        console.log("Too high! Try again");
      } else {
        setMessage("Too Low! Try again");
        console.log("Too Low! Try again");
      }
    } else {
      setMessage("Please enter a number between 1 and 100");
      console.log("Please enter a number between 1 and 100");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    console.log("resetGame");
    setGuessedNumber(null);
    setMessage("");
    setInputValue("");
    setCounter(0);
    randomNumGenerator();
  };

  const randomNumGenerator = () => {
    const num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    setGuessedNumber(num);
    console.log("num by random", num);
  };

  useEffect(() => {
    randomNumGenerator();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div style={{ marginTop: 30 }}>
        <button style={{ marginRight: 20 }} onClick={handleGuess}>
          Check Guess
        </button>
        <button style={{ marginLeft: 20 }} onClick={resetGame}>
          Reset Game
        </button>
      </div>
      {message.length > 1 && (
        <div style={{ marginTop: 20 }}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default GuessTheNumber;
