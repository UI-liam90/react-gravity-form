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
    isRequired,
    choices,
    inputs,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName
  } = field;
  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <fieldset className="checkboxes">
        <legend className={`group-label ${labelPlacement}`}>
          {label}
          {label && isRequired ? <abbr>*</abbr> : null}
        </legend>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            {choices.map((choice, i) => (
              <div className={type} key={choice.value}>
                <input
                  id={`input_${inputs[i].id}`}
                  type="checkbox"
                  name={customName || `input_${inputs[i].id}`}
                  value={choice.value}
                  checked={value.includes(choice.value)}
                  onChange={(event) => {
                    updateForm(event, field);
                    setTouched(id);
                  }}
                />
                <label htmlFor={`input_${inputs[i].id}`}>{choice.text}</label>
              </div>
            ))}
            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
        {validationMessage && touched && (
          <span className="error-message" id={`error_${id}`}>
            {validationMessage}
          </span>
        )}
      </fieldset>
    </Box>
  );
};
