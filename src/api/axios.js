import axios from "axios";

// const BASE_URL = "https://douha.pythonanywhere.com/api";
const BASE_URL = "http://192.168.21.91/api";

export default axios.create({
  baseURL: BASE_URL,
  //   headers: {
  //     "Content-Type": "application/json",
  //     // Accept: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
