import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginWindow from "./components/login-window";

function Navbar(props) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const onLoginClick = () => {
    console.log("profile clicked");
    setShowLogin(true);
    // return <LoginWindow />;
  };
  return (
    <React.Fragment>
      {showLogin ? (
        <LoginWindow
          visible={showLogin}
          onClickCancel={() => {
            setShowLogin(false);
          }}
        />
      ) : undefined}
      <header>
        <div className="nav-container">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("logo click");
              navigate("/");
            }}
          >
            <h1>Vastralaya</h1>
          </div>
          <div className="header-options">
            <NavLink to={"/new"}>
              <h3 className="header-link">New</h3>
            </NavLink>
            <NavLink to="/men">
              <h3 className="header-link">Men</h3>
            </NavLink>
            <NavLink>
              <h3 className="header-link">Women</h3>
            </NavLink>
            <NavLink>
              <h3 className="header-link">Accessories</h3>
            </NavLink>
            <div className="search-container">
              <input className="search-input" type="text" />
              <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <div className="nav-profile-container">
            <div style={{ margin: "0px 10px" }}>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            {/* <div style={{ margin: "0px 10px" }}>
              <FontAwesomeIcon icon={faUser} />
            </div> */}
            <img
              onClick={onLoginClick}
              className="profile"
              src={require("../images/sample.png")}
            />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
