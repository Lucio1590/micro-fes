import React, { useState, useEffect } from 'react';

import { cart, clearCart } from 'cart/cart';
import { currency } from 'home/products';

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    cart.subscribe((val => setItems(val?.cartItems ?? [])));
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
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
      <div className='text-right'>
        {currency.format(items.reduce((a,v)=> a + v.quantity * v.price, 0))}
      </div>
      </div>
      {items.length > 0 && (
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
          <div className="flex-end">
            <button
              id="checkout"
              className="bg-green-800 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              <span><i className="ri-bank-card-fill"></i> Checkout</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
  

}