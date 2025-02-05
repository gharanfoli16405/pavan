import { Formik, Form } from "formik";
import InputField from "@components/InputField";
import PasswordField from "@components/PasswordField/PasswordField";
// import { loginSchema } from "@utils/validation/loginSchema";
import { login } from "@apis/auth";
// import BtnSubmit from "@components/BtnSubmit";

const Login = () => {
  const handleLogin = ({ email, password }) => {
    // email : john@mail.com ,  password : changeme
    const params = { email, password };

    login(params).then((response) => {
      console.log("🚀 ~ login ~ response.status:", response.status);
      if (response.status === 200) {
        console.log("response", response);
      }
    });
  };

  return (
    <>
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
