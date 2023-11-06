import { createEffect, createSignal, Show } from "solid-js"

import { jwt, addToCart} from "cart/cart"

export default ({id})=>{
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(()=>{
    return jwt.subscribe((val)=>{
      setLoggedIn(val)
    })
  })

  return (
    <Show when={loggedIn()}>
      <button class="bg-red-900 text-white py-2 px-5 rounded-md text-sm" onClick={()=>addToCart(id)}>Add to Cart</button>
    </Show>
  );
}