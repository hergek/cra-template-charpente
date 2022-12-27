import { api } from "./Axios.js";

/**
 * Les HandPoints Comsommer
 * @returns
 */
/*=====================================*/
//** login */
export const createLogin = () => api.post("/login");

//** Users */
export const createUser = () => api.post("/user");
export const findAllUsers = () => api.get("/user");
export const findOneUser = (id) => api.get(`/user/${id}`);
export const findUserAndUpdate = (id, data) => api.patch(`/user/${id}`, data);
export const findUserAndUpdateRole = (id, data) =>
  api.patch(`/user/${id}/role`, data);
export const findUserAndUpdatePassword = (id, data) =>
  api.patch(`/user/${id}/password`, data);
export const findUserAndUpdateResetPassword = (id) =>
  api.patch(`/user/${id}/reset`);
export const findOneUserAndToggle = (id) => api.patch(`/user/${id}/toggle`);
export const findOneUserAndDelete = (id) => api.delete(`/user/${id}`);

//**Province */
export const createProvince = (data) => api.post("/province", data);
export const findAllProvince = () => api.get("/province");
export const findOneProvince = (id) => api.get(`/province/${id}`);
export const findProvinceAndUpdate = (id, data) =>
  api.patch(`/province/${id}`, data);
export const findProvinceAndDelete = (id) => api.delete(`/province/${id}`);
