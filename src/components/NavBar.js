import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const NavBar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <img className="ml-30" src="/logo.png" alt="Logo" width="200px" />
      <div className="menu">
        <ul className="links">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookacourt" activeClassName="active">
              Book a Court
            </NavLink>
          </li>
          <li>
            <NavLink to="/coaching" activeClassName="active">
              Coaching
            </NavLink>
          </li>
          <li>
            <NavLink to="/leagues" activeClassName="active">
              Leagues
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <span>&nbsp;</span>
          </li>
          <li>
            <div className="search-box">
              <form>
                <input type="text" placeholder="Search" />
                <button id="search" className="bgGreen" type="submit">
                  Search
                </button>
              </form>
            </div>
          </li>
        </ul>
      </div>

      <div className="trigram">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
