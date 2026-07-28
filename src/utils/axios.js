import axios from "axios";
import isLocal from "./isLocal";

const axiosInstance = axios.create({
  baseURL: isLocal
    ? "http://localhost:9000"
    : "https://6a68b87cb2789286ad701c1f.mockapi.io/api/v1",
});

export default axiosInstance;
