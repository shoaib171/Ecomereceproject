/** @format */

import React from "react";

const services = () => {
  return (
    <div className="container bg-light  mb-3 rounded">
      <div className="row">
        <div className="col-lg-3 mt-5 py-3">
          <div className="Service--part animate__animated animate__backInLeft ms-3 shadow-lg bg-light ms-5 ">
            <h5 className=" fs-4 text-dark mt-5 ">
              <i className=""></i>
              Customer Support
            </h5>
          </div>
        </div>
        <div className="col-lg-6 py-3">
          <div className="Service--part2 shadow-lg bg-light animate__animated animate__bounce ">
            <h5 className=" fs-4 text-dark mt-4  ">Easy Payment Method</h5>
          </div>
          <div className="Service--part2 shadow-lg  bg-light mt-2 animate__animated animate__bounce">
            <h5 className=" fs-4 text-dark mt-5 ">PayBack Guaranteed </h5>
          </div>
        </div>
        <div className="col-lg-3 mt-5 py-3">
          <div className="Service--part animate__animated animate__backInRight shadow-lg bg-light me-5 ">
            <h5 className="fs-4 text-dark mt-4">Cash On Free Delivery</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
