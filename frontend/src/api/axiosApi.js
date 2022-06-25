import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/auth/";

export const accessToken = localStorage.getItem("access_token");

export const axiosAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: accessToken ? "JWT " + accessToken : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
