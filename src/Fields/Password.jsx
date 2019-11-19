import React from 'react';

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
    inputs,
  } = field;
  console.log('validationMessage', validationMessage);

  const { Input = 'input', Label = 'label', Box = 'div' } = styledComponents || false;
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
          <div className="ginput_container ginput_container_password">
            {inputs &&
              inputs.length &&
              inputs.map((input, i) => (
                <span
                  key={`input_${formId}_${input.id}`}
                  className={`${
                    inputs.length > 1 ? `ginput_${i === 0 ? 'left' : 'right'}` : 'medim'
                  }`}
                >
                  <Input
                    id={`input_${formId}_${input.id}_${i}`}
                    name={customName || `input_${id}${i === 1 ? `_${i}` : ''}`}
                    type={type}
                    value={input.value}
                    placeholder={placeholder}
                    required={isRequired}
                    autoComplete="off"
                    onChange={(event) => {
                      field.subId = i;
                      updateForm(event, field);
                    }}
                    onBlur={(event) => {
                      updateForm(event, field);
                      setTouched(id);
                    }}
                    aria-label={label}
                    aria-describedby={`error_${formId}_${input.id}_${i}`}
                    aria-invalid={!!validationMessage && touched}
                  />
                  {inputs && inputs.length == 2 && (
                    <label htmlFor={`input_${formId}_${input.id}_${i}`}>{input.label}</label>
                  )}
                </span>
              ))}
          </div>
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
