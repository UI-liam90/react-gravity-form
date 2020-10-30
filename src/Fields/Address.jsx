import React, { useState } from 'react';
import Select from 'react-select';
import InputLabel from '../FormElements/InputLabel';

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  hideField,
  updateForm,
  styledComponents,
  error,
  unsetError,
  setFocusClass,
  cssClass,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    placeholder,
    isRequired,
    inputs,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;

  const {
Input = 'input', Label = 'label', Box = 'div',
  } = styledComponents || false;


  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass}`
          : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      {inputs.map(input => (
        !input.isHidden && (
          <div className={type} key={input.id}>
            <InputLabel
              formId={formId}
              id={input.id}
              label={input.label}
              labelPlacement={labelPlacement}
              isRequired={isRequired}
              styledComponent={styledComponents}
            />
            {descriptionPlacement === 'above' && description && (
              <div className="description">{description}</div>
            )}

            <Input
              id={`input_${formId}_${input.id}`}
              key={input.id}
              name={customName || `input_${input.id}`}
              type={type}
              value={!value ? '' : value[input.id]}
              placeholder={input.placeholder}
              maxLength={maxLength}
              required={isRequired}
              onChange={(event) => {
                updateForm(event, field, input.id);
                unsetError(input.id);
              }}
              onBlur={(event) => {
                updateForm(event, field);
                setTouched(input.id);
                setFocusClass(value !== '');
              }}
              onFocus={() => setFocusClass(true)}
              aria-label={input.label}
              aria-describedby={`error_${formId}_${input.id}`}
              aria-invalid={(!!validationMessage && touched) || !!error}
            />
            {descriptionPlacement !== 'above' && description && <div className="description">{description}</div>}
            {((validationMessage && touched) || error) && (
              <span className="error-message" id={`error_${formId}_${id}`}>
                {validationMessage || error}
              </span>
            )}
          </div>
        )
      ))}
    </Box>
  );
};
