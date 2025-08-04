import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import ScrollToTop from "./components/ScrollToTop";
import TourDetails from "./pages/TourDetails";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] mt-[100px]">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/tours/:id" element={<TourDetails/>}></Route>
        </Routes>
      </div>
      <Contact/>
    </div>
  );
};

export default App;
