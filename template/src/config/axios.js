import axios from "axios";

const _axios = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
const me = localStorage.me && JSON.parse(localStorage.getItem("me"));
const token = me?.token;

_axios.interceptors.request.use((req) => {
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

export const api = _axios;
