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
    placeholder,
    isRequired,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;

  const { Textarea = 'textarea', Label = 'label' } = styledComponents || false;

  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <div className={type}>
        <Label htmlFor={`input_${formId}_${id}`} className={`gf-label ${labelPlacement}`}>
          {label}
          {isRequired ? <abbr>*</abbr> : null}
        </Label>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            <Textarea
              id={`input_${formId}_${id}`}
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
              aria-describedby={`error_${formId}_${id}`}
              aria-invalid={!!validationMessage && touched}
            />
            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
        {validationMessage && touched && (
          <span className="error-message" id={`error_${formId}_${id}`}>
            {validationMessage}
          </span>
        )}
      </div>
    </Box>
  );
};
