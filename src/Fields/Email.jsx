import React, { useState } from 'react';

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
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
    emailConfirmEnabled,
    inputs,
  } = field;

  const [emails, setEmails] = useState(inputs);

  const setFocusClass = (action, i) => {
    const email = { ...emails };
    if (action) {
      email[i].cssClass = 'filled';
    } else {
      email[i].cssClass = '';
    }
    setEmails(email);
  };

  const { Input = 'input', Label = 'label', Box = 'div' } = styledComponents || false;
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
      <div className={type}>
        <Label htmlFor={`input_${formId}_${id}`} className={`gf-label ${labelPlacement}`}>
          {label}
          {isRequired ? <abbr>*</abbr> : null}
        </Label>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            {emailConfirmEnabled ? (
              <>
                {inputs && inputs.length && inputs.map((input, i) => (
                  <span
                    key={`input_${formId}_${input.id}`}
                    className={`${
                      inputs.length > 1 ? `ginput_${i === 0 ? 'left' : 'right'}` : 'medim'
                    } ${emails[i].cssClass ? emails[i].cssClass : ''}`}
                  >
                    <Label className={`gf-label ${labelPlacement}`} htmlFor={`input_${formId}_${input.id}_${i}`}>{input.label}{isRequired ? <abbr>*</abbr> : null}</Label>
                    <Input
                      id={`input_${formId}_${input.id}_${i}`}
                      name={customName || `input_${id}${i === 1 ? `_${i + 1}` : ''}`}
                      type={type}
                      value={value && value[i] && value[i].val ? value[i].val : ''}
                      placeholder={input.label ? input.label : placeholder}
                      required={isRequired}
                      autoComplete="off"
                      onChange={(event) => {
                        field.subId = i;
                        updateForm(event, field);
                        unsetError(id);
                      }}
                      onBlur={(event) => {
                        field.subId = i;
                        updateForm(event, field);
                        setTouched(id);
                        setFocusClass(value && value[i] && value[i].val && value[i].val !== '', i);
                      }}
                      onFocus={() => setFocusClass(true, i)}
                      aria-label={label}
                      aria-describedby={`error_${formId}_${input.id}_${i}`}
                      aria-invalid={!!validationMessage && touched}
                    />
                  </span>
                ))}
              </>
            ) : (
              <>
                <Input
                  id={`input_${formId}_${id}`}
                  name={customName || `input_${id}`}
                  type={type}
                  value={!value ? '' : value}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  required={isRequired}
                  onChange={(event) => {
                    updateForm(event, field);
                    unsetError(id);
                  }}
                  onBlur={(event) => {
                    updateForm(event, field);
                    setTouched(id);
                    setFocusClass(value !== '');
                  }}
                  onFocus={() => setFocusClass(true)}
                  aria-label={label}
                  aria-describedby={`error_${formId}_${id}`}
                  aria-invalid={(!!validationMessage && touched) || !!error}
                />
              </>
            )}
            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
        {((validationMessage && touched) || error) && (
          <span className="error-message" id={`error_${formId}_${id}`}>
            {validationMessage || error}
          </span>
        )}
      </div>
    </Box>
  );
};
