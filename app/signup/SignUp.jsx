"use client";

import React, { useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { signUpuser } from "../services/user-service";
 import { useRouter } from "next/navigation";
//import bcrypt from "bcryptjs";



function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileImage : "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  });

  const navigate = useRouter()

  const onchangeHandler =  (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
 
const userAddHandler = async (e) => {
  e.preventDefault();

  if (
    formData.name.trim() === "" ||
    formData.email.trim() === "" ||
    formData.password.trim() === "" ||
    formData.about.trim() === ""
  ) {
    toast.error("All the fields are mandatory");
    return;
  }

  try {
    const response = await signUpuser(formData);

    // Check whether the API actually succeeded
    if (!response || response.success === false) {
      toast.error(response?.message || "Unable to create user");
      return;
    }

    toast.success("User created successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
    });

    setFormData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileImage: "",
    });

    // Navigate after the toast has time to appear
    setTimeout(() => {
      navigate.push("/login");
    }, 2000);
  } catch (error) {
    console.error("Error creating user:", error);
    toast.error(
      error.response?.data?.message || "Error creating user"
    );
  }
};



  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-auto mt-20 pb-20">
 <ToastContainer  position="bottom-center" autoClose={3000} />

      <h1>Sign Up </h1>
      <form className="space-y-5" onSubmit={userAddHandler}>
        {/* Username / Email */}
        <div>
          <label
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            User name
          </label>
      <input
        type="text"
        name="name"
            placeholder="Enter your  Name"
        value={formData.name}
        onChange={onchangeHandler}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-amber-300 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />
            
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your  email"
            value={formData.email}
            onChange={onchangeHandler}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-amber-300 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-300 mb-2"
          > password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={onchangeHandler}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-amber-300 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            about
          </label>
          <textarea
            name="about"
            placeholder="Enter your  email"
            value={formData.about}
            onChange={onchangeHandler}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-amber-300 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          ></textarea>
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
  );

}

export default SignUp;
