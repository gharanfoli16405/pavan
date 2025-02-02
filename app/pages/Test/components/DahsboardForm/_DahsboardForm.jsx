import { useFormik } from "formik";
import * as Yup from "yup";

const validate = (values) => {
  // console.log("validate values", values);
  console.log("validateScheme");

  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  return errors;
};
const validationSchema = Yup.object({
  userName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

const DahsboardForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    // validate,
    // validate,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="py-6">
        <div className="mb-5">
          <label htmlFor="userName">user Name</label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div>{formik.errors.userName}</div>
          ) : null}
        </div>
        <div className="mb-5">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.password}
            {...formik.getFieldProps("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {console.log(formik.touched)}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default DahsboardForm;
