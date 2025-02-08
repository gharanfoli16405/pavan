import axios from "./https";

// readCookie();

const forgetPassword = async (params) => {
  const url = `/forget_password/request`;
  const data = await axios.post(params, url);
};

const login = async (params) => {
  const url = `/auth/login`;
  const data = await axios.post(url, params);
  return data;
};

const refreshToken = async () => {
  const url = `/auth/refresh-token`;
  const data = await axios.post(url, params);
  return data;
};

export { login, forgetPassword, refreshToken };

if (error.response.status === 401 && !originalRequest._retry) {
  originalRequest._retry = true;
  try {
    const refreshToken = await getRefreshToken();
    const response = await refreshTokenApi({ refreshToken: refreshToken });

    const newAccessToken = response?.data?.access_token;
    const newRefreshToken = response?.data?.refresh_token;

    const lastCookie = await getCookie("credential");
    const newCookie = {
      ...lastCookie,
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };

    console.log("new credential is \n:", newCookie);
    await setCookie("credential", newCookie);

    apiClient.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;

    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

    return apiClient(originalRequest);
  } catch (error) {
    console.log("failed to submit new refresh token!");
    return Promise.reject(error);
  }
}
