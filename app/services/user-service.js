import { httpAxios } from "../helper/axiosHelper.js";

export const signUpuser = async (user) => {
  try {
    const response = await httpAxios.post("/users", user);
    return response.data;
  } catch (error) {
    console.error("SIGNUP STATUS:", error.response?.status);
    console.error("SIGNUP ERROR:", error.response?.data);
    throw error;
  }
};

export const loginUser = async (logindata) => {
    try {
        let response = await httpAxios.post('/login', logindata)
        return response.data;
    }catch (error) {
         console.log("STATUS:", error.response?.status);
        console.log("BACKEND ERROR:", error.response?.data);
        console.log("ERROR MESSAGE:", error.message);
        throw error
    }
}


export const currentUserDetails = async () => {
  try {
    const response = await httpAxios.get("/current", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("BACKEND ERROR:", error.response?.data);
    console.log("ERROR MESSAGE:", error.message);

    throw error;
  }
};


export const logoutUser = async () => {
    try {
        let response = await httpAxios.post('/logout')
         return response.data;
    
    }catch (error) {
         console.log("STATUS:", error.response?.status);
        console.log("BACKEND ERROR:", error.response?.data);
        console.log("ERROR MESSAGE:", error.message);
        throw error
    }
}