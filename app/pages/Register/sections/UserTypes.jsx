import { Formik, Form } from "formik";
import InputField from "@components/InputField";
import BtnSubmit from "@components/BtnSubmit";
import RadioButtonField from "@components/RadioButtonField";

const userTypes = [
  { name: "isNaturalPerson", value: "true", label: "حقیقی" },
  { name: "isNaturalPerson", value: "false", label: "حقوقی" },
];

const UserTypes = ({ setStep }) => {
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          isNaturalPerson: "true",
        }}
        // validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
          setStep((prevState) => prevState + 1);
        }}
      >
        <Form>
          <div className="mb-5">
            <div role="group" aria-labelledby="my-radio-group">
              <RadioButtonField items={userTypes} />
            </div>
          </div>
          <div className="mb-5">
            <InputField type="text" name="userName" label="شماره موبایل" />
          </div>
          <div>
            <BtnSubmit>ثبت نام</BtnSubmit>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default UserTypes;
