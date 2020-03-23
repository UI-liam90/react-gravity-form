import React, { useState } from "react";
import Select from "react-select";

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  setFocusClass,
  hideField,
  updateForm,
  styledComponents,
  error,
  cssClass,
  unsetError,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    isRequired,
    choices,
    placeholder,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName
  } = field;

  let selected = '';
  // Map options
  const options = choices.map(choice => {
    const item = {
      value: choice.value,
      label: choice.text
    };
    if (choice.isSelected) {
      selected = item;
    }
    return item;
  });
  // Handle State
  const [selectedOption, selectOption] = useState(value || selected);
  // Handle change
  const handleChange = option => {
    selectOption(option);
    const event = {
      target: {
        value: option
      }
    };
    updateForm(event, field);
  };
  // Handle Blur
  const handleBlur = () => {
    const event = {
      target: {
        value: selectedOption
      }
    };
    updateForm(event, field);
    setTouched(id);
  };
  const { ReactSelect, Label = "label", Box = "div" } =
    styledComponents || false;

  const RSelect = ReactSelect || Select;

  console.log(selectedOption);

  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass}`
          : `form-field ${cssClass}`
      }
      style={{ display: hideField ? "none" : undefined }}
    >
      <div className={type}>
        <Label
          htmlFor={`input_${formId}_${id}`}
          className={`gf-label ${labelPlacement}`}
        >
          {label}
          {isRequired ? <abbr>*</abbr> : null}
        </Label>
        {descriptionPlacement === "above" && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            <RSelect
              name={customName || `input_${id}`}
              required={isRequired}
              value={selectedOption && selectedOption.value ? selectedOption : ''}
              onChange={option => {
                handleChange(option, field);
                unsetError(id);
              }}
              onBlur={() => handleBlur()}
              onFocus={() => setFocusClass(true)}
              placeholder={placeholder}
              options={options}
              className="form-select"

              // styles={customStyles}
              inputId={`input_${formId}_${id}`}
            />
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
