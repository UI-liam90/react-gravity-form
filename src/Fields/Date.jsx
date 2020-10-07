import React, { useState } from "react";
import DatePicker from "react-datepicker";

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
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    inputs,
    customName,
    dateType,
    dateFormat,
    defaultValue,
    datepickerOptions,
  } = field;

  const {
    Input = "input",
    Label = "label",
    Box = "div",
    DatePicker: SdatePicker = "div",
    ReactSelect,
  } = styledComponents || false;

  const RSelect = ReactSelect || Select;

  // conver date format
  const format = dateFormat && dateFormat === "dmy" ? "dd/MM/yyyy" : false;

  let selectedValue = defaultValue ? new Date(defaultValue) : false;
  if (format && defaultValue) {
    const tmpFormat = defaultValue.indexOf("/") > -1;
    const dateParts = tmpFormat
      ? defaultValue.split("/")
      : defaultValue.split("-");

    const dateObject = tmpFormat
      ? new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
      : dateParts;

    selectedValue = dateObject;
  }

  const [startDate, setDate] = useState(selectedValue);

  const getFormattedInputs = (items) => {
    if (dateType) {
      if (dateType === "datefield") {
        // 0 - MM
        // 1 - DD
        // 2 - YYYY
        switch (dateFormat) {
          case "dmy":
          case "dmy_dash":
          case "dmy_dot":
            return [items[1], items[0], items[2]];
          case "ymd_slash":
          case "ymd_dash":
          case "ymd_dot":
            return [items[2], items[0], items[1]];
          default:
            return items;
        }
      } else if (dateType === "datedropdown") {
        return [items[1], items[0], items[2]];
      }
    }
    return items;
  };

  const formatedInputs = getFormattedInputs(inputs);

  const adjustDatePickerOptions = (options) => {
    if (dateType && dateType === "datepicker" && options) {
      const keys = Object.keys(options);
      if (keys && keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] === "minDate" || keys[i] === "maxDate") {
            options[keys[i]] = new Date(options[keys[i]]);
          }
        }
      }
    }
    return options;
  };
  const dateOptions = adjustDatePickerOptions(datepickerOptions) || {};

  const get_number_dropdown = (selected_value, start_number, end_number) => {
    const options = [];
    const increment = start_number < end_number ? 1 : -1;
    for (let i = start_number; i != end_number + increment; i += increment) {
      options.push({
        value: i,
        label: i,
        selected: parseInt(i) === parseInt(selected_value),
      });
    }
    return options;
  };

  const handleChange = (value, field, index) => {
    const tmp = startDate || [];
    const key = index === 0 ? 2 : index === 2 ? 0 : 1;
    tmp[key] = value.value;

    setDate(tmp);

    const event = {
      target: {
        value: value.value,
      },
    };
    updateForm(event, field);
  };

  const getValueByIndex = (index) => {
    if (!startDate) return;

    const i = index === 0 ? 2 : index === 1 ? 1 : 0;

    return startDate[i]
      ? { value: startDate[i], label: startDate[i] }
      : undefined;

    // index === 0 && startDate['2']
    //   ? { value: startDate['2'], label: startDate['2'] }
    //   : index === 1 && startDate['1']
    //   ? { value: startDate['1'], label: startDate['1'] }
    //   : startDate['0']
    //   ? { value: startDate['0'], label: startDate['0'] }
    //   : undefined;
  };

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
      <Label
        htmlFor={`input_${formId}_${id}`}
        className={`gf-label ${labelPlacement}`}
      >
        {label}
        {isRequired ? <abbr>*</abbr> : null}
      </Label>
      <div className={type}>
        {descriptionPlacement === "above" && description && (
          <div className="description">{description}</div>
        )}
        {dateType && dateType !== "datefield" ? (
          dateType === "datepicker" ? (
            <>
              <SdatePicker className="ginput_container ginput_container_date">
                <DatePicker
                  name={`input_${id}`}
                  id={`input_${formId}_${id}`}
                  type="text"
                  className="datepicker hasDatepicker"
                  selected={startDate}
                  onChange={(date) => {
                    setDate(date);
                    updateForm(
                      {
                        target: {
                          value: date,
                        },
                      },
                      field
                    );
                    setTouched(id);
                    unsetError(id);
                    setFocusClass(date);
                  }}
                  onBlur={(e) => {
                    updateForm(
                      {
                        target: {
                          value: startDate,
                        },
                      },
                      field
                    );
                    setTouched(id);
                    unsetError(id);
                    setFocusClass(startDate);
                  }}
                  dateFormat={format || undefined}
                  onFocus={() => setFocusClass(true)}
                  autoComplete="off"
                  required={isRequired}
                  placeholderText={placeholder}
                  maxDate={cssClass.includes("past") && new Date()}
                  {...dateOptions}
                />
              </SdatePicker>
              {((validationMessage && touched) || error) && (
                <span className="error-message" id={`error_${formId}_${id}`}>
                  {validationMessage || error}
                </span>
              )}
            </>
          ) : (
            <>
              {formatedInputs &&
                formatedInputs.map((input, index) => (
                  <div key={input.id} className="gfield_date_dropdown">
                    <RSelect
                      required={isRequired}
                      placeholder={input.placeholder}
                      options={
                        index === 0
                          ? get_number_dropdown(1, 1, 31)
                          : index === 1
                          ? get_number_dropdown(3, 1, 12)
                          : get_number_dropdown(
                              0,
                              1920,
                              new Date().getFullYear()
                            )
                      }
                      value={getValueByIndex(index)}
                      id={`input_${formId}_${id}_${index + 1}`}
                      name={customName || `input_${id}[]`}
                      onBlur={(event) => {
                        const value = getValueByIndex(index);
                        if (!value) {
                          const tmpState = {
                            ...field,
                            subId: index,
                            dateLabel: input.label,
                          };
                          handleChange({ value: "" }, tmpState, index);
                        }
                        setTouched(id);
                        unsetError(id);
                        setFocusClass(input.value !== "");
                      }}
                      onChange={(option) => {
                        const tmpState = {
                          ...field,
                          subId: index,
                          dateLabel: input.label,
                        };
                        handleChange(option, tmpState, index);
                        unsetError(id);
                      }}
                      onFocus={() => setFocusClass(true)}
                    />
                  </div>
                ))}
              {((validationMessage && touched) || error) && (
                <span className="error-message" id={`error_${formId}_${id}`}>
                  {validationMessage || error}
                </span>
              )}
            </>
          )
        ) : (
          <>
            {formatedInputs &&
              formatedInputs.map((item, index) => (
                <div className={type} key={item.id}>
                  <Input
                    id={`input_${formId}_${id}_${index}`}
                    type="number"
                    name={customName || `input_${id}[]`}
                    placeholder={item.placeholder}
                    step="1"
                    min="1"
                    max={
                      item.label === "MM"
                        ? 12
                        : item.label === "DD"
                        ? 31
                        : new Date().getFullYear() + 1
                    }
                    maxLength={item.label === "YYYY" ? 4 : 2}
                    value={item.value}
                    onBlur={(event) => {
                      field.subId = index;
                      field.dateLabel = item.label;
                      updateForm(event, field);
                      setTouched(id);
                      unsetError(id);
                      setFocusClass(item.value !== "");
                    }}
                    onFocus={() => setFocusClass(true)}
                  />
                  <label
                    htmlFor={`input_${formId}_${id}_${index}`}
                    className="hide-label"
                  >
                    {item.label}
                  </label>
                  {validationMessage &&
                    touched &&
                    validationMessage[index] &&
                    index === validationMessage[index].index &&
                    validationMessage[index].message && (
                      <span
                        className="error-message"
                        id={`error_${formId}_${item.id}`}
                      >
                        {validationMessage[index].message}
                      </span>
                    )}
                  {error && <span className="error-message">{error}</span>}
                </div>
              ))}
          </>
        )}
        {descriptionPlacement !== "above" && description && (
          <div className="description">{description}</div>
        )}
      </div>
    </Box>
  );
};
