"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast, ToastContainer } from "react-toastify";
import { currentUserDetails } from "../services/user-service";

import "react-toastify/dist/ReactToastify.css";

function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const logUser = await currentUserDetails();
        
        console.log("CURRENT USER:", logUser);
        setUser(logUser);

        toast.info("User loaded data", {
          position: "top-center",
           toastId: "user-loaded"
        });

      } catch (error) {
        console.error("CURRENT USER ERROR:", error);

        setUser(undefined);

        // toast.error("Error in loading current User", {
        //   position: "top-center",
        //    toastId: "user-load-error",
        // });
      }
    }

    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
