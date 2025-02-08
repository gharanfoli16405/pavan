import axios from "axios";
import { toast } from "react-toastify";
import { setCookie, getCookie } from "@utils/helper/cookie";
import { errorMessages } from "@utils/constant/errorMessages";
import { refreshToken } from "@apis/auth";

const hasCookie = await getCookie("credential");

axios.interceptors.request.use((config) => {
  config.baseURL = "https://api.escuelajs.co/api/v1";
  if (hasCookie) {
    const { access_token } = hasCookie;
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

//* response is 2XX
axios.interceptors.response.use(
  (response) => {
    const { code, message, data } = response.data;
    if (code !== 200) {
      toast.success(message);
    } else if (code === 200 && !data) {
      toast.success(message);
    }

    return response;
  },
  //! response is NOT 2XX
  async (error) => {
    const originalRequest = error.config;
    const status = error.response ? error.response.status : null;

    if (status && errorMessages[status]) {
      toast.error(errorMessages[status]);
    } else {
      toast.error("لطفا مجددا تلاش کنید");
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refresh_token } = hasCookie;
        const response = await refreshToken(refresh_token);
        const newAccessToken = response?.data?.access_token;
        const newRefreshToken = response?.data?.refresh_token;
        const lastCookie = await getCookie("credential");
        const newCookie = {
          ...lastCookie,
          access_token: newAccessToken,
          refresh_token: newRefreshToken,
        };
        await setCookie("credential", newCookie);

        axios.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        const apiResponse = await axios(originalRequest);

        // const { data } = response;
        // setUser(data);
      } catch (e) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
