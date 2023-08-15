import React, { useEffect, useRef } from "react";
import "./input.css";
function Input({ placeHolder, type, value, onChange = () => {}, autoFocus }) {
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const onInputChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };
  useEffect(() => {
    if (autoFocus) {
      // labelRef.current.classList.add("input-label-focus");
      inputRef.current.focus();
    }
  }, []);
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
        onChange={onInputChange}
      />
    </div>
  );
}

export default Input;
