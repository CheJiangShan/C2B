import axios from "axios";
const service = axios.create({
  // http://mafan.natapp1.cc  
  baseURL: "https://api.chejiangshan.com",
  timeout: 5000
});
export const post = (url, data) => service.post(url, data);
export default service;
