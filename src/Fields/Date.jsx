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
    inputs,
    customName,
  } = field;

  const { Input = 'input', Label = 'label', Box = "div" } = styledComponents || false;

  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <Label htmlFor={`input_${formId}_${id}`} className={`gf-label ${labelPlacement}`}>
        {label}
        {isRequired ? <abbr>*</abbr> : null}
      </Label>
      <div className={type}>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            {inputs
              && inputs.map((item, index) => (
                <div className={type} key={item.id}>
                  <Input
                    id={`input_${formId}_${id}_${index}`}
                    type="number"
                    name={customName || `input_${id}[]`}
                    placeholder={item.placeholder}
                    step="1"
                    min="1"
                    max={
                      item.label === 'MM'
                        ? 12
                        : item.label === 'DD'
                          ? 31
                          : new Date().getFullYear() + 1
                    }
                    maxLength={item.label === 'YYYY' ? 4 : 2}
                    value={item.value}
                    onBlur={(event) => {
                      field.subId = index;
                      field.dateLabel = item.label;
                      updateForm(event, field);
                      setTouched(id);
                    }}
                  />
                  <label htmlFor={`input_${formId}_${id}_${index}`} className="hide-label">
                    {item.label}
                  </label>
                  {validationMessage
                    && touched
                    && validationMessage[index]
                    && index === validationMessage[index].index
                    && validationMessage[index].message && (
                    <span className="error-message" id={`error_${formId}_${item.id}`}>
                      {validationMessage[index].message}
                    </span>
                  )}
                </div>
              ))}

            {description && <div className="description">{description}</div>}
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
