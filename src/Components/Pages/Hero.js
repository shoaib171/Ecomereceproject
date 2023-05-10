/** @format */

import React from "react";

const Hero = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-lg-4 col-md-12 col-sm-12 mt-5 py-3  ">
          <div className="Hero--section mt-3 ">
            <span className=" text-primary fs-4 fw-bold  ">
              Welcome To <br />
            </span>
            <h1 className="Header  text-uppercase animate__animated animate__bounce">
              {props.title}
            </h1>
            <p className=" text-justify  ">
              Shop the Latest Trends in Fashion and Beauty at our AS_Store -
              Your One-Stop Shop for all Things Chic! Discover Thousands of
              Products and Enjoy Easy Shopping from Home. Get Free Shipping on
              Orders over $50 and 24/7 Customer Support
            </p>
            <button className="btn btn-outline-primary">Shop Now</button>
          </div>
        </div>
        <div className=" col-lg-8 col-md-12 col-sm-12 mt-5 py-3  ">
          <div className="d-flex justify-content-center ">
            <span className="me-2">
              <img
                alt="About--img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Sp-NBWvKruCgJ1frXDnO2OldW3pvRC9VNTZ4vGWYuX-UoLZexGgp&s=0"
                className="d-block w-100 h-50 "
              />
              <img
                alt="About--img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgo5LyIeXCrdGPz9MgN-Ynk92kua3kVgHa01OKWAivfx1LZMGYM1W-UQ&s=0"
                className="d-block w-100 mt-1 h-50 "
              />
            </span>
            <span className="me-3">
              <img
                alt="About--img"
                src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3BwaW5nJTIwY2FydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
