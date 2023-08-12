import React, { useRef } from "react";
import "./input.css";
function Input({ placeHolder, type, value, onChange }) {
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  return (
    <div className="custom-input">
      <p
        ref={labelRef}
        on
        id="input-label"
        className="input-label"
        onClick={() => {
          //   console.log(inputRef);
          inputRef.current.focus();
        }}
      >
        {placeHolder}
      </p>
      <input
        ref={inputRef}
        type={type || "text"}
        onFocus={() => {
          labelRef.current.classList.add("input-label-focus");
        }}
        onBlur={() => {
          console.log("value", inputRef.current.value);
          if (!inputRef.current.value)
            labelRef.current.classList.remove("input-label-focus");
        }}
        value={value}
      />
    </div>
  );
}

export default Input;
