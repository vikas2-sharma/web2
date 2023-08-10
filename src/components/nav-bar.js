import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
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
            </div>
          </div>
          <div>
            <img className="profile" src={require("../images/sample.png")} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
