import axios from "axios";

const axios = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
const me = localStorage.me && JSON.parse(localStorage.getItem("me"));
const token = me?.token;

axios.interceptors.request.use((req) => {
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

export const api = axios;
