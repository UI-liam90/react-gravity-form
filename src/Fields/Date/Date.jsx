import React, { useState } from 'react';

// components
import DatePicker from './DatePicker';
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
    dateType,
    dateFormat,
    defaultValue,
  } = field;

  const {
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
    validationMessage,
    styledComponents,
    ...props,
  };

  const renderDateField = (dateType) => {
    switch (dateType) {
      case 'datepicker':
        return <DatePicker defaultProps={defaultProps} />;
      case 'datedropdown':
        return <DateSelect defaultProps={defaultProps} />;
      default:
        return <DateInput defaultProps={defaultProps} />;
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
