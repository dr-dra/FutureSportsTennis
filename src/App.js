//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookacourt" element={<BookaCourt />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
