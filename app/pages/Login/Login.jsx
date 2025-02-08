import { Formik, Form } from "formik";
import { login } from "@apis/auth";
import InputField from "@components/InputField";
import PasswordField from "@components/PasswordField/PasswordField";
import { setCookie } from "@utils/helper/cookie";
import { getProduct } from "@apis/apiTest";

// import { loginSchema } from "@utils/validation/loginSchema";
// import BtnSubmit from "@components/BtnSubmit";
// email : john@mail.com ,  password : changeme

const Login = () => {
  const handleLogin = ({ email, password }) => {
    const params = { email, password };
    login(params).then((response) => {
      if (response?.status === 200 || response?.status === 201) {
        const { access_token, refresh_token } = response.data;
        setCookie("credential", {
          access_token: access_token,
          refresh_token: refresh_token,
        });
      }
    });
  };

  const handleGetData = () => {
    getProduct().then((response) => {
      if (response?.status === 200 || response?.status === 201) {
        console.log("-getData product");
      }
    });
  };
  return (
    <>
      <div className="px-5 mx-5 border border-black">
        <button onClick={handleGetData}>GET_PRODUCT</button>
      </div>
      <div className="w-10/12 xl:w-4/12">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          // validationSchema={loginSchema}
          onSubmit={async (values) => {
            await handleLogin(values);
          }}
        >
          <Form>
            <div className="mb-5">
              <InputField type="text" name="email" label="شماره موبایل" />
            </div>
            <div className="mb-5">
              <PasswordField name="password" label="رمز عبور" />
            </div>
            <div>
              <button type="submit">Submit</button>
              {/* <BtnSubmit> </BtnSubmit> */}
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
