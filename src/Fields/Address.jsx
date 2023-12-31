import React, { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import InputLabel from "../FormElements/InputLabel";
import { getNames } from "country-list";
import { v4 } from "uuid";

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
  language,
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

  const [countryNames, setNames] = useState(getNames());

  const inputID = useMemo(() => v4(), []);

  const {
    Input = "input",
    Label = "label",
    Box = "div",
    ReactSelect,
  } = styledComponents || false;

  const RSelect = ReactSelect || Select;

  const handleChange = (option) => {
    const event =
      option && option.target
        ? option
        : {
            target: {
              value: option,
            },
          };
    updateForm(event, field);
  };

  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field form-field--address error ${cssClass}`
          : `form-field form-field--address ${cssClass}`
      }
      style={{ display: hideField ? "none" : undefined }}
    >
      {inputs?.map(
        (input, key) =>
          !input.isHidden && (
            <div className={type} key={`${inputID}_${input.id}_${key}`}>
              <InputLabel
                formId={formId}
                id={input.id}
                label={input.label}
                labelPlacement={labelPlacement}
                isRequired={isRequired}
                styledComponent={styledComponents}
              />
              {descriptionPlacement === "above" && description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {key === 5 && countryNames ? (
                <RSelect
                  key={`${inputID}_${input.id}_${key}`}
                  onChange={(event) => {
                    handleChange(event);
                    unsetError(input.id);
                  }}
                  onBlur={(event) => {
                    updateForm(event, field);
                    setTouched(input.id);
                    setFocusClass(value !== "");
                  }}
                  onFocus={() => setFocusClass(true)}
                  options={countryNames.map((item) => {
                    return { label: item, value: item };
                  })}
                >
                  {countryNames.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </RSelect>
              ) : (
                <Input
                  id={`input_${formId}_${input.id}`}
                  key={`${inputID}_${input.id}_${key}`}
                  name={customName || `input_${input.id}`}
                  type={type}
                  value={!value ? "" : value[input.id]}
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
                    setFocusClass(value !== "");
                  }}
                  onFocus={() => setFocusClass(true)}
                  aria-label={input.label}
                  aria-describedby={`error_${formId}_${input.id}`}
                  aria-invalid={(!!validationMessage && touched) || !!error}
                />
              )}
              {descriptionPlacement !== "above" && description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {((validationMessage && touched) || error) && (
                <span className="error-message" id={`error_${formId}_${id}`}>
                  {validationMessage || error}
                </span>
              )}
            </div>
          )
      )}
    </Box>
  );
};
