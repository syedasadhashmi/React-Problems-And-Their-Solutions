import React, { useEffect, useState } from "react";

function ChipsInput() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("chips");
    if (saved) {
      setChips(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const keyChange = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim().length != 0) {
        setChips((prev) => {
          const updated = [...prev, inputValue];
          localStorage.setItem("chips", JSON.stringify(updated));
          return updated;
        });
        setInputValue("");
      }
    }
  };

  const deleteChipHandler = (e, index) => {
    setChips((prev) => {
      const updated = prev.filter((val, i) => {
        return !(val === e && i === index);
      });
      localStorage.setItem("chips", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        style={{ padding: "5px 10px" }}
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={keyChange}
      />
      {chips && (
        <div style={{ display: "flex" }}>
          {chips?.map((e, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: "2px 15px",
                  border: "1px solid",
                  margin: "10px 5px",
                  borderRadius: "5px",
                }}
              >
                <p style={{ position: "relative" }}>
                  {e}{" "}
                  <span
                    style={{
                      position: "absolute",
                      top: -20,
                      cursor: "pointer",
                    }}
                    onClick={() => deleteChipHandler(e, index)}
                  >
                    X
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ChipsInput;
