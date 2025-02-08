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
