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
  styledComponents,
  ...props
}) => {
  const {
    id,
    formId,
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
    customName,
  } = field;

  const { Checkbox = 'fieldset', Label = 'legend' } = styledComponents || false;

  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <Checkbox className="checkboxes">
        <Label as="legend" className={`group-label ${labelPlacement}`}>
          {label}
          {label && isRequired ? <abbr>*</abbr> : null}
        </Label>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            {choices.map((choice, i) => (
              <div className={type} key={choice.value}>
                <input
                  id={`input_${formId}_${inputs[i].id}`}
                  type="checkbox"
                  name={customName || `input_${inputs[i].id}`}
                  value={choice.value}
                  checked={value.includes(choice.value)}
                  onChange={(event) => {
                    updateForm(event, field);
                    setTouched(id);
                  }}
                />
                <label htmlFor={`input_${formId}_${inputs[i].id}`}>{choice.text}</label>
              </div>
            ))}
            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
        {validationMessage && touched && (
          <span className="error-message" id={`error_${formId}_${id}`}>
            {validationMessage}
          </span>
        )}
      </Checkbox>
    </Box>
  );
};
