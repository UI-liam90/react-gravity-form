import React, { useMemo } from "react";
import InputLabel from "../FormElements/InputLabel";
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
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    inputs,
    cssClass,
    isRequired,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
    checkboxLabel,
  } = field;

  const {
    Consent = "div",
    Label = "label",
    Box = "div",
  } = styledComponents || false;
  const inputID = useMemo(() => v4(), []);
  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field form-field--consent consent error ${cssClass}`
          : `form-field form-field--consent consent ${cssClass}`
      }
      style={{ display: hideField ? "none" : undefined }}
    >
      <Consent className="checkboxes">
        <InputLabel
          formId={formId}
          id={id}
          label={label}
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
        {inputs
          .filter((s) => !s.isHidden)
          .map((input, i) => (
            <React.Fragment key={`${inputID}_${input.id}_${i}`}>
              {i === 0 && (
                <React.Fragment>
                  <input
                    id={`input_${formId}_${id}_1`}
                    type="checkbox"
                    name={customName || `input_${input.id}`}
                    value={1}
                    required={isRequired}
                    // checked={!value}
                    onChange={(event) => {
                      updateForm(event, field);
                      setTouched(id);
                      unsetError(id);
                    }}
                    aria-invalid={(!!validationMessage && touched) || !!error}
                  />
                  <label
                    className="gfield_consent_label"
                    htmlFor={customName || `input_${formId}_${id}_1`}
                    dangerouslySetInnerHTML={{ __html: checkboxLabel }}
                  />
                </React.Fragment>
              )}
              {i === 1 && (
                <input
                  type="hidden"
                  name={`input_${input.id}`}
                  value={checkboxLabel}
                  className="gform_hidden"
                />
              )}
              {i === 2 && (
                <input
                  type="hidden"
                  name={`input_${input.id}`}
                  value="1"
                  className="gform_hidden"
                />
              )}
            </React.Fragment>
          ))}
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
      </Consent>
    </Box>
  );
};
