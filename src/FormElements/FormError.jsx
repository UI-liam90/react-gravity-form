import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ errorMessage, errors, fields }) => (
  <div>
    <div className="form-error">{errorMessage}</div>
    {/* <ul>
      {Object.keys(errors).map(item => (
        <li className="travelcompany-input" key={item}>
          <span className="input-label">
            {fields[item].label}: {errors[item]}
          </span>
        </li>
      ))}
    </ul> */}
  </div>
);

FormError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  // errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  // fields: PropTypes.object.isRequired,
};

export default FormError;
