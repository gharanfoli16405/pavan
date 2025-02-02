import PropTypes from "prop-types";
import { Field } from "formik";
const RadioButtonField = ({ items }) => {
  return (
    <>
      <div className="flex">
        {items.map(({ name, value, label }) => (
          <div className="mx-4">
            <label key={value}>
              <Field type="radio" name={name} value={value} />
              {label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
RadioButtonField.propTypes = {
  items: PropTypes.object,
};
export default RadioButtonField;
