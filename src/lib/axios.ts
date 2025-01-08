import axios, { AxiosInstance } from "axios";

export const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    withXSRFToken: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
