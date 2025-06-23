import React, { useState } from "react";
import "./Input.css";

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="input-form-wrapper">
      <div className="input-form-container">
       
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Type to launch a moving target."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
        </div>

        
        <div
          className="submit-button"
          onClick={handleSubmit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        >
          launch
        </div>
      </div>
    </div>
  );
};

export default InputForm;
