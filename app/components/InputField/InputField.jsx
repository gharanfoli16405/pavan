import PropTypes from "prop-types";

import { Field, ErrorMessage } from "formik";

const InputField = ({ label, type, name, placeholder }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder ? placeholder : `${label} خود را وارد کنید`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="pt-3 text-red-500">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
InputField.defaultProps = {
  placeholder: "",
};

export default InputField;
