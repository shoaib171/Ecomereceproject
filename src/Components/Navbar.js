/** @format */

import React from "react";
import Logo from "../Common/Images/STORE.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light shadow-sm  sticky-top">
        <div className="container-fluid  ">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="" width="200" height="45" className="ms-2" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0   ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/product"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </button>
              <button className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-plus me-1"></i>
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
