import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import ScrollToTop from "./components/ScrollToTop";
import TourDetails from "./pages/TourDetails";
import Contact from "./components/Contact";
import Login from "./pages/Login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import AddTour from "./pages/AddTour";
import ListTours from "./pages/ListTours";
import UpdateTour from "./pages/UpdateTour";

const App = () => {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.includes("/admin");
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <>
      {isAdminPage ? (
        // Admin layout
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              {/* ممكن تضيفي مسارات تانية للـ admin هون */}
              <Route path="/admin/AddTour" element={<AddTour />}></Route>
              <Route
                path="/admin/ListTours"
                element={<ListTours/>}
              ></Route>
              <Route path="/admin/updateTour/:id" element={<UpdateTour/>}></Route>
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          {!hideLayout && <Navbar />}
          <div
            className={`${hideLayout ? "h-full" : "min-h-[70vh] mt-[100px]"}`}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/tours" element={<Tours />}></Route>
              <Route path="/tours/:id" element={<TourDetails />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </div>
          {!hideLayout && <Contact />}
        </div>
      )}
    </>
  );
};

export default App;
