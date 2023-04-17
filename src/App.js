/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
