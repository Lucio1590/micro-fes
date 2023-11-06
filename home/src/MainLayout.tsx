import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";


const MainLayout = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10   ">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/product/:id" Component={PDPContent}/>
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
export default MainLayout;