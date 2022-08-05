import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <h1>RJ Movie Reviewer</h1>
      </div>
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-link"
          s
          activeClassName="selected"
          to="/contact"
        >
          Contact
        </NavLink>
        {/* <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-movie"
        >
          Add a Movie
        </NavLink> */}
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/movies"
        >
          Movies
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
