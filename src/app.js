import React from "react";
import Navbar from "./components/nav-bar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NewArrival from "./components/pages/new";
import Home from "./components/pages/home";
import MenSection from "./components/pages/men";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <h1>Hello React</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewArrival />} />
          <Route path="/men" element={<MenSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
