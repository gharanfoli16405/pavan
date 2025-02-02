import * as Yup from "yup";
export const loginSchema = Yup.object({
  userName: Yup.string()
    .matches(/^(\+98|0)?9\d{9}$/, "Invalid phone number")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});
