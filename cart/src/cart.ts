import React, {useState, useEffect} from 'react';
import { BehaviorSubject } from 'rxjs';

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject(null);

export const getCart = () => {
  fetch(`${API_SERVER}/cart`, {
    headers: { 'Authorization': `Bearer ${jwt.value}` }
  }).then(res => res.json()).then(res => {
    cart.next(res);
    return res;
  });
}

export const clearCart = () => {
  fetch(`${API_SERVER}/cart`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${jwt.value}` }
  })
  .then(res => res.json())
  .then(() => {
    getCart();
  });
}

export const addToCart = (id:number, ) => {
  fetch(`${API_SERVER}/cart`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${jwt.value}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(() => {
    getCart();
  });
}

export const login = (username:string, password:string) => {
  return fetch(`${API_SERVER}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      jwt.next(res.access_token);
      getCart();
      return res.access_token;
    });
}

export function useLogin() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe(() => {
      setLoggedIn(!!jwt.value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return loggedIn;
}

