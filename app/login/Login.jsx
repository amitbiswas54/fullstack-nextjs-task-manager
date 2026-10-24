'use client'
import React from 'react'
import { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import {   loginUser,  currentUserDetails} from '../services/user-service';
import { useRouter } from 'next/navigation';

import { useContext } from "react";
import UserContext from "@/app/userContext/userContext";

function Login() {

  const router = useRouter()

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({ 

    email: "",
    password: "",

  })

  let onchangeHandler =  (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  }

  let loginHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    if(formData.email.trim()==="") {
     toast.info("Email is required", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
     });
      return;
    }
    if(formData.password.trim()==="") {
      toast.info("Password is required", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      });
      return;

    }
  // await POST(formData)
      // Call your login service here with formData
      // Example: await loginService(formData);

    try{
       const result =  await loginUser(formData)
       console.log(result)
       toast.success('Login Succesfully nsodsoi', {
        position: 'top-center',
        autoClose: 3000,
       })

   const userData = await currentUserDetails();

    console.log("USER:", userData);

    // 3. Update Context
    setUser(userData);

       
       router.push('/profile')
       return result;


    }catch(error){
      toast.error(error.response.data.message,{
        position:'top-center'
      })
      throw error

    }


      setFormData({ 
         email: "", 
         password: ""
        
      })
  }

  return (
  <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-auto mt-20"> 
   <ToastContainer  position="bottom-center" autoClose={3000} />
  

          <form className="space-y-5" onSubmit={loginHandler}>
         
            {/* Username / Email */}
            <div>
           
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
             
                Username or Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your username or email"
                onChange={onchangeHandler}
                className="w-full rounded-lg border 
                border-slate-300 px-4 py-3 text-sm 
                text-white outline-none transition 
                placeholder:text-slate-400
                 focus:border-indigo-500 
                 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            {/* Password */}
            <div>
           
              <div className="flex items-center justify-between mb-2">
             
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-300"
                >
               
                  Password
                </label>
                
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                 onChange={onchangeHandler}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            {/* Remember Me */}
            
            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.99]"
            >
           
              Sign In
            </button>
          </form>
       
        
    </div>
  )
}

export default Login