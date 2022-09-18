import axios from "axios";

//O endereço deverá ser o ip da sua máquina e não "localhost".

const api = axios.create({
  baseURL: "http://192.168.0.106:3000",
});

export default api;
