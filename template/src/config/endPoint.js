import { api } from "./Axios.js";

/**
 * Les HandPoints Comsommer
 * @returns
 */
/*=====================================*/
//** login */
export const createLogin = () => api.post("/login");

//** Users */
export const createUser = () => api.post("/login");
export const findAllUsers = () => api.get("/login");
export const findUserAndUpdate = () => api.put("/login");
export const findOneUserAndDelete = () => api.delete("/login");
