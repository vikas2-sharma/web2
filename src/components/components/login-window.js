import React, { useState } from "react";
import Input from "./blocks/input";

function LoginWindow(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

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
          <div className="login-options">
            <h3
              className={isLogin ? "" : "active"}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign Up
            </h3>
            <h3
              className={isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </h3>
          </div>
          {isLogin ? (
            <div id="login-page" className="login-form">
              <Input
                placeHolder={"UserName"}
                type={"text"}
                value={userName}
                onChange={setUserName}
                autoFocus
              />
              <Input
                placeHolder={"Password"}
                type={"password"}
                value={password}
                onChange={setPassword}
              />
              <div style={{ width: "100%", margin: "30px 0px 10px 0px" }}>
                <button
                  style={{ width: "100%" }}
                  onClick={() => {
                    console.log(
                      `username:${userName} and password ${password}`
                    );
                    props.onClickCancel();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div id="signup-page" className="login-form">
              <Input
                placeHolder={"Name"}
                type={"text"}
                value={userName}
                onChange={setUserName}
                autoFocus
              />
              <Input
                placeHolder={"Email"}
                type={"text"}
                value={userName}
                onChange={setUserName}
              />
              <Input
                placeHolder={"Username"}
                type={"text"}
                value={userName}
                onChange={setUserName}
              />
              <Input
                placeHolder={"Password"}
                type={"password"}
                value={password}
                onChange={setPassword}
              />
              <div style={{ width: "100%", margin: "30px 0px 10px 0px" }}>
                <button
                  style={{ width: "100%" }}
                  onClick={() => {
                    console.log(
                      `username:${userName} and password ${password}`
                    );
                    props.onClickCancel();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;
