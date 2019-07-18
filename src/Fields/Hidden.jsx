import React from 'react';
import queryString from 'query-string';

export default ({
  field, value, validationMessage, touched, setTouched, updateForm, ...props
}) => {
  const { id, type, isRequired, customName } = field;
  let prePopulated = false;
  if (field.allowsPrepopulate) {
    const queries = queryString.parse(location.search);
    prePopulated = queries[field.inputName];
  }
  return (
    <div>
      <input
        name={customName || `input_${id}`}
        type={type}
        value={!prePopulated ? value : prePopulated}
        required={isRequired}
        onChange={event => updateForm(event, field)}
        onBlur={(event) => {
          updateForm(event, field);
          setTouched(id);
        }}
        aria-describedby={`error_${id}`}
        aria-invalid={!!validationMessage}
      />
      {validationMessage && touched && (
        <span className="error-message" id={`error_${id}`}>
          {validationMessage}
        </span>
      )}
    </div>
  );
};
