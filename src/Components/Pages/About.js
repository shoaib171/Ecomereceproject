/** @format */

import React from "react";
import Girl from "../../Common/Images/girl.jpg";
import Assortment from "../../Common/Images/assortment.jpg";
import Apparels from "../../Common/Images/appareal.jpg";
import Beverages from "../../Common/Images/beverages.jpg";
import Market from "../../Common/Images/market.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row mt-3 py-3 ">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="">
            <p className="text-justify">
              Ecommerce websites typically offer a wide range of products from
              various brands and sellers, making it easy for consumers to
              compare prices, features, and quality before making a purchase.
              Many ecommerce sites also offer additional features like customer
              reviews, ratings, and recommendations, helping shoppers make more
              informed decisions.
            </p>
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
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <div className="mt-3">
            <img
              alt="About--img"
              className="d-block w-100"
              height="420px"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNob3BwaW5nJTIwY2FydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 py-3">
          <span className="">
            <img
              className="d-block w-100 "
              alt="About--img"
              src="https://media.istockphoto.com/id/1386010022/photo/checking-the-bill.jpg?b=1&s=170667a&w=0&k=20&c=u31aUWBjFaywAcBcO1Kzcshw0ke_9T3a-FC6q_y21Rk="
            />
          </span>
          <div className="d-flex mt-2">
            <span className="me-2">
              <img
                className="d-block w-100"
                height="280px"
                src={Girl}
                alt="About--img"
              />
            </span>
            <span>
              <img
                className="d-block w-100"
                height="280px"
                src={Assortment}
                alt="About--img"
              />
            </span>
          </div>
        </div>
        <div className=" col-lg-8 col-md-8  col-sm-12 py-3  ">
          <div className="d-flex ms-3">
            <span className="me-3">
              <img
                height="250px"
                src={Girl}
                className="d-block w-100"
                alt="About--img"
              />
            </span>
            <span>
              <img
                height="250px"
                className="d-block w-100"
                src={Beverages}
                alt="About--img"
              />
            </span>
          </div>
          <div className="d-flex ms-3 mt-3">
            <span className="me-3">
              <img
                src={Market}
                className="d-block w-100"
                height="250px"
                alt="About--img"
              />
            </span>
            <span>
              <img
                height="250px"
                className="d-block w-100"
                src={Apparels}
                alt="About--img"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
