import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navabar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/">
             Student Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">
              About
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">
              Contact
            </NavLink>
          </li> */}
        </div>
        <Link className="btn btn-outline-darker" to="/students/add">Add Student</Link>
      </div>
    </nav>
  );
};

export default Navabar;
