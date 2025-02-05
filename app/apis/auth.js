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
export { login, forgetPassword };

//  const setCookieAsync = async () => {
//     try {
//       const userData = await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({
//             id: 1,
//             name: "Mohsen",
//             email: "johndoe@example.com",
//           });
//         }, 2000); // تاخیر 2 ثانیه برای شبیه‌سازی درخواست شبکه
//       });
