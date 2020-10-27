import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// components
// import DatePicker from './DatePicker';
import DateSelect from './DateSelect';
import DateInput from './DateInput';

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
    isRequired,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    inputs,
    placeholder,
    dateType,
    datepickerOptions,
    dateFormat,
    defaultValue,
  } = field;

  const {
    Input = 'input',
    Label = 'label',
    Box = 'div',
  } = styledComponents || false;

  // convert date format
  const format = dateFormat && dateFormat === 'dmy' ? 'dd/MM/yyyy' : false;
  let selectedValue = defaultValue ? new Date(defaultValue) : false;

  if (format && defaultValue) {
    const tmpFormat = defaultValue.indexOf('/') > -1;
    const dateParts = tmpFormat
      ? defaultValue.split('/')
      : defaultValue.split('-');

    const dateObject = tmpFormat
      ? new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
      : dateParts;

    selectedValue = dateObject;
  }

  const [startDate, setDate] = useState(selectedValue);

  const getFormattedInputs = (items) => {
    if (dateType) {
      if (dateType === 'datefield') {
        switch (dateFormat) {
          case 'dmy':
          case 'dmy_dash':
          case 'dmy_dot':
            return [items[1], items[0], items[2]];
          case 'ymd_slash':
          case 'ymd_dash':
          case 'ymd_dot':
            return [items[2], items[0], items[1]];
          default:
            return items;
        }
      } else if (dateType === 'datedropdown') {
        return [items[1], items[0], items[2]];
      }
    }
    return items;
  };

  const formattedInputs = getFormattedInputs(inputs);

  const defaultProps = {
    validationMessage,
    id,
    field,
    format,
    formattedInputs,
    updateForm,
    startDate,
    setTouched,
    setDate,
    setFocusClass,
    error,
    unsetError,
    styledComponents,
  };
  const SDatePicker = DatePicker || 'div';

  const adjustDatePickerOptions = (options) => {
    if (dateType && dateType === 'datepicker' && options) {
      const keys = Object.keys(options);
      if (keys && keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] === 'minDate' || keys[i] === 'maxDate') {
            options[keys[i]] = new Date(options[keys[i]]);
          }
        }
      }
    }
    return options;
  };

  const dateOptions = adjustDatePickerOptions(datepickerOptions) || {};

  const renderDateField = (dateType) => {
    switch (dateType) {
      case 'datepicker':
        return  <>
          <SDatePicker className="ginput_container ginput_container_date">
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
          </SDatePicker>
          {((validationMessage && touched) || error) && (
            <span className="error-message" id={`error_${formId}_${id}`}>
                  {validationMessage || error}
                </span>
          )}
        </>;
      case 'datedropdown':
        return <DateSelect defaultProps={defaultProps}/>;
      default:
        return <DateInput defaultProps={defaultProps}/>;
    }
  };

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
      <Label
        htmlFor={`input_${formId}_${id}`}
        className={`gf-label ${labelPlacement}`}
      >
        {label}
        {isRequired ? <abbr>*</abbr> : null}
      </Label>
      <div className={type}>
        {descriptionPlacement === 'above' && description && (
          <div className="description">{description}</div>
        )}
        {dateType && renderDateField(dateType)}
        {descriptionPlacement !== 'above' && description && (
          <div className="description">{description}</div>
        )}
      </div>
    </Box>
  );
};
