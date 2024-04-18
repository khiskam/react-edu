import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const client = new QueryClient();
export const axiosAuthClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosAuthClient.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const axiosUnuthClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
