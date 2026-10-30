import axios from "axios";

export const httpAxios = axios.create({
    baseURL: "/api",
     withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});