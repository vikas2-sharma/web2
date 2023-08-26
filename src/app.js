import React from "react";
import Navbar from "./components/nav-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, MenSection, NewArrival } from "./components";
import "./sample.css";
import Product from "./components/pages/product";
import StateProvider from "./misc/reducer/provider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StateProvider>
          <Navbar />

          {/* <LoginWindow /> */}
          {/* <h1>Hello React</h1> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewArrival />} />
            <Route path="/men" element={<MenSection />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </StateProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
