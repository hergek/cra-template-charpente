import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE });
const me = localStorage.me && JSON.parse(localStorage.getItem("me"));
const token = me?.token;

api.interceptors.request.use((req) => {
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

export default api;
