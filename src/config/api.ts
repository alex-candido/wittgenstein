import axios, { AxiosInstance } from 'axios';
import { env } from "./envs";

const api: AxiosInstance = axios.create({
  baseURL: env.NEXT_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;