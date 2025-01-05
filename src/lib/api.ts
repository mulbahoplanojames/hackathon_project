import axios from "axios";

// I am creating this instance of axios to make requests to the Laravel backend
const api = axios.create({
  baseURL: process.env.LARAVEL_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
