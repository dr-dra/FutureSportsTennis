import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BookaCourt from "./pages/BookCourt";
import Coaching from "./pages/Coaching";
import Leagues from "./pages/Leagues";
import ContactUs from "./pages/ContactUs";

import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookacourt" element={<BookaCourt />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
      <Footer />;
    </Router>
  );
}

export default App;
