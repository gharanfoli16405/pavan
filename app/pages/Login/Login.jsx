import { Formik, Form } from "formik";
import InputField from "@components/InputField";
import PasswordField from "@components/PasswordField/PasswordField";
import { loginSchema } from "@utils/validation/loginSchema";
import BtnSubmit from "@components/BtnSubmit";
import { setCookie, getCookie } from "@utils/helper/cookie";

const Login = () => {
  const setCookieAsync = async () => {
    try {
      // شبیه‌سازی دریافت داده با setTimeout
      const userData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            name: "Mohsen",
            email: "johndoe@example.com",
          });
        }, 2000); // تاخیر 2 ثانیه برای شبیه‌سازی درخواست شبکه
      });

      // ذخیره داده در کوکی
      setCookie("testData", userData);
    } catch (error) {
      console.error("Failed to set cookie:", error);
    }
  };

  return (
    <>
      <div className="w-10/12 xl:w-4/12">
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values", values);
          }}
        >
          <Form>
            <div className="mb-5">
              <InputField type="text" name="userName" label="شماره موبایل" />
            </div>
            <div className="mb-5">
              <PasswordField name="password" label="رمز عبور" />
            </div>
            <div>
              <BtnSubmit> ورود به حساب</BtnSubmit>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
