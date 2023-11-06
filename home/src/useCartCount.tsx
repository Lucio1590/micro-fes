import { useState, useEffect } from "react";
import { cart } from "cart/cart";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}


export function useCartCount() {
  const [count, setCount] = useState(cart.cartItems.length);

  useEffect(() => {
    cart.subscribe(({ cartItems } : Cart ) => setCount(cartItems.length));
  }, []);

  return count;
}