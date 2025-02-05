import axios from "axios";
import { setCookie, getCookie } from "@utils/helper/cookie";

const readCookie = async () => {
  const result = await getCookie("testData");
  console.log("🚀 ~ readCookie ~ result:", result);
};

axios.interceptors.request.use(
  (config) => {
    const hasCookie = readCookie();
    // if (localStorage.getItem("access_token")) {
    //   const token = localStorage.getItem("access_token");
    //   config.headers["Authorization"] = "Bearer " + token;
    // }
    config.baseURL = "https://api.escuelajs.co/api/v1";
    return config;
  },
  (error) => {
    throw error;
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
