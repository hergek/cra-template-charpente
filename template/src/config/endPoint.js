import { api } from "./Axios.js";

/**
 * Les HandPoints Comsommer
 * @returns
 */
/*=====================================*/
export const createLogin = () => api.post("/login");
