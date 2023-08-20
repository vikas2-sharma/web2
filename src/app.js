import React, { useState } from "react";
import Navbar from "./components/nav-bar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home, MenSection, NewArrival } from "./components";
import LoginWindow from "./components/components/login-window";
import Input from "./components/components/blocks/input";
import "./sample.css";
import { CSSTransition } from "react-transition-group";
import Product from "./components/pages/product";
import { getProductDetails } from "./misc/db";
const App = () => {
  console.log("test:", getProductDetails(12));
  // const [isEnter, setIsEnter] = useState(false);
  // return (
  //   <div class="container" onClick={(e) => console.log(e.target)}>
  //     <CSSTransition timeout={600} in={isEnter} classNames={"ss"}>
  //       <div className="sample-div">
  //         <h1>{`Hello World `}</h1>
  //       </div>
  //     </CSSTransition>
  //     <button
  //       style={{}}
  //       onClick={() => {
  //         setIsEnter(!isEnter);
  //       }}
  //     >
  //       {!isEnter ? "Enter" : "Exit"}
  //     </button>
  //   </div>
  // );
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <LoginWindow /> */}
        {/* <h1>Hello React</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewArrival />} />
          <Route path="/men" element={<MenSection />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
