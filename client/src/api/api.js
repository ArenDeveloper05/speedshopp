import axios from "axios";

const APIUrl = "http://127.0.0.1:8000/api";
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// GET
// export const getNews = async (limit) => {
//   return await api.get(`/news/${limit}`);
// };

// POST
export const register = async (data) => {
  return await api.post(`/auth/register`, data);
};

export const login = async (data) => {
  return await api.post(`/auth/login`, data);
};

export const createProduct = async (user_id, data) => {
  return await api.post(`/products/${user_id}`, data);
};
