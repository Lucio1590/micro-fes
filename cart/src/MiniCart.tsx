import React, { useEffect, useState } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products"

export default function MiniCart() {
  const [items, setItems] = useState(undefined as any);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    const subscription = cart.subscribe((val) => setItems(val?.cartItems));
    return subscription.unsubscribe;
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showCart">
        <i className={`ri-shopping-cart-2-${items.length > 0 ? "fill" : "line"} text-2xl`}></i>
        {items.length}
      </span>
      {showCart && (
        <div style={{width:300, top:"2rem", left:-250}} className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black">
          <div style={{gridTemplateColumns:"1fr 3fr 10fr 2fr"}} className="grid gap-3 text-sm">
            {items.map((item: any) => (
              <>
                <div>{item.quantity}</div>
                <img src={item.image} alt={item.name} className="max-h-6"></img>
                <div>{item.name}</div>
                <div className="text-right">
                  {currency.format(item.quantity * item.price)}
                </div>
              </>
            ))}
            <hr className="col-span-4"/>
            <div></div>
            <div></div>
            <div></div>
            <div>
              {currency.format(items.reduce((a,v)=> a + v.quantity * v.price, 0))}
            </div>
          </div>
        <div className="mt-3 flex justify-between w-full">
              <div className="flex-grow">
                <button
                  id="clearCart"
                  className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  <span><i className="ri-delete-bin-2-line"></i> Clear Cart</span>
                </button>
              </div>
              <div className="flex-grow">
                <button
                  id="checkout"
                  className="bg-green-800 text-white py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  <span><i className="ri-bank-card-fill"></i> Checkout</span>
                </button>
              </div>
          </div>
        </div>
      )}
    </>
  );

}