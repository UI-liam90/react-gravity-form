import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ValidationMessage from '../../FormElements/ValidationMessage';

export default ({
  startDate,
  format,
  defaultProps,
}) => {
  const {
    field,
    value,
    validationMessage,
    touched,
    setTouched,
    updateForm,
    error,
    unsetError,
    setFocusClass,
    setDate,
    styledComponents,
  } = defaultProps;
  
  const {
    id, isRequired, formId, placeholder, cssClass, datepickerOptions, dateType,
  } = field;

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

  return (
    <>
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
              field,
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
              field,
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
          maxDate={cssClass.includes('past') && new Date()}
          {...dateOptions}
        />
      </SDatePicker>
      {((validationMessage && touched) || error) && (
        <ValidationMessage validationMessage={validationMessage} error={error} id={id} />
      )}
    </>
  );
};
