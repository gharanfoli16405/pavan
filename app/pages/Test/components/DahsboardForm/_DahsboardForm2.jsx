import { Formik, Field, Form, ErrorMessage } from "formik";
// const validationSchema = Yup.object({
//   userName: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
// });

const DahsboardForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
        }}
      >
        <Form>
          <label htmlFor="userName">userName</label>
          <Field name="userName" type="text" />
          <ErrorMessage name="userName" />

          <label htmlFor="password">password</label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default DahsboardForm;
