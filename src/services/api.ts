import axios from "axios";
const api = axios.create({
  baseURL: "https://empresas.ioasys.com.br/api",
});

export default api;
