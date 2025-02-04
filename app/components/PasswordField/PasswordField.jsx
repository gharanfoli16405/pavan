import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const PasswordField = ({ name, label, placeholder }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          autocomplete="off"
          name={name}
          type={isShow ? "text" : "password"}
          placeholder={placeholder ? placeholder : `${label} خود را وارد کنید`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          className="absolute  left-4 top-1/2 -translate-y-1/2 flex items-center  z-10 border border-gray-300 rounded-md p-1"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "hide" : "show"}
        </button>
      </div>

      <div className="pt-3 text-red-500">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
PasswordField.defaultProps = {
  placeholder: "",
};

export default PasswordField;
