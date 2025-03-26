import axios, { AxiosRequestConfig } from "axios";

console.log(import.meta.env)
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (path: string, options: AxiosRequestConfig = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

