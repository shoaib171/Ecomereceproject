/** @format */

import { createContext, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {
  const GetProducts = async (url) => {
    const response = await axios.get(url);
    console.log(response, "ResponseData");
    const Product = await response.data;
    console.log(Product, "product");
  };

  useEffect(() => {
    GetProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ name: "shaoib-Rasheed" }}>
      {children}
    </AppContext.Provider>
  );
};
//custom Hooks
const GlobalContextHook = () => {
  return useContext(AppContext);
};
export { AppProvider, GlobalContextHook };
