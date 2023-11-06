import React, { useState, useEffect } from 'react';

import { login, useLogin } from "./cart"

export default function Login() {
  const loggedIn = useLogin();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if(loggedIn) return null;

  return (
    <div className=''>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className='ri-fingerprint-line text-2xl' id='showLogin'></i>
      </span>
      {showLogin && (
        <div className='bg-white absolute p-5 border-4 border-blue-800' style={{width:300, top: "2rem", left:-250}}>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='text-black border text-sm border-gray-400 p-2 my2 rounded-md w-full'/>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='text-black border text-sm border-gray-400 p-2 my-2 rounded-md w-full'/>
          <button className='bg-blue-500 text-white p-2 my-2 rounded-md w-full' onClick={() => login(username, password)} id='loginBtn'>Login</button>
        </div>
      )}
    </div>
  );
}