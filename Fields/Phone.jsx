import React from 'react';
import { Box } from 'rebass';

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  hideField,
  updateForm,
  ...props
}) => {
  const {
    id,
    type,
    label,
    cssClass,
    placeholder,
    isRequired,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;
  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <div className={type}>
        <label htmlFor={`input_${id}`} className={`gf-label ${labelPlacement}`}>
          {label}
          {isRequired ? <abbr>*</abbr> : null}
        </label>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            <input
              id={`input_${id}`}
              name={customName || `input_${id}`}
              type={type}
              value={!value ? '' : value}
              placeholder={placeholder}
              maxLength={maxLength}
              required={isRequired}
              onChange={event => updateForm(event, field)}
              onBlur={(event) => {
                updateForm(event, field);
                setTouched(id);
              }}
              aria-describedby={`error_${id}`}
              aria-invalid={!!validationMessage && touched}
            />
            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
        {validationMessage && touched && (
          <span className="error-message" id={`error_${id}`}>
            {validationMessage}
          </span>
        )}
      </div>
    </Box>
  );
};
