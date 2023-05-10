/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer--Container  container-fluid text-white ">
      <div className="row ">
        <div className="col-lg-3 col-md-6 col-sm-12 ">
          <div className="mt-5 py-2  ms-4">
            <h3 className="fs-4">AS_STORE</h3>
            <p className="text-justify  ">
              Discover Your Style with AS_STORE Your One-Stop Shop for Fashion
              and More
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="Footer-part mt-5 py-2 ms-4 ">
            <p>subscribe to get more important updates via email </p>
            <input type="email" placeholder="Enter Email to subscribe" />
            <div>
              <button className="btn btn-outline-light mt-2">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mt-5 py-2 ms-4 ">
            <NavLink to="">
              <button className="btn btn-outline-light ms-2">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "20px" }}
                ></i>
              </button>
            </NavLink>
            <NavLink to="">
              <button className="btn btn-outline-light ms-2">
                <i className="fa fa-instagram" style={{ fontSize: "20px" }}></i>
              </button>
            </NavLink>
            <NavLink to="">
              <button className="btn btn-outline-light ms-2">
                <i className="fa fa-youtube  " style={{ fontSize: "20px" }}></i>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mt-5 py-2  ms-4">
            <h5 className="fs-5">Call_us</h5>
            <i className="fa fa-phone me-2" style={{ fontSize: "25px" }}></i>
            <span>92 3035084827</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <footer className="text-center">
            &#169; 2023 AS_Store. All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
