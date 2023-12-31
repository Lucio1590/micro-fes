import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import CartContent from "./CartContent";
import Header from "home/Header";
import Footer from "home/Footer";

// Add the following lines to your tsconfig.json file:
// "baseUrl": "./src",
// "paths": {
//   "home/*": ["../path/to/home/src/*"]
// }


const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
