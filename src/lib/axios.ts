import axios, { AxiosInstance } from "axios";

export const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
