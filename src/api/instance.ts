import axios from "axios";

const API_BASE_URL = "http://sees-backend.onrender.com/v1/"

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
