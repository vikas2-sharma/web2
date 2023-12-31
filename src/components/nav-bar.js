import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginWindow from "./components/login-window";
import { CSSTransition } from "react-transition-group";
import { WishListContext } from "../misc/reducer/provider";

function Navbar(props) {
  const { state } = useContext(WishListContext);
  // console.log("useContext", value);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const onLoginClick = () => {
    console.log("profile clicked");
    setShowLogin(true);
    // return <LoginWindow />;
  };
  return (
    <React.Fragment>
      <CSSTransition in={showLogin} classNames={"login"} timeout={600}>
        <div class="login-animate">
          <LoginWindow
            visible={showLogin}
            onClickCancel={() => {
              setShowLogin(false);
            }}
          />
        </div>
      </CSSTransition>

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
            <div className="wishlist" style={{ margin: "0px 10px" }}>
              <FontAwesomeIcon icon={faHeart} />
              {state.wishListCount > 0 ? (
                <div className="count">{state.wishListCount}</div>
              ) : (
                ""
              )}
            </div>
            {/* <div style={{ margin: "0px 10px" }}>
              <FontAwesomeIcon icon={faUser} />
            </div> */}
            <img
              onClick={onLoginClick}
              className="profile"
              src={"../images/sample.png"}
            />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
