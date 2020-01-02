import axios from "axios";
const service = axios.create({
  baseURL: "https://api.chejiangshan.com",
  timeout: 5000
});
export const post = (url, data) => service.post(url, data);
export default service;
