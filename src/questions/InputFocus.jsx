import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button style={{ padding: "8px 12px" }} onClick={handleClick}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
