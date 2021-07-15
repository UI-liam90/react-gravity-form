import React from "react";
import InputMask from "react-input-mask";

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  updateForm,
  hideField,
  styledComponents,
  error,
  unsetError,
  setFocusClass,
  cssClass,
  formatChars,
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
    inputMask,
    inputMaskValue,
  } = field;

  const {
    Input = "input",
    Label = "label",
    Box = "div",
  } = styledComponents || false;

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
        {descriptionPlacement === "above" && description && (
          <div className="description">{description}</div>
        )}
        <InputMask
          formatChars={formatChars}
          value={!value ? "" : value}
          defaultValue={!value ? "" : value}
          mask={inputMask && inputMaskValue}
          onChange={(event) => {
            updateForm(event, field);
            unsetError(id);
          }}
          onBlur={(event) => {
            updateForm(event, field, true);
            setTouched(id);
            setFocusClass(value !== "");
          }}
          onFocus={() => setFocusClass(true)}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              id={`input_${formId}_${id}`}
              name={customName || `input_${id}`}
              type={type}
              placeholder={placeholder}
              maxLength={maxLength}
              required={isRequired}
              aria-label={label}
              aria-describedby={`error_${formId}_${id}`}
              aria-invalid={(!!validationMessage && touched) || !!error}
            />
          )}
        </InputMask>
        {descriptionPlacement !== "above" && description && (
          <div className="description">{description}</div>
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
