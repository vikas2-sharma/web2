import React from "react";
import Input from "./blocks/input";

function LoginWindow(props) {
  const labelOnFocus = (ele) => {
    ele.classList.add("input-label-focus");
  };
  const labelOnBlur = (ele) => {
    ele.classList.remove("input-label-focus");
  };
  return (
    <div
      className="fullscreen"
      onClick={(e) => {
        if (e.target.className === "fullscreen") {
          props.onClickCancel();
        }
      }}
    >
      <div className="popup-window">
        <div className="login-form">
          <h1>Login</h1>
          <Input placeHolder={"User Name"} type={"text"} />
          <Input placeHolder={"Password"} type={"password"} />
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;
