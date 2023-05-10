/** @format */

import React from "react";
import Hero from "./Hero";
import Services from "../Pages/services";
import { GlobalContextHook } from "../../ContextApi/ProductContext";
const Home = () => {
  // const { name } = GlobalContextHook();
  return (
    <>
      <Hero title="AS_Store" />
      <Services />
    </>
  );
};

export default Home;
