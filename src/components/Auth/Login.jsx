import React, { useState } from "react";

const Login = ({handleLogin}) => {


    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const submitHandler=(event)=>{
        event.preventDefault()
        handleLogin(email,password)
        console.log("email is " ,email);
        console.log("password is ",password);
       
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={(event)=>{submitHandler(event)}} className="flex flex-col items-center justify-center" action="">
          <input value={email} onChange={(event)=>{setEmail(event.target.value)}} required
            className="border-2 border-emerald-600 outline-none text-xl placeholder:text-white text-white py-4 px-5 rounded-full"
            type="email"
            placeholder="Enter Email"
          />
            <input value={password} onChange={(event)=>{setPassword(event.target.value)}} required
            className="border-2 border-emerald-600 mt-4 outline-none text-xl placeholder:text-white text-white py-4 px-5 rounded-full"
            type="password"
            placeholder="Enter Password"
          />
          <button className="border-2 border-emerald-600 mt-4 outline-none text-xl  px-10 placeholder:text-white text-white bg-emerald-700 py-4 px-5 rounded-full">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
