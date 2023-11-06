import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import "remixicon/fonts/remixicon.css";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import MainLayout from "./MainLayout";


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <HomeContent />
    <Footer />
  </div>
);
ReactDOM.render(<MainLayout />, document.getElementById("app"));
