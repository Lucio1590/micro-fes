import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";


export default function Header(){
  return (
    <div className="p-5 bg-blue-500 text-3xl font-bold text-white">
      <div className="flex">
        <div className="flex-grow">
          <Link id="home" to="/" className="hover:underline">Fidget Spiner World</Link>
          <span className="mx-2">|</span> 
          <Link id="cart" to="/cart" className="hover:underline">Cart</Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}