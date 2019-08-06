import React, { useState } from 'react';
import Select from 'react-select';
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
    type,
    label,
    cssClass,
    isRequired,
    choices,
    placeholder,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;
  // Map options
  const options = choices.map(choice => ({ value: choice.value, label: choice.text }));
  // Handle State
  const [selectedOption, selectOption] = useState(value || '');
  // Handle change
  const handleChange = (option) => {
    selectOption(option);
    const event = {
      target: {
        value: option,
      },
    };
    updateForm(event, field);
  };
  // Handle Blur
  const handleBlur = () => {
    const event = {
      target: {
        value: selectedOption,
      },
    };
    updateForm(event, field);
    setTouched(id);
  };
  const { SelectStyles, Label = 'label' } = styledComponents || false;
  const customStyles = SelectStyles || {
    control: (provided, state) => ({
      ...provided,
      height: 50,
      borderWidth: '2px',
      borderColor: '#DBDBDB',
    }),
  };
  return (
    <Box
      width={width}
      className={
        validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <div className={type}>
        <Label htmlFor={`input_${id}`} className={`gf-label ${labelPlacement}`}>
          {label}
          {isRequired ? <abbr>*</abbr> : null}
        </Label>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            <Select
              name={customName || `input_${id}`}
              required={isRequired}
              value={selectedOption}
              onChange={option => handleChange(option, field)}
              onBlur={() => handleBlur()}
              placeholder={placeholder}
              options={options}
              className="form-select"
              styles={customStyles}
              inputId={`input_${id}`}
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
