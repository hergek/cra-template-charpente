import api from "./axios.js";

/**
 * Les HandPoints Comsommer
 * @returns
 */
/*=====================================*/
export const createLogin = () => api.post("/login");
