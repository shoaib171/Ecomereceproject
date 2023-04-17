/** @format */

import React from "react";

const Hero = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <div className=" col-lg-6 col-md-6 col-sm-12 mt-5 py-3  ">
          <div className="Hero--section mt-3 ">
            <span className=" text-primary fs-4 fw-bold  ">
              Welcome To <br />
            </span>
            <h1 className="Header  text-uppercase">{props.title}</h1>
            <p className=" text-justify  ">
              Shop the Latest Trends in Fashion and Beauty at our AS_Store -
              Your One-Stop Shop for all Things Chic! Discover Thousands of
              Products and Enjoy Easy Shopping from Home. Get Free Shipping on
              Orders over $50 and 24/7 Customer Support
            </p>
            <button className="btn btn-outline-primary">Shop Now</button>
          </div>
        </div>
        <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 mt-4 py-5  ">
          <div className=" bg-dark  shadow-sm   ">
            <img
              className="d-block w-100  mt-2 ms-2"
              height="400px"
              src="https://plus.unsplash.com/premium_photo-1661368885798-972e2b611ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHNob3BwaW5nJTIwd2l0aCUyMGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Hero--img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
